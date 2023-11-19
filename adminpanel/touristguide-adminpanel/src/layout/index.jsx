import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import Sidebars from "../components/Sidebar"
export default function Layout() {
  const [collapsed, setCollapsed] = useState(true)
  const [toggled, setToggled] = useState(false)
  const handleCollapsedChange = () => {
    setCollapsed(!collapsed)
  }
  const handleToggleSidebar = value => {
    setToggled(value)
  }
  return (
    <div
      style={{
        display: "flex",
        height: "100vh"
      }}
    >
      <Sidebars
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      {/* Main Content */}
      <div className="main-content" style={{ flex: 1, overflow: "auto" }}>
        <Outlet />
      </div>
    </div>
  )
}
