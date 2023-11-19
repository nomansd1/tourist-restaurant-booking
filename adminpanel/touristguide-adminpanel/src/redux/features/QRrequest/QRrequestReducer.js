import { createAsyncThunk } from "@reduxjs/toolkit"
import { makeRequest } from "../../../utils/helper"
import { BASE_URL } from "../../../config/api"
import { toast } from "react-toastify"

// FOR GET
export const getQRRequest = createAsyncThunk(
  "RQRequest/getQRRequest",
  async (token, thunkAPI) => {
    const customHeaders = {
      Authorization: `Token ${token}`,
      "Content-type": "application/json"
    }
    try {
      let response = await makeRequest(
        `${BASE_URL}/api/v1/qr-code-requests/`,
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
// FOR DELETE
export const deleteQRRequest = createAsyncThunk(
  "RQRequest/deleteQRRequest",
  async (data, thunkAPI) => {
    const { token, id } = data
    const customHeaders = {
      Authorization: `Token ${token}`,
      "Content-type": "application/json"
    }
    try {
      let response = await makeRequest(
        `${BASE_URL}/api/v1/qr-code-requests/${id}/`,
        "DELETE",
        null,
        customHeaders
      )
      if (response) {
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
        return response
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response)
    }
  }
)
