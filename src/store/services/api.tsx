import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface User {
  id: number
  name: string
}

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUser: builder.query<[User], string>({
      query: (email) => ({
        url: "users",
        params: {
          email,
        },
      }),
    }),
    getPostsByUser: builder.query<Post[], number>({
      query: (id) => ({
        url: `posts?${id}`,
      }),
    }),
    getAllPost: builder.query<Post[], void>({
      query: () => `posts`,
      transformResponse: (response: Post[], meta, arg) => {
        return response
      },
    }),
    getPost: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),
  }),
})

export const {
  useGetUserQuery,
  useGetPostsByUserQuery,
  useGetPostQuery,
  useGetAllPostQuery,
} = api
export default api
