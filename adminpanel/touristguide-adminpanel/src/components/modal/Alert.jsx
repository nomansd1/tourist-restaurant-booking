import React from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import ReactModal from "react-modal"
import "../modal/alert.css"
export default function Alert(props) {
  return (
    <ReactModal
      isOpen={props.isOpen}
      parentSelector={() => document.querySelector("#root")}
      className="reactmodal__container"
      ariaHideApp={false}
      style={{
        overlay: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          position: "absolute"
        },
        content: {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid #ccc",
          WebkitOverflowScrolling: "touch",
          boxShadow:
            "0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 2px 6px 2px rgba(60, 64, 67, 0.15)",
          borderRadius: "16px",
          outline: "none",
          backgroundColor: "#fff",
          padding: "20px",
          width: "300px",
          height: "200px",
          zIndex: "10px"
        }
      }}
    >
      <div>
        <div className="modalHeader">
          <h5 className="heading text-center">Dialog</h5>
        </div>
        <button className="closeBtn" onClick={() => props.setIsOpen(false)}>
          <AiFillCloseCircle style={{ marginBottom: "-3px" }} />
        </button>
        <div className="modalContent text-center">{props.text}</div>
      </div>
      <div className="flex justify-center">
        <div className="pt-3">
          <button className="deleteBtn" onClick={() => props.handleDelete()}>
            {props.accept}
          </button>
          <button className="cancelBtn" onClick={() => props.setIsOpen(false)}>
            {props.decline}
          </button>
        </div>
      </div>
    </ReactModal>
  )
}
