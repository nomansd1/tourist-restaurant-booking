import { createSlice } from "@reduxjs/toolkit"
import {
  deleteQRManagement,
  editQRManagement,
  getQRManagement,
  postQRManagement
} from "./QRmanagementReducer"
import { toast } from "react-toastify"
getQRManagement
const initialState = {
  QRManagement: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null
}
export const QRManagementSlice = createSlice({
  name: "QRManagement",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getQRManagement.pending, state => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    builder.addCase(getQRManagement.fulfilled, (state, action) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      // Sort the action.payload based on the "expiration_date" property
      state.QRManagement = action.payload.sort((a, b) => {
        const dateA = new Date(a.created_at)
        const dateB = new Date(b.created_at)
        return dateB - dateA
      })
    })
    builder.addCase(getQRManagement.rejected, (state, action) => {
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

    // FOR POST
    builder.addCase(postQRManagement.pending, state => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    builder.addCase(postQRManagement.fulfilled, (state, action) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      state.QRManagement.unshift(action.payload)
    })
    builder.addCase(postQRManagement.rejected, (state, action) => {
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

    // FOR EDIT
    builder.addCase(editQRManagement.pending, state => {
      console.log("editQRManagement.pending", state)
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    builder.addCase(editQRManagement.fulfilled, (state, action) => {
      console.log("editQRManagement.fulfilled", action.meta.arg.id)
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      let index = state.QRManagement.findIndex(
        item => item?.id === action?.payload?.id
      )
      console.log(index, "INDEX===========>")
      if (index !== -1) {
        state.QRManagement[index] = action.payload
      }
    })
    builder.addCase(editQRManagement.rejected, (state, action) => {
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
    builder.addCase(deleteQRManagement.pending, state => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    builder.addCase(deleteQRManagement.fulfilled, (state, action) => {
      let index = state.QRManagement.findIndex(
        item => item.id === action.meta.arg.id
      )
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      state.QRManagement.splice(index, 1)
    })
    builder.addCase(deleteQRManagement.rejected, (state, action) => {
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
export default QRManagementSlice.reducer
