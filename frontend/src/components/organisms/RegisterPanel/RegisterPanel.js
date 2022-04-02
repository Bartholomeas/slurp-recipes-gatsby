import React, { useState } from "react"
import axios from "axios"
import { navigate } from "gatsby"
import FormField from "../../molecules/FormField/FormField"
import Button from "../../atoms/Button/Button"
import NotificationPopup from "../../organisms/NotificationPopup/NotificationPopup"
import {
  JoinPanelWrapper,
  JoinHeader,
  JoinForm,
  JoinLink,
  ColoredText,
  PasswordInfoText,
} from "../../../styles/joinPanel.styles"
import { AiOutlineQuestionCircle as QuestionIcon } from "react-icons/ai"
import ErrorText from "../../atoms/ErrorText/ErrorText"

const RegisterPanel = () => {
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  })
  const [errorMessage, setErrorMessage] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [isPopupActive, setIsPopupActive] = useState(false)

  const mailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  )
  const passwordRegex = new RegExp("(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9])")

  const togglePopup = () => {
    setIsPopupActive(!isPopupActive)

    setTimeout(() => {
      navigate(`/login`)
    }, 3000)
  }

  // Aktualizacja stanu inputów
  const updateInput = e => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value })
  }

  // Walidacja formularza
  const validateForm = () => {
    // e.preventDefault()
    errorInputsArray = []

    // Walidacja nazwy uzytkownika
    if (registerInfo["username"] != "") {
      setErrorStatus("username", true)
      setIsValid(true)
    } else {
      setErrorStatus("username")
      setErrorMessage("Nazwa użytkownika nie może być pusta")
      setIsValid(false)
    }

    // Walidacja email
    if (mailRegex.test(registerInfo["email"])) {
      setErrorStatus("email", true)
    } else {
      setErrorStatus("email")
      setErrorMessage("Adres e-mail niepoprawny")
      setIsValid(false)
    }
    // Walidacja hasła
    if (passwordRegex.test(registerInfo["confirm_password"])) {
      if (registerInfo["password"] === registerInfo["confirm_password"]) {
        setErrorStatus("password", true)
        setErrorStatus("confirm_password", true)
      } else {
        setErrorStatus("password")
        setErrorStatus("confirm_password")
        setErrorMessage("Hasło musi zawierać conajmniej 1 cyfrę i duza literę")
        setIsValid(false)
        return false
      }
    } else if (registerInfo["password"].length < 8) {
      console.log("Haslo za krotkie")
      setErrorStatus("password")
      setErrorStatus("confirm_password")
      setErrorMessage("Hasło za krótkie, musi mieć conajmniej 8 znaków")
      setIsValid(false)
      return false
    } else {
      setErrorStatus("password")
      setErrorStatus("confirm_password")
      setErrorMessage("Hasła się różnią")
      setIsValid(false)
      return false
    }

    return
  }

  // Wysłanie zapytania z rejestracją
  const registerUser = async e => {
    e.preventDefault()

    validateForm()
    if (isValid) {
      await axios
        .post(`${process.env.STRAPI_URL}/auth/local/register`, registerInfo)
        .then(res => {
          togglePopup()
          console.log(res)
        })
        .catch(err => console.log(err))
    }
  }

  let errorInput = ""
  let errorInputsArray = []

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
        errorInputsArray.push(errorInput)
      }
    }
  }

  return (
    <JoinPanelWrapper>
      <JoinHeader>Zarejestruj się.</JoinHeader>
      <JoinForm>
        <FormField
          onChange={e => updateInput(e)}
          nameId="username"
          content="Nazwa użytkownika"
        />
        <FormField
          onChange={e => updateInput(e)}
          nameId="email"
          type="email"
          content="E-mail"
        />
        <FormField
          onChange={e => updateInput(e)}
          nameId="password"
          type="password"
          content="Hasło"
        />
        <FormField
          onChange={e => updateInput(e)}
          nameId="confirm_password"
          type="password"
          content="Powtórz hasło"
        />
        <PasswordInfoText>
          <QuestionIcon style={{ marginRight: "1rem" }} />
          Hasło musi zawierać conajmniej 8 znaków w tym przynajmniej jedną cyfrę
          i wielką literę
        </PasswordInfoText>
        {!isValid ? <ErrorText>{errorMessage}</ErrorText> : null}

        <Button onClick={e => registerUser(e)} type="submit" isLong>
          Zarejestruj
        </Button>
      </JoinForm>
      <JoinLink to="/login">
        Masz konto? <ColoredText>Zaloguj się.</ColoredText>
      </JoinLink>
      <NotificationPopup onClick={togglePopup} isActive={isPopupActive}>
        Gratulacje, rejestracja przebiegła pomyślnie, zostaniesz przeniesiony na
        stronę logowania
      </NotificationPopup>
    </JoinPanelWrapper>
  )
}

export default RegisterPanel
