import React from "react"
import { BiSolidUserPin } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
export default function SupportMessagesCard() {
  const navigate = useNavigate()
  const user = [
    {
      id: 1,
      name: "Hasnain",
      email: "hasnainaskari32@gmail.com"
    },
    {
      id: 2,
      name: "Hasnain",
      email: "hasnainaskari32@gmail.com"
    },
    {
      id: 3,
      name: "Hasnain",
      email: "hasnainaskari32@gmail.com"
    },
    {
      id: 4,
      name: "Hasnain",
      email: "hasnainaskari32@gmail.com"
    },
    {
      id: 5,
      name: "Hasnain",
      email: "hasnainaskari32@gmail.com"
    }
  ]
  const handleOpneMessage = id => {
    navigate(`/supportmessages/${id}`)
  }
  return (
    <section>
      {user.map((item, index) => {
        return (
          <div
            className="shadow p-1 rounded bg-white rounded-4 mb-3"
            key={index}
          >
            <div
              style={{
                cursor: "pointer"
              }}
              className="card-body"
              onClick={() => {
                handleOpneMessage(item.id)
              }}
            >
              <div className="hstack gap-3">
                <div className="bg-light ps-2">
                  <BiSolidUserPin size={30} />
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
                      {item.name}
                      <br />
                      <span style={{ fontWeight: 200, fontSize: 10 }}>
                        {item.email}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
