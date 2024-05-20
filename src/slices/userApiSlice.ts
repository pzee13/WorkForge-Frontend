import { apiSlice } from "./apiSlice";

const USER_URL = "/api/user";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),

    register: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),

    googleAuth: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/googleAuth`,
        method: "POST",
        body: data,
      }),
    }),

    logout:builder.mutation({
      query:() => ({
        url:`${USER_URL}/logout`,
        method:'POST'
      })
    }),


    sendOtpToEmail: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/sendEmail`,
        method: "POST",
        body: data,
      }),
    }),

    otpVerification: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/verifyEmail`,
        method: "POST",
        body: data,
      }),
    }),

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/forgotPassword`,
        method: "POST",
        body: data,
      }),
    }),

    updateProfile: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/updateProfile`,
        method: "PATCH",
        body: data,
      }),
    }),

    validateAccesssToken: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/validateAccessToken`,
        method: "POST",
        body: data,
      }),
    }),

    getSpaces: builder.mutation({
      query: ({ page, perPage, spaceType, state, search }) => ({
        url:`${USER_URL}/spaces`,
        method:"GET",
        params: {
          page,
          perPage,
          spaceType,
          state,
          search,
        }
      })
    }),

    resetPassword: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/resetPassword`,
        method: "POST",
        body: data,
      }),
    }),

   
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useOtpVerificationMutation,
  useSendOtpToEmailMutation,
  useLogoutMutation,
  useGoogleAuthMutation,
  useForgotPasswordMutation,
  useValidateAccesssTokenMutation,
  useResetPasswordMutation,
  useGetSpacesMutation,
  useUpdateProfileMutation
} = userApiSlice;
