import {
  Action,
  configureStore,
  StateFromReducersMapObject,
  ThunkAction,
} from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query/react"
import todoApi from "./todoApi"
import globalState from "./globalState"

const reducer = {
  globalState,
  [todoApi.reducerPath]: todoApi.reducer,
}

const store = configureStore({
  reducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export type RootState = StateFromReducersMapObject<typeof reducer>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store
