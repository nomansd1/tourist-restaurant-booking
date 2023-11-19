import { createSlice } from "@reduxjs/toolkit"
import { getCustomNotification } from "./notificationReducer"
import { toast } from "react-toastify"
const initialState = {
  notification: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null
}
export const customNotificationSlice = createSlice({
  name: "customNotification",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCustomNotification.pending, state => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    builder.addCase(getCustomNotification.fulfilled, (state, action) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      state.notification = action.payload
    })
    builder.addCase(getCustomNotification.rejected, (state, action) => {
      toast.error("Something went wrong", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      })
      state.isLoading = false
      state.isError = true
      state.isSuccess = false
      state.error = action.error
    })
  }
})
export default customNotificationSlice.reducer
