import { createAsyncThunk } from "@reduxjs/toolkit"
import { makeRequest } from "../../../utils/helper"
import { BASE_URL } from "../../../config/api"
import { toast } from "react-toastify"
export const getQRManagement = createAsyncThunk(
  "QRManagement/getQRManagement",
  async (token, thunkAPI) => {
    const customHeaders = {
      Authorization: `Token ${token}`,
      "Content-type": "application/json"
    }
    try {
      let response = await makeRequest(
        `${BASE_URL}/api/v1/qr-code/`,
        "GET",
        null, // data should be null
        customHeaders // customHeaders should be passed here
      )
      if (response) {
        return response.results
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response)
    }
  }
)

//POST QR-CODE
export const postQRManagement = createAsyncThunk(
  "QRManagement/postQRManagement",
  async (data, thunkAPI) => {
    const { token, userInput } = data
    const customHeaders = {
      Authorization: `Token ${token}`,
      "Content-type": "application/json"
    }
    try {
      let response = await makeRequest(
        `${BASE_URL}/api/v1/qr-code/`,
        "POST",
        userInput,
        customHeaders
      )
      if (response) {
        // Show a success toast
        toast.success("QR code has added assigned successfully!", {
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
// EDIT REQUEST
export const editQRManagement = createAsyncThunk(
  "QRManagement/editQRManagement",
  async (data, thunkAPI) => {
    const { token, userInput, id } = data
    const customHeaders = {
      Authorization: `Token ${token}`,
      "Content-type": "application/json"
    }
    try {
      let response = await makeRequest(
        `${BASE_URL}/api/v1/qr-code/${id}/`,
        "PATCH",
        userInput,
        customHeaders
      )
      if (response) {
        // Show a success toast
        toast.success("QR code has been edit successfully!", {
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

// DELETE REQUEST

export const deleteQRManagement = createAsyncThunk(
  "QRManagement/deleteQRManagement",
  async (data, thunkAPI) => {
    const { token, id } = data
    const customHeaders = {
      Authorization: `Token ${token}`,
      "Content-type": "application/json"
    }
    try {
      let response = await makeRequest(
        `${BASE_URL}/api/v1/qr-code/${id}/`,
        "DELETE",
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
