import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

const initialState = {
  sharedText: "",
}

const counter = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    updateText: (state, { payload }: PayloadAction<string>) => {
      state.sharedText = payload
    },
  },
})

export const { updateText } = counter.actions

export const getText = (state: RootState) => state.globalState.sharedText

export default counter.reducer
