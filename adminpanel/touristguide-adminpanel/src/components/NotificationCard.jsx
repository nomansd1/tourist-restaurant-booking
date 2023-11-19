import React from "react"
import { AiFillNotification } from "react-icons/ai"
import "../styles/customnotification.css"
export default function NotificationCard() {
  const user = [
    {
      name: "Hasnain",
      email: "hasnainaskari32@gmail.com"
    },
    {
      name: "Hasnain",
      email: "hasnainaskari32@gmail.com"
    },
    {
      name: "Hasnain",
      email: "hasnainaskari32@gmail.com"
    },
    {
      name: "Hasnain",
      email: "hasnainaskari32@gmail.com"
    },
    {
      name: "Hasnain",
      email: "hasnainaskari32@gmail.com"
    }
  ]
  return (
    <section>
      {user.map((item, index) => {
        return (
          <div
            className="shadow p-1 rounded bg-white rounded-4 mb-3"
            key={index}
          >
            <div className="card-body">
              <div className="hstack gap-3">
                <div className="bg-light ps-2">
                  <AiFillNotification size={30} />
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
                    <span>{item.name}</span>
                  </p>
                </div>
                <div className="bg-light ms-auto pe-2">
                  <button className="campaign__button" type="submit">
                    Schedule a campaign
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
