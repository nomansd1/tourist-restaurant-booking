import React, { useEffect, useState } from "react"
import { BiSolidUserPin } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
import { BsCloudDownloadFill } from "react-icons/bs"
import { FaUserEdit } from "react-icons/fa"
import "../styles/user.css"
import UserDetailModal from "./modal/UserDetailModal"
import Alert from "./modal/Alert"
import { useDispatch } from "react-redux"
import { deleteUser } from "../redux/features/users/userReducer"
import { useSelector } from "react-redux"
import { getToken } from "../utils/fetchToken"
import EditUserModal from "./modal/EditUserModal"
import { toast } from "react-toastify"
export default function UserCard(props) {
  const token = getToken()
  const [userId, setUserId] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const [userDetail, setUserDetail] = useState("")
  const { users, isLoading, isSuccess } = useSelector(state => state.users)
  const dispatch = useDispatch()
  const openEditUserModal = item => {
    setUserDetail(item)
    setIsOpenEditModal(true)
  }
  const closeEditUserModal = () => {
    setIsOpenEditModal(false)
  }
  const openAddUserModal = item => {
    setUserDetail(item)
    setIsOpenDetail(true)
  }
  const closeAddUserModa = () => {
    setIsOpenDetail(false)
  }
  const OpenDeleteUserModal = userId => {
    setUserId(userId)
    setIsOpen(true)
  }
  const handleDelete = () => {
    let data = {
      token: token,
      userId: userId
    }
    try {
      dispatch(deleteUser(data))
      if (!isLoading && isSuccess) {
        toast.success("User has been removed successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        })
        setIsOpen(false)
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <section style={{ maxHeight: 500, overflowY: "scroll" }}>
      {props.data?.map((item, index) => {
        return (
          <div className="mb-3" key={index}>
            <div className="hover-effect shadow p-1 rounded bg-white rounded-4">
              <div className="card-body">
                <div className="hstack gap-3">
                  <div className="bg-light ps-2">
                    <BiSolidUserPin
                      className="usericon__button"
                      size={30}
                      onClick={() => {
                        openAddUserModal(item)
                      }}
                    />
                  </div>
                  <div className="bg-light pt-2">
                    <p
                      style={{
                        paddingTop: 10,
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: 14
                      }}
                    >
                      <span>
                        {item?.name ? item.name : "None"}
                        <br />
                        <span style={{ fontWeight: 200, fontSize: 10 }}>
                          {item?.email}
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="hstack gap-3 bg-light ms-auto pe-2">
                    <FaUserEdit
                      className="edit__button"
                      size={25}
                      onClick={() => {
                        openEditUserModal(item)
                      }}
                    />
                    <AiFillDelete
                      className="delete__button me-4"
                      size={25}
                      onClick={() => {
                        OpenDeleteUserModal(item?.id)
                      }}
                    />
                    <BsCloudDownloadFill
                      className="download__button me-4"
                      size={25}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      <UserDetailModal
        isOpen={isOpenDetail}
        closeModal={closeAddUserModa}
        userDetail={userDetail}
      />
      <EditUserModal
        isOpen={isOpenEditModal}
        closeModal={closeEditUserModal}
        userDetail={userDetail}
      />
      {isOpen && (
        <Alert
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleDelete={handleDelete}
          accept="Delete"
          decline="Cancel"
          text="Are you sure want to delete the item?"
        />
      )}
    </section>
  )
}
