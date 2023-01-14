import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface User {
  id: number
  name: string
}

export interface Products {
  userId: number
  id: number
  title: string
  body: string
}

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/pokemon" }),
  endpoints: (builder) => ({
    getUser: builder.query<[User], string>({
      query: (email) =>
        `https://jsonplaceholder.typicode.com/users?email=${email}`,
    }),
    getPosts: builder.query<Products[], number>({
      query: (id) => `https://jsonplaceholder.typicode.com/posts?${id}`,
    }),
  }),
})

export const { useGetUserQuery, useGetPostsQuery } = api
export default api
