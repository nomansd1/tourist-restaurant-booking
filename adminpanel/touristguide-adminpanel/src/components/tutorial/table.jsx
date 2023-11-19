import React from "react"
import { BiSolidEditAlt } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
import { formatDate } from "../../utils/dateformater"
export default function Table(props) {
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
                        <label>Images</label>
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
                              <img
                                loading="lazy"
                                style={{ width: 70, height: 70 }}
                                src={item?.image}
                                class="rounded-circle shadow-lg rounded-4"
                              />
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
