/**
 * Authentication API Types
 * All types related to authentication endpoints
 */

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  code?: number;
  status: boolean;
  message: string;
  data: {
    AccessToken?: string;
  };
}

export interface RegisterRequest {
  email: string;
  password: string;
  userType: string;
  fullName: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
}

export interface RegisterResponse {
  message: string;
}

export interface VerifyEmailRequest {
  email: string;
  code: string;
}

export interface VerifyEmailResponse {
  message: string;
}

export interface UserProfile {
  id?: number | string;
  userId?: number | string; // Some APIs return userId instead of id
  UserId?: number | string; // PascalCase from backend
  name?: string;
  Name?: string;
  email?: string; // Made optional to support strict typing if only Email is present
  Email?: string; // PascalCase from backend
  roleId?: number | string;
  RoleId?: number | string;
  createdAt?: string;
  CreatedAt?: string;
  updatedAt?: string;
  UpdatedAt?: string;
}

export interface LogoutResponse {
  success: boolean;
  message?: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}

export interface ResetPasswordResponse {
  status: boolean;
  message: string;
  data: any[];
}
