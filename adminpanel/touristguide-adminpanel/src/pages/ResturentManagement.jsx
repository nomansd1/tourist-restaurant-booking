import React, { useState } from 'react'
import AddMenuModal from '../components/modal/AddMenuModal'

export default function ResturentManagement() {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenModal = () => {
        setIsOpen(true)
    }
    const handleCloseModal = () => {
        setIsOpen(false)
    }
    return (
        <>
            {/* component */}
            <div className="h-screen sm:px-8 md:px-16 sm:py-8">
                <main className="container mx-auto max-w-screen-lg h-full">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>

                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Description
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <textarea
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ring-[#f17741]"
                                        rows={4}
                                        defaultValue={
                                            " A beautiful UI Kit and Admin for JavaScript & Tailwind CSS. It is Freeand Open Source."
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className=" flex items-center justify-between pb-6">
                            <div>
                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Add Menu
                                </h6>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="lg:ml-40 ml-10 space-x-8">
                                    <button onClick={() => { handleOpenModal() }} className="bg-[#f17741] hover:bg-[#EE5511] px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* file upload modal */}
                        <article
                            aria-label="File Upload Modal"
                            className="relative h-full flex flex-col bg-white shadow-xl rounded-md"
                            ondrop="dropHandler(event);"
                            ondragover="dragOverHandler(event);"
                            ondragleave="dragLeaveHandler(event);"
                            ondragenter="dragEnterHandler(event);"
                        >
                            {/* overlay */}
                            <div
                                id="overlay"
                                className="w-full h-full absolute top-0 left-0 pointer-events-none z-50 flex flex-col items-center justify-center rounded-md"
                            >
                            </div>
                            {/* scroll area */}
                            <section className="overflow-auto p-8 w-full h-full flex flex-col">
                                <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                                    <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                                        <span>Drag and drop your</span>&nbsp;
                                        <span>files anywhere or</span>
                                    </p>
                                    <input
                                        id="hidden-input"
                                        type="file"
                                        multiple=""
                                        className="hidden"
                                    />
                                    <button
                                        id="button"
                                        className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                                    >
                                        Upload a file
                                    </button>
                                </header>
                                <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                                    To Upload Gallery
                                </h1>
                                <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                                    <li
                                        id="empty"
                                        className="h-full w-full text-center flex flex-col justify-center items-center"
                                    >
                                        <img
                                            className="mx-auto w-32"
                                            src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                                            alt="no data"
                                        />
                                        <span className="text-small text-gray-500">
                                            No files selected
                                        </span>
                                    </li>
                                </ul>
                            </section>
                            {/* sticky footer */}
                            <footer className="flex justify-end px-8 pb-8 pt-4">
                                <button
                                    id="submit"
                                    className="rounded-sm px-3 py-1 bg-[#f17741] hover:bg-[#EE5511] text-white focus:shadow-outline focus:outline-none"
                                >
                                    Upload now
                                </button>
                                <button
                                    id="cancel"
                                    className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                                >
                                    Cancel
                                </button>
                            </footer>
                        </article>
                    </div>

                </main>
            </div>
            <AddMenuModal isOpen={isOpen} closeModal={handleCloseModal} />
        </>

    )
}
