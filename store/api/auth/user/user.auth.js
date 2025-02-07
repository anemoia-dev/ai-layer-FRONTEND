import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = `${process.env.NEXT_PUBLIC_BASEURL}/api/auth`;

export const userAuthApi = createApi({
  reducerPath: `userAuthApi`,
  baseQuery: fetchBaseQuery({ url }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userCredentials) => {
        return {
          url: '/signup',
          method: 'POST',
          body: userCredentials,
        };
      },
    }),
    signin: builder.mutation({
      query: (userCredentials) => {
        return {
          url: '/signin',
          method: 'POST',
          body: userCredentials,
        };
      },
    }),
  }),
});

export const { useSignupMutation, useSigninMutation } = userAuthApi;
