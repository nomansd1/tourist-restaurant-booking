import React from "react"
import "../styles/statistics.css"
import increase from "../assets/images/increase.png"
export default function Statistics() {
  const data = [
    {
      id: 1,
      title: "Users",
      text: "156,890",
      statusbar: "+33.7% vs last week"
    },
    {
      id: 2,
      title: "Sessions",
      text: "97.3K",
      statusbar: "+18.7% vs last week"
    },
    {
      id: 3,
      title: "Avg. Duration Time",
      text: "3m 40sec",
      statusbar: "-5.77% vs last week"
    },
    {
      id: 4,
      title: "Bounce Rate",
      text: "45.72%",
      statusbar: "-13.9% vs last week"
    }
  ]
  return (
    <div
      className="statistics__container row d-flex flex-wrap flex-row shadow rounded bg-white rounded-4 ms-2 me-2"
      style={{ position: "sticky", top: 0 }}
    >
      {data.map((item, index) => (
        <div className="col-lg-3 col-md-3 col-sm-12" key={index}>
          <div className="mt-4">
            <div className="card-body p-3 d-flex justify-content-between">
              <div>
                <p className="card-heading text-start">{item.title}</p>
                <p className="card-text text-start">{item.text}</p>
                <div className="hstack gap-3">
                  <img
                    src={increase}
                    alt="Increase"
                    className="rounded-circle"
                  />
                  <p className="status mt-3">{item.statusbar}</p>
                </div>
              </div>
              <div
                className="border border-secondary"
                style={{ height: 130 }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
