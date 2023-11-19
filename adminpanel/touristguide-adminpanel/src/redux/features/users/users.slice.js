import { createSlice } from "@reduxjs/toolkit"
import { deleteUser, editUser, getUsers, postUser } from "./userReducer"
import { toast } from "react-toastify"
const initialState = {
  users: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null
}
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: builder => {
    //POST USERS
    builder.addCase(postUser.pending, state => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      state.users.unshift(action.payload)
    })
    builder.addCase(postUser.rejected, (state, action) => {
      toast.error("Sorry! User already exist", {
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

    //GET USERS
    builder.addCase(getUsers.pending, state => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      // Sort the action.payload alphabetically based on the "name" property
      state.users = action.payload.sort((a, b) => {
        return b.id - a.id
      })
    })
    builder.addCase(getUsers.rejected, (state, action) => {
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

    //PATCH USERS
    builder.addCase(editUser.pending, state => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    builder.addCase(editUser.fulfilled, (state, action) => {
      // Find the index of the user with the matching id
      const index = state.users.findIndex(user => user.id === action.payload.id)
      if (index !== -1) {
        state.users[index] = action.payload
      }
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
    })
    builder.addCase(editUser.rejected, (state, action) => {
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

    //DELETE USERS
    builder.addCase(deleteUser.pending, state => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      let index = state.users.findIndex(
        item => item.id === action.meta.arg.userId
      )
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      state.users.splice(index, 1)
    })
    builder.addCase(deleteUser.rejected, (state, action) => {
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
export default usersSlice.reducer
