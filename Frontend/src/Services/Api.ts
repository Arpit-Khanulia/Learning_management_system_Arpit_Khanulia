import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../Store/Store';


interface mycoursesType {
    _id:string
    tid: string|null;
    uploader_name: string|null;
    title: string|null;
    category: string|null;
    price: string|null;
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
    tid: string;
    uploader_name: string;
    title: string;
    category: string;
    price: string;
    description: string;
    videos?: FileList | null;
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
           query: (body) => {
            
            console.log('this is body',body);
            
            const formData = new FormData();
            formData.append('tid', body.tid);
            formData.append('uploader_name', body.uploader_name);
            formData.append('title', body.title);
            formData.append('category', body.category);
            formData.append('price', body.price);
            formData.append('description', body.description);
            if (body.videos) {
                for (let i = 0; i < body.videos.length; i++) {
                    formData.append('videos', body.videos[i]);
                }
            }

            console.log('this is form data',formData);
            
            
            return {
                url: '/uploadcourse',
                method: 'POST',
                body:formData
            }
           },
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

export const { useLoginMutation, useRegisterMutation,useMycoursesQuery,useUploadCourseMutation } = authApi;





