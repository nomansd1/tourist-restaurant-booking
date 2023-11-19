import { createAsyncThunk } from "@reduxjs/toolkit"
import { makeRequest } from "../../../utils/helper"
export const getCustomNotification = createAsyncThunk(
  "customNotification/getCustomNotification",
  async (token, thunkAPI) => {
    const customHeaders = {
      Authorization: `Token ${token}`,
      "Content-type": "application/json"
    }
    try {
      let response = await makeRequest(
        "https://orange-rice-35416.botics.co/api/v1/notification-management/",
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
