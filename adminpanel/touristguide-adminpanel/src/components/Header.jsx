import React from "react"
export default function Header({ title }) {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col mt-5">
          <div className="d-flex justify-content-between border-bottom border-dark">
            <div>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: 20
                }}
              >
                {title}
              </p>
            </div>
            <div class="hstack gap-3">
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: 15
                }}
              >
                Admin
              </p>
              <div className="mb-3">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="rounded-circle"
                  style={{ width: 40, height: 40 }}
                  alt="..."
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
