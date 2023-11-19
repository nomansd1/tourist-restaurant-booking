import React, { useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import ReactModal from "react-modal"
import "react-datepicker/dist/react-datepicker.css"
import ReactDatePicker from "react-datepicker"
import "./addusermodal.css"
export default function AddMenuModal(props) {
    const { handleOnChange, handleAddUser, isOpen, closeModal, errors } = props
    const [value, onChange] = useState('10:00');
    const [openDate, setOpenDate] = useState(new Date());
    const [closeDate, setCloseDate] = useState(new Date());
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
                        <h2 className="text-gray-600 font-semibold text-center">Add Menu</h2>
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
                            <label
                                className="block text-xs font-bold mb-2"
                                htmlfor="grid-password"
                            >
                                Menu Name
                            </label>
                            <input
                                type="text"
                                className="text__box"
                                id="exampleFormControlInput1"
                                placeholder="Name"
                                name="menu_name"
                                onChange={e => {
                                    handleOnChange("name", e)
                                }}
                            />

                        </div>
                        <div className="mb-3">
                            <label
                                className="block text-xs font-bold mb-2"
                                htmlfor="grid-password"
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                name="price"
                                className="text__box"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                                onChange={e => {
                                    handleOnChange("email", e)
                                }}
                            />


                        </div>
                        <div className="mb-3">
                            <label
                                className="block text-xs font-bold mb-2"
                                htmlfor="grid-password"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                className="text__box"
                                id="exampleFormControlInput1"
                                placeholder="Add location"
                                name="location"
                                onChange={e => {
                                    handleOnChange("password", e)
                                }}
                            />

                        </div>
                        <label
                            className="block text-xs font-bold mb-2"
                            htmlfor="grid-password"
                        >
                            Upload Image
                        </label>
                        <div className="flex items-center justify-center w-full">
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg
                                        className="w-10 h-10 mb-3 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">Click to upload</span> or drag and
                                        drop
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                                    </p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block text-xs font-bold mb-2"
                                        htmlfor="grid-password"
                                    >
                                        Opening Date
                                    </label>
                                    <ReactDatePicker className="border-0 px-3 py-3 placeholder-blueGray-300  bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" selected={openDate} onChange={(date) => setOpenDate(date)} />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block  text-xs font-bold mb-2"
                                        htmlfor="grid-password"
                                    >
                                        Closing Date
                                    </label>
                                    <ReactDatePicker selected={closeDate} onChange={(date) => setCloseDate(date)} className="border-0 px-3 py-3 placeholder-blueGray-300  bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                </div>
                            </div>


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
