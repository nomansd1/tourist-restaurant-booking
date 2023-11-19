import { lazy } from "react"
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import Login from "../pages/Login"
import Layout from "../layout/index"
import DashBoard from "../pages/DashBoard"
import { useSelector } from "react-redux"
import MyAccount from "../pages/MyAccount"
import CustomerManagement from "../pages/CustomerManagement"
import Messages from "../pages/Messages"
import ResturentManagement from "../pages/ResturentManagement"
function ProtectedRoutes({ user }) {
  console.log(user, "users")
  return (
    <>
      {Object.keys(user).length ? <Layout /> : <Navigate to="/login" replace />}
    </>
  )
}
function PublicRoutes({ user }) {
  return (
    <>
      {Object.keys(user).length ? (
        <Navigate to="/dashboard" replace />
      ) : (
        <Outlet />
      )}
    </>
  )
}
const AppRoutes = () => {
  const { auth } = useSelector(state => state.auth)
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/" element={<DashBoard />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/customermanagement" element={<CustomerManagement />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/resturentmanagement" element={<ResturentManagement />} />
      </Route>
      {/* PRIVATE ROUTES */}
      {/* <Route element={<ProtectedRoutes user={auth} />}>
        <Route path="/" element={<DashBoard />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Route> */}
    </Routes>
  )
}

export default AppRoutes
