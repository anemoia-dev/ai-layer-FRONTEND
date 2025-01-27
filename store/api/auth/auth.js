import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import i18n from '../../../i18/i18n.ts';

const url = `${process.env.BASEURL}/api/`;

export const userAuthApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userCredentials) => ({
        url: 'auth/register',
        method: 'POST',
        headers: {
          'accept-language': i18n.language,
        },
        body: userCredentials,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = userAuthApi;
