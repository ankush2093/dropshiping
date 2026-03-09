/**
 * Authentication API Slice
 * Handles all authentication-related API endpoints
 */

import { baseApi } from '../baseApi';
import type {
  LoginRequest,
  LoginResponse,
  UserProfile,
  LogoutResponse,
  RegisterRequest,
  RegisterResponse,
  VerifyEmailRequest,
  VerifyEmailResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
} from './authTypes';

// Auth API endpoints
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Login endpoint
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),

    // Register endpoint
    registerUser: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (registerData) => ({
        url: '/auth/signup',
        method: 'POST',
        body: registerData,
      }),
    }),

    // Verify email endpoint
    verifyEmail: builder.mutation<VerifyEmailResponse, VerifyEmailRequest>({
      query: (verifyData) => ({
        url: '/auth/verify-email',
        method: 'POST',
        body: verifyData,
      }),
    }),

    // Get user profile (requires auth)
    getUserProfile: builder.query<UserProfile, void>({
      query: () => ({
        url: '/auth/profile',
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        // Handle API response structure: { code, status, message, data: {...} }
        // The user data might be directly in data, or nested in data.user / data.profile
        const data = response.data || response;

        if (data.user) return data.user;
        if (data.profile) return data.profile;
        if (data.data) return data.data; // Handle double nesting if accidentally present

        return data; // Assume data itself is the profile if no specific keys found
      },
    }),

    // Logout endpoint
    logout: builder.mutation<LogoutResponse, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),

    // Forgot password endpoint
    forgotPassword: builder.mutation<ForgotPasswordResponse, ForgotPasswordRequest>({
      query: (payload) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: payload,
      }),
    }),

    // Reset password endpoint
    resetPassword: builder.mutation<ResetPasswordResponse, ResetPasswordRequest>({
      query: (payload) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterUserMutation,
  useVerifyEmailMutation,
  useGetUserProfileQuery,
  useLogoutMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
