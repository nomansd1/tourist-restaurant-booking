import { createSlice } from "@reduxjs/toolkit"
import { getTutorial, postTutorial } from "./tutorials.Reducer"
import { toast } from "react-toastify"
const initialState = {
  tutorials: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null
}
export const tutorialsSlice = createSlice({
  name: "tutorials",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTutorial.pending, state => {
      console.log(state, "postTutorial.pending")
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    builder.addCase(getTutorial.fulfilled, (state, action) => {
      console.log(action, "getTutorial.fulfilled")
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      state.tutorials = action.payload
    })
    builder.addCase(getTutorial.rejected, (state, action) => {
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
    builder.addCase(postTutorial.pending, state => {
      toast.info("Uploading your tutorial...", { autoClose: 5000 })
      console.log(state, "postTutorial.pending")
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    builder.addCase(postTutorial.fulfilled, (state, action) => {
      console.log(action, "postTutorial.fulfilled")
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      state.tutorials = action.payload
    })
    builder.addCase(postTutorial.rejected, (state, action) => {
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
export default tutorialsSlice.reducer
