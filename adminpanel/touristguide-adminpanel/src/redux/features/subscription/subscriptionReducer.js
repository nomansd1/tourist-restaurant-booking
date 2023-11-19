import { createAsyncThunk } from "@reduxjs/toolkit"
import { makeRequest } from "../../../utils/helper"
import { toast } from "react-toastify"
export const postSubscription = createAsyncThunk(
  "subscription/postSubscription",
  async (token, data, thunkAPI) => {
    console.log(data)
    const customHeaders = {
      Authorization: `Token ${token}`,
      "Content-type": "application/json"
    }
    try {
      let response = await makeRequest(
        "https://orange-rice-35416.botics.co/api/v1/subscriptions/",
        "POST",
        data,
        customHeaders
      )
      if (response) {
        toast.success("Subscription has been taken sucessfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        })
        return response.results
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response)
    }
  }
)
