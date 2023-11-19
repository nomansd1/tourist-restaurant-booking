import React, { useEffect, useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import ReactModal from "react-modal"
import "./addusermodal.css"
import { useDispatch, useSelector } from "react-redux"
import { editUser } from "../../redux/features/users/userReducer"
import { getToken } from "../../utils/fetchToken"
export default function EditUserModal(props) {
  const token = getToken()
  const { isSuccess } = useSelector(state => state.users)
  const dispatch = useDispatch()
  const { isOpen, closeModal, userDetail } = props
  let id = userDetail?.id
  console.log(userDetail?.email, "userDetail")
  const [inputFields, setInputFields] = useState({
    name: "",
    email: ""
  })
  const handleOnChage = (key, e) => [
    setInputFields(pre => ({
      ...pre,
      [key]: e.target.value
    }))
  ]
  const handleEdit = () => {
    console.log("PRESSS")
    try {
      dispatch(editUser({ token, id, inputFields }))
      if (isSuccess) {
        closeModal()
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    // Update inputFields when userDetail changes
    setInputFields({
      name: userDetail.name || "",
      email: userDetail.email || ""
    })
  }, [userDetail])
  console.log(inputFields, "inputFields")
  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      parentSelector={() => document.querySelector("#root")}
      className="reactmodal__container"
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)"
        },
        content: {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid #ccc",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          boxShadow:
            "0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 2px 6px 2px rgba(60, 64, 67, 0.15)",
          borderRadius: "10px",
          outline: "none",
          backgroundColor: "#fff",
          padding: "20px",
          width: "600px",
          height: "420px"
        }
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-item-center mt-3">
          <div></div>
          <div>
            <p className="heading text-center">Add User</p>
          </div>
          <div>
            <AiFillCloseCircle
              className="closeBtn"
              size={35}
              onClick={() => {
                closeModal()
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="card-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="text__box"
                id="exampleFormControlInput1"
                placeholder="Name"
                name="name"
                defaultValue={userDetail.name}
                onChange={e => handleOnChage("name", e)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                class="text__box"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                defaultValue={userDetail.email}
                onChange={e => handleOnChage("email", e)}
              />
            </div>
            <div className="hstack">
              <div>
                <label for="exampleFormControlInput1" class="form-label">
                  Waive Subscription
                </label>
              </div>
              <div class="ms-auto me-3">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
            <div className="mt-4">
              <button className="submit__button" onClick={() => handleEdit()}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}
