import { createAsyncThunk } from "@reduxjs/toolkit"
import { makeRequest } from "../../../utils/helper"
import { BASE_URL } from "../../../config/api"
import { toast } from "react-toastify"
export const getTutorial = createAsyncThunk(
  "tutorial/getTutorial",
  async (token, thunkAPI) => {
    const customHeaders = {
      Authorization: `Token ${token}`,
      "Content-type": "multipart/form-data"
    }
    try {
      let response = await makeRequest(
        `${BASE_URL}/api/v1/tutorials/`,
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
export const postTutorial = createAsyncThunk(
  "tutorial/postTutorial",
  async (token, data, thunkAPI) => {
    const customHeaders = {
      Authorization: `Token ${token}`,
      "Content-type": "multipart/form-data"
    }
    try {
      let response = await makeRequest(
        `${BASE_URL}/api/v1/tutorials/`,
        "POST",
        data,
        customHeaders
      )
      if (response) {
        // Show a success toast
        toast.success("Tutorial has added successfully!", {
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
