/**
 * Central API Export Point
 * Re-exports all API hooks and types from domain modules
 * 
 * Usage:
 *   import { useLoginMutation, useGetProductsQuery } from '@/store/api';
 *   or
 *   import { useLoginMutation } from '@/store/api/auth';
 *   import { useGetProductsQuery } from '@/store/api/products';
 */

// Auth API
export * from './auth';


// Slots API
export * from './slots';

// Book Store API
export * from './book-store';

// Get Appoinemnt
export * from './appointments';

// Re-export base API if needed
export { baseApi } from './baseApi';
export { getErrorMessage } from './baseApi';

