import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../Store/Store';


interface mycoursesType {
    _id:string
    tid: string|null;
    uploader_name: string|null;
    title: string|null;
    category: string|null;
    price: number|null;
    description: string|null;
    videos?: string[];
    rating?: number[];
  }

interface LoginRequest {
    username: string;
    email:string;
    password: string;
}

interface RegisterRequest {
   name:string;
   username: string;
   email: string;
   password: string;
   role:string
}

interface uploadCourse {
    tid: string|null;
    uploader_name: string|null;
    title: string|null;
    category: string|null;
    price: number|null;
    description: string|null;
    videos?: string[];
    rating?: number[];
  }

interface User {
    _id: string;
    name:string;
    username: string;
    email: string;
    password: string;
    role:string

  }

    export const authApi = createApi({
        
        reducerPath: 'authApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000',
        prepareHeaders:(headers,{getState})=>{
            const authToken=(getState() as RootState).saveUserAndToken.accessToken;
            if(authToken){
                headers.set("authorization",`Bearer ${authToken}`);
            }
            return headers;
        }

                
 }),
   tagTypes: ['Auth'],
   endpoints: (builder) => ({

       login: builder.mutation<{ user: User ,accessToken:string}, LoginRequest>({
           query: (body) => ({
               url: '/login',
               method: 'POST', 
               body,
           }),
           invalidatesTags: ['Auth'],
       }),
       register: builder.mutation<void, RegisterRequest>({
           query: (body) => ({
               url: '/register',
               method: 'POST',
               body,
           }),
           invalidatesTags: ['Auth'],
       }),
       uploadCourse: builder.mutation<void, uploadCourse>({
           query: (body) => ({
               url: '/uploadcourse',
               method: 'POST',
               body,
           }),
           invalidatesTags: ['Auth'],
       }),
       mycourses: builder.query<mycoursesType, void>({
           query: () => ({
               url: '/mycourses',
               method: 'GET',
           }),
       }),

   }),
});

export const { useLoginMutation, useRegisterMutation,useMycoursesQuery } = authApi;





