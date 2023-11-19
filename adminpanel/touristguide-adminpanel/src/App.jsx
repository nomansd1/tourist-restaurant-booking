import React from "react"
import "./App.css"
import AppRoutes from "./routes"
import { Suspense } from "react"
import Spinner from "./components/Spinner"
import { ToastContainer } from "react-toastify"
function App() {
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<Spinner />}>
        <AppRoutes />
      </Suspense>
    </>
  )
}
export default App
