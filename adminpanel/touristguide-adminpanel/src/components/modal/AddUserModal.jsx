import React, { useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import ReactModal from "react-modal"
import "./addusermodal.css"
export default function AddUserModal(props) {
  const { handleOnChange, handleAddUser, isOpen, closeModal, errors } = props
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
          width: "900px",
          height: "550px"
        }
      }}
    >
      <div className="container mt-10">
        <div className="d-flex justify-content-between align-item-center mt-3">
          <div></div>
          <div>
            <h2 className="text-gray-600 font-semibold text-center">Add User</h2>
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
              <label for="exampleFormControlInput1" className="mb-2 text-sm text-start text-gray-600">
                User Name
              </label>
              <input
                type="text"
                className="text__box"
                id="exampleFormControlInput1"
                placeholder="Name"
                name="name"
                onChange={e => {
                  handleOnChange("name", e)
                }}
              />

            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="mb-2 text-sm text-start text-gray-600"
              >
                Email*
              </label>
              <input
                type="email"
                name="email"
                className="text__box"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={e => {
                  handleOnChange("email", e)
                }}
              />


            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="mb-2 text-sm text-start text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="text__box"
                id="exampleFormControlInput1"
                placeholder="Password"
                name="password"
                onChange={e => {
                  handleOnChange("password", e)
                }}
              />

            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="mb-2 text-sm text-start text-gray-600">
                Confrim Password
              </label>
              <input
                type="password"
                className="text__box"
                id="exampleFormControlInput1"
                placeholder="Confrim Password"
                name="confirmPassword"
                onChange={e => {
                  handleOnChange("confirmPassword", e)
                }}
              />


            </div>

            <div className="mt-4">
              <button
                className="submit__button"
                type="submit"
                onClick={() => {
                  handleAddUser()
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}
