import React, { useState } from "react"
import logo from "../assets/images/cartagicon.png"
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem
  //useProSidebar
} from "react-pro-sidebar"
import { Link, useNavigate } from "react-router-dom"
import { GoHomeFill } from "react-icons/go"
import { BsFillPlayFill, BsFillChatFill } from "react-icons/bs"
import { FiChevronsRight, FiChevronsLeft, FiLogOut } from "react-icons/fi"
import { FiSettings } from "react-icons/fi"
import { MdSettingsAccessibility } from "react-icons/md"
import { FaUser } from "react-icons/fa"
import { BsFillHouseDoorFill } from "react-icons/bs"
import { BiMessageAltDetail } from "react-icons/bi"
import { MdCurrencyExchange, MdQrCodeScanner } from "react-icons/md"
import "../styles/sidebar.css"
import Alert from "./modal/Alert"
import { useDispatch, useSelector } from "react-redux"
import { clearData } from "../redux/features/auth/auth.slice"
const Sidebars = ({
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange
}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const openLogoutModal = () => {
    setIsOpen(true)
  }
  const handleLogOut = () => {
    localStorage.clear()
    localStorage.removeItem("persist:root")
    dispatch(clearData())
    navigate("/login")
    setIsOpen(false)
  }
  return (
    <Sidebar
      className="stickyElement"
      backgroundColor="#1F2937"
      collapsed={collapsed}
      toggled={toggled}
      width="250px"
      handleToggleSidebar={handleToggleSidebar}
      handleCollapsedChange={handleCollapsedChange}
    >
      <Menu>
        {collapsed ? (
          <MenuItem
            className="fpTHfu"
            icon={<FiChevronsRight color="#ffffff" />}
            onClick={handleCollapsedChange}
          ></MenuItem>
        ) : (
          <>
            <MenuItem
              className="fpTHfu"
              icon={<FiChevronsLeft color="#ffffff" />}
              onClick={handleCollapsedChange}
              style={{
                paddingTop: "20px",
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
                flexDirection: "column"
              }}
            ></MenuItem>
            <div
              className="fpTHfu"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80px",
                marginLeft: "20px"
              }}
              onClick={handleCollapsedChange}
            >
              <h6 className="text-white text-blueGray-700 text-xl font-bold">F&Baruba</h6>
            </div>
          </>
        )}
      </Menu>
      <Menu iconShape="square">
        <MenuItem
          onClick={() => navigate("/")}
          icon={
            <GoHomeFill
              size={20}
              color="#ffffff"
            />
          }
          className="fpTHfu"
        >
          <span className="text-white text-blueGray-700 text-sm font-extrabold" style={{ fontWeight: "normal" }}>
            Home
          </span>
        </MenuItem>
        <MenuItem
          onClick={() => navigate("/myaccount")}
          icon={
            <MdSettingsAccessibility
              size={20}
              color="#fff"
              onClick={() => navigate("/myaccount")}
            />
          }
          className="fpTHfu"
        >
          <span className="text-white text-blueGray-700 text-sm font-extrabold" style={{ fontWeight: "normal" }}>
            My Account
          </span>
        </MenuItem>
        <MenuItem
          onClick={() => navigate("/customermanagement")}
          icon={
            <FaUser
              size={20}
              color="#ffffff"
              onClick={() => navigate("/customermanagement")}
            />
          }
          className="fpTHfu"
        >
          <span className="text-white text-blueGray-700 text-sm font-extrabold" style={{ fontWeight: "normal" }}>
            Custumer User Management
          </span>
        </MenuItem>
        <MenuItem
          onClick={() => navigate("/resturentmanagement")}
          icon={
            <BsFillHouseDoorFill
              size={20}
              color="#ffffff"
              onClick={() => navigate("/resturentmanagement")}
            />
          }
          className="fpTHfu"
        >
          <span className="text-white text-blueGray-700 text-sm font-extrabold" style={{ fontWeight: "normal" }}>
            Resturent Management
          </span>
        </MenuItem>
        <MenuItem
          onClick={() => navigate("/messages")}
          icon={
            <BiMessageAltDetail
              size={20}
              color="#ffffff"
              onClick={() => navigate("/messages")}
            />
          }
          className="fpTHfu"
        >
          <span className="text-white text-blueGray-700 text-sm font-extrabold" style={{ fontWeight: "normal" }}>
            Messages
          </span>
        </MenuItem>
        <MenuItem

          onClick={() => openLogoutModal()}
          icon={<FiLogOut size={20} color="#ffffff" />}
          className="fpTHfu"
        >
          <span className="text-white text-blueGray-700 text-sm font-extrabold" style={{ fontWeight: "normal" }}>
            Logout
          </span>
        </MenuItem>
      </Menu>
      {isOpen && (
        <Alert
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          accept="Yes"
          decline="No"
          text="Are you sure want to logout?"
          handleDelete={handleLogOut}
        />
      )}
    </Sidebar>
  )
}
export default Sidebars
