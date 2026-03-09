import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';

// Import all API slices to ensure they're registered with baseApi
import './api/auth';
// import './api/slots';
// import './api/payments/paymentApi';
// import './api/patients';
// import './api/profile-notes/profileNotesApi';
// import './api/book-store/bookStoreApi';
// import './api/my-profile';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

