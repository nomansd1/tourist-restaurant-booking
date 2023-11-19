import { createSlice } from "@reduxjs/toolkit"
import { deleteQRRequest, getQRRequest } from "./QRrequestReducer"
import { toast } from "react-toastify"
const initialState = {
  QRrequest: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null
}
export const QRRequestSlice = createSlice({
  name: "QRrequest",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getQRRequest.pending, state => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    builder.addCase(getQRRequest.fulfilled, (state, action) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      state.QRrequest = action.payload
    })
    builder.addCase(getQRRequest.rejected, (state, action) => {
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

    // FOR DELETE
    builder.addCase(deleteQRRequest.pending, state => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    builder.addCase(deleteQRRequest.fulfilled, (state, action) => {
      toast.success("Item has been removed successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      })
      const index = state.QRrequest.findIndex(
        item => item.id === action.meta.arg.id
      )
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      state.QRrequest.splice(index, 1)
    })
    builder.addCase(deleteQRRequest.rejected, (state, action) => {
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
export default QRRequestSlice.reducer
