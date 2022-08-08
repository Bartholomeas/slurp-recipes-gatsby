import React, {useState, useEffect} from "react"
import useAuth from "./useAuth";
import axios from "axios"
import {navigate} from "gatsby"
const useLogin = ()=>{

    const [setAuthentication] = useAuth()

    const [isLoading, setIsLoading] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const loginInput = React.createRef({})
    const passwordInput = React.createRef({})
    let errorInput

    const setErrorStatus = (inputName, remove = false) => {
        if (typeof window !== "undefined") {
            if (remove === true) {
                document
                    .querySelector(`input[id='${inputName}']`)
                    .classList.remove("invalid")
            } else {
                errorInput = document.querySelector(`input[id='${inputName}']`)
                errorInput.classList.add("invalid")
                errorInput.setAttribute("className", "invalid")
            }
        }
    }
    const authorizeUser = async e => {
        e.preventDefault()
        setIsLoading(true)
        await axios
            .post(`${process.env.STRAPI_URL}/auth/local`, {
                identifier: loginInput.current.value,
                password: passwordInput.current.value,
            })
            .then(data => {
                localStorage.setItem("token", JSON.stringify(data.data.jwt))
                localStorage.setItem("user", JSON.stringify(data.data.user.username))
                setIsLoading(false)
                setAuthentication(true)
                navigate("/")
            })
            .catch(error => {
                setIsLoading(false)
                setErrorStatus("login")
                setErrorStatus("password")
                setIsValid(false)
                setAuthentication(false)
            })
    }

return {isLoading, isValid, passwordInput, loginInput, authorizeUser }
}

export default useLogin