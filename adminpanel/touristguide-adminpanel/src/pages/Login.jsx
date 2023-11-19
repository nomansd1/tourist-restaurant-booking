import React, { useEffect, useState } from "react"
import icon from "../assets/images/cartag2.png"
import car from "../assets/images/car.png"
import "../styles/login.css"
import { useDispatch } from "react-redux"
import { userlogin } from "../redux/features/auth/authReducer"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import { clearState } from "../redux/features/auth/auth.slice"
import { useNavigate } from "react-router-dom"
export default function Login() {
  const navigate = useNavigate()
  const { auth, isLoading, isSuccess, isError } = useSelector(
    state => state.auth
  )

  const dispatch = useDispatch()
  const [inputFields, setInputFields] = useState({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState("")
  const handleOnChage = (key, e) => {
    setInputFields(pre => ({
      ...pre,
      [key]: e.target.value
    }))
  }
  const validateForm = () => {
    const { email, password } = inputFields
    const newErrors = {}
    if (!email) {
      newErrors.email = "Email is required"
    }
    if (!password) {
      newErrors.password = "Password is required"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = () => {
    if (validateForm()) {
      try {
        dispatch(userlogin(inputFields))
        if (!isLoading && isSuccess) {
          navigate("/")
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  useEffect(() => {
    if (isError) {
      dispatch(clearState())
    }
  }, [auth, dispatch])
  return (
    <>
      {/* component */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/motion-tailwind/motion-tailwind.css"
      />
      <div className="container flex flex-col mx-auto bg-white rounded-lg">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                  Sign In
                </h3>
                <p className="mb-4 text-grey-700">Enter your email and password</p>

                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                  <p className="mx-4 text-grey-600">or</p>
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                </div>
                <label
                  htmlFor="email"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="mail@loopple.com"
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />
                <label
                  htmlFor="password"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  Password*
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter a password"
                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />
                <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">
                  Sign In
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
