import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coursesApi = createApi ({
    reducerPath: 'coursesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://api.wisey.app/api/v1',
        prepareHeaders: (headers, { getState }) => {            
            const token = getState().token
            console.log(token)            
            if (token) {
              headers.set('Authorization', `Bearer ${token}`)
            }            
            return headers
          },
    }),
    endpoints: (build) => ({
        generateToken: build.query({
            query: (platform) => `/auth/anonymous?platform=${platform}`, 
          }),
        getCourses: build.query({
            query: () => '/core/preview-courses',            
        }),
        getSingleCourses: build.query({
            query: (id) => `/core/preview-courses/${id}`,            
        }),              
    })
});

export const { useGetCoursesQuery, useGenerateTokenQuery, useGetSingleCoursesQuery } = coursesApi;