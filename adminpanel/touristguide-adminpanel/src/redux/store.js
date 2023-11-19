import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import usersSlice from "./features/users/users.slice"
import customNotificationSlice from "./features/notification/notification.slice"
import QRRequestSlice from "./features/QRrequest/QRrequest.slice"
import QRmanagementSlice from "./features/QRManagement/QRmanagement.slice"
import subscriptionSlice from "./features/subscription/subscription.slice"
import authSlice from "./features/auth/auth.slice"
import tutorialsSlice from "./features/tutorials/tutorials.slice"
customNotificationSlice
const persistConfig = {
  key: "root",
  storage
}
const rootReducer = combineReducers({
  auth: authSlice,
  users: usersSlice,
  customNotification: customNotificationSlice,
  QRRequest: QRRequestSlice,
  QRManagement: QRmanagementSlice,
  subscription: subscriptionSlice,
  tutorials: tutorialsSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer
})
export const persistor = persistStore(store)
