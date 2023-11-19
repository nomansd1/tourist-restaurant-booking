import { createSlice } from "@reduxjs/toolkit"
import "react-toastify/dist/ReactToastify.css"
import { postSubscription } from "./subscriptionReducer"
const initialState = {
  subscriptions: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null
}
export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(postSubscription.pending, state => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    builder.addCase(postSubscription.fulfilled, (state, action) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      state.subscriptions = action.payload
    })
    builder.addCase(postSubscription.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.isSuccess = false
      state.error = action.error
    })
  }
})
export default subscriptionSlice.reducer
