import { createAsyncThunk } from "@reduxjs/toolkit"
import { makeRequest } from "../../../utils/helper"
import { BASE_URL } from "../../../config/api"
import { toast } from "react-toastify"
export const editUser = createAsyncThunk(
  "users/editUser",
  async (data, thunkAPI) => {
    const { token, id, inputFields } = data
    console.log(data, "Data========>")
    const customHeaders = {
      Authorization: `Token ${token}`,
      "Content-type": "application/json"
    }
    try {
      let response = await makeRequest(
        `${BASE_URL}/api/v1/users/${id}/`,
        "PATCH",
        inputFields,
        customHeaders
      )
      if (response) {
        toast.success("User has been edit successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        })
        return response
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response)
    }
  }
)
export const postUser = createAsyncThunk(
  "users/postUser",
  async (data, thunkAPI) => {
    console.log(data, "dataaaaa=============>")
    const { token, userInput } = data
    const customHeaders = {
      Authorization: `Token ${token}`,
      "Content-type": "application/json"
    }
    try {
      let response = await makeRequest(
        `${BASE_URL}/api/v1/users/`,
        "POST",
        userInput,
        customHeaders
      )
      if (response) {
        toast.success("User has been added successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        })
        return response
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response)
    }
  }
)
export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (token, thunkAPI) => {
    const customHeaders = {
      Authorization: `Token ${token}`,
      "Content-type": "application/json"
    }
    try {
      let response = await makeRequest(
        `${BASE_URL}/api/v1/users/`,
        "GET",
        null,
        customHeaders
      )
      if (response) {
        return response.results
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response)
    }
  }
)
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (data, thunkAPI) => {
    const { token, userId } = data
    console.log(userId, "this isuserId=======>")
    const customHeaders = {
      Authorization: `Token ${token}`,
      "Content-type": "application/json"
    }
    try {
      let response = await makeRequest(
        `${BASE_URL}/api/v1/users/${userId}/`,
        "DELETE",
        null,
        customHeaders
      )
      if (response) {
        return response
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response)
    }
  }
)
