import React from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import ReactModal from "react-modal"
import "../modal/replysupportmodal.css"
export default function ReplySupportModal(props) {
  return (
    <ReactModal
      isOpen={props.isOpen}
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
          height: "650px"
        }
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-item-center mt-3">
          <div></div>
          <div>
            <p className="heading text-center">Reply Support</p>
          </div>
          <AiFillCloseCircle
            style={{ cursor: "pointer" }}
            size={30}
            onClick={() => {
              props.closeModal()
            }}
          />
        </div>
        <div className="row">
          <div className="card-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="text__box"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Subject
              </label>
              <input
                type="text"
                class="text__box"
                id="exampleFormControlInput1"
                placeholder="Subject"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Message
              </label>
              <textarea
                type="text"
                class="text__box"
                id="exampleFormControlInput1"
                placeholder="Message"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Reply Contents
              </label>
              <input
                type="text"
                class="text__box"
                id="exampleFormControlInput1"
                placeholder="Reply Contents"
              />
            </div>
            <div className="mt-4">
              <button className="submit__button" type="submit">
                Send reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}
