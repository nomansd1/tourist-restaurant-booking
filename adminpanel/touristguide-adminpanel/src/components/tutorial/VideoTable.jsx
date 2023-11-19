import React, { useState } from "react"
import { BiSolidEditAlt } from "react-icons/bi"
import { formatDate } from "../../utils/dateformater"
import { VideoDisplay } from "../VideoDisplay"
import { AiFillDelete } from "react-icons/ai"
export default function VideoTable(props) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  return (
    <section className="ftco-section">
      <div className="container-fluid py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className="table-wrap">
              <div style={{ maxHeight: "300px", overflow: "auto" }}>
                <table className="table table-responsive-xl">
                  <thead>
                    <tr>
                      <th></th>
                      <th>
                        <label>Videos</label>
                      </th>
                      <th>
                        <label>Caption</label>
                      </th>
                      <th>
                        <label>Date</label>
                      </th>
                      <th>
                        <label>Action</label>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {props?.data.map((item, index) => {
                      const date = formatDate(item?.created_at)
                      return (
                        <>
                          <tr className="alert " role="alert" key={index}>
                            <td></td>
                            <td className="d-flex align-items-center">
                              {!isVideoLoaded && <div>Loading...</div>}
                              <video
                                controls
                                width="100"
                                height="100"
                                src={
                                  item?.video instanceof File
                                    ? URL.createObjectURL(item?.video)
                                    : item?.video
                                    ? item?.video
                                    : ""
                                }
                                onLoadedData={() => setIsVideoLoaded(true)} // Set isVideoLoaded to true when the video is loaded
                              ></video>
                            </td>
                            <td className="pt-4  ">
                              <label className=" ">{item?.caption}</label>
                            </td>
                            <td className="pt-4">
                              <label className="active ">{date}</label>
                            </td>
                            <td className="pt-4">
                              <div className="hstack gap-2">
                                <BiSolidEditAlt />
                                <AiFillDelete />
                              </div>
                            </td>
                          </tr>
                        </>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
