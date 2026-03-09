'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useLoginMutation, useGetUserProfileQuery } from '@/store/api/auth';

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => false,
  logout: () => { },
  loading: true,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken] = useState(false);
  const router = useRouter();
  const [loginMutation] = useLoginMutation();

  // Get user profile query - only run if we have a token
  // Query will automatically fetch when hasToken becomes true
  const { data: userProfileData, isLoading: isLoadingProfile } = useGetUserProfileQuery(undefined, {
    skip: !hasToken, // Skip if no token
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    // Check if user is logged in on mount
    const checkAuth = () => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('auth_token');
        const userData = localStorage.getItem('user_data');

        if (token) {
          setHasToken(true);
          if (userData) {
            try {
              const parsedUser = JSON.parse(userData);
              setUser(parsedUser);
              // Sync cookie with localStorage for middleware
              document.cookie = `auth_token=${token}; path=/; max-age=86400; SameSite=Lax`;
            } catch (error) {
              console.error('Error parsing user data:', error);
              localStorage.removeItem('auth_token');
              localStorage.removeItem('user_data');
              document.cookie = 'auth_token=; path=/; max-age=0';
              setHasToken(false);
            }
          }
        } else {
          setHasToken(false);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  // Update user when userProfileData changes (automatic fetch when hasToken becomes true)
  useEffect(() => {
    // console.log("AuthContext: userProfileData received:", userProfileData);
    if (userProfileData) {
      // Handle API response structure: { userId, email, roleId } OR PascalCase { UserId, Email, RoleId }
      const userData: User = {
        id: (userProfileData.UserId || userProfileData.userId || userProfileData.id)?.toString() || '',
        name: userProfileData.Name || userProfileData.name || (userProfileData.Email || userProfileData.email)?.split('@')[0] || '',
        email: userProfileData.Email || userProfileData.email || '',
        createdAt: userProfileData.CreatedAt || userProfileData.createdAt,
        updatedAt: userProfileData.UpdatedAt || userProfileData.updatedAt,
      };
      // console.log("AuthContext: Setting user state to:", userData);
      setUser(userData);
      localStorage.setItem('user_data', JSON.stringify(userData));
    }
  }, [userProfileData]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await loginMutation({ email, password }).unwrap();
      console.log("AuthContext: Login API Response:", response);

      // Store the access_token as auth_token in localStorage
      // Handle multiple token key formats: access-token, Access-Token, access_token
      const accessToken = response.data?.AccessToken;

      if (!accessToken) {
        console.error('Login successful but no token found in response:', response);
        return false;
      }

      localStorage.setItem('auth_token', accessToken);

      // Set auth cookie for middleware (with proper settings)
      const isSecure = typeof window !== 'undefined' && window.location.protocol === 'https:';
      const cookieString = `auth_token=${accessToken}; path=/; max-age=86400; SameSite=Lax${isSecure ? '; Secure' : ''}`;
      document.cookie = cookieString;

      // Store PatientProfileId if available
      // PatientProfileId is no longer needed to be saved on login as per requirements


      // Set hasToken to true - this will automatically trigger the query
      setHasToken(true);

      // Since login response ONLY has token, we must rely on the query to get user details.
      // The query has refetchOnMountOrArgChange: true, so it should fire immediately.
      console.log("AuthContext: Token saved, waiting for profile query to fetch user details...");

      // Wait a bit for cookie to be set and middleware to recognize it
      await new Promise(resolve => setTimeout(resolve, 100));

      return true;
    } catch (error: any) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    localStorage.removeItem('patient_profile_id');
    document.cookie = 'auth_token=; path=/; max-age=0';
    setUser(null);
    setHasToken(false);
    router.push('/login');
  };

  // isAuthenticated should be true if we have a token OR user data
  // This helps with immediate redirect after login
  // hasToken indicates we have a valid token, even if user profile is still loading
  const isAuthenticated = !!user || hasToken;

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

