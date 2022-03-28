import React, { useState } from "react"
import axios from "axios"
import FormField from "../../molecules/FormField/FormField"
import Button from "../../atoms/Button/Button"
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
  const [isValidityCorrect, setIsValidityCorrect] = useState(true)

  const mailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  )
  const passwordRegex = new RegExp("(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9])")

  // Aktualizacja stanu inputów
  const updateInput = e => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value })
    console.log(e.target.name)
  }

  // Wysłanie zapytania z rejestracją
  const registerUser = async e => {
    e.preventDefault()
    if (
      registerInfo.password === registerInfo.confirm_password &&
      registerInfo.password !== ""
    ) {
      console.log("PASUJO ZE HEJ")
    }
    await axios
      .post(`${process.env.STRAPI_URL}/auth/local/register`, registerInfo)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  let errorInput = ""
  let errorInputsArray = []

  const setErrorStatus = inputName => {
    errorInput = document.querySelector(`input[id='${inputName}']`)
    errorInput.classList.add("invalid")
    errorInputsArray.push(errorInput)
    console.log(errorInputsArray)
    return
  }

  // Walidacja formularza
  const validateForm = e => {
    e.preventDefault()
    errorInputsArray = []

    // console.log(errorInputsArray[1])

    // Walidacja nazwy uzytkownika
    if (registerInfo["username"] === "") {
      setErrorStatus("username")
      setIsValidityCorrect(false)
      // return false
    } else {
      setIsValidityCorrect(true)
    }

    // Walidacja email
    if (mailRegex.test(registerInfo["email"])) {
      console.log("Email spełnia warunki")
      setIsValidityCorrect(true)
    } else {
      setErrorStatus("email")
    }
    // Walidacja hasła
    if (passwordRegex.test(registerInfo["confirm_password"])) {
      if (registerInfo["password"] === registerInfo["confirm_password"]) {
        console.log("Hasła są zgodne")
        setIsValidityCorrect(true)
      } else {
        setErrorStatus("password")
        setErrorStatus("confirm_password")
        setErrorMessage("Hasła się różnią")
        return false
      }
    } else if (registerInfo["password"].length < 8) {
      console.log("Haslo za krotkie")
      setErrorStatus("password")
      setErrorStatus("confirm_password")
      setErrorMessage("Hasło za krótkie, musi mieć conajmniej 8 znaków")
      setIsValidityCorrect(false)
      return false
    } else {
      setErrorStatus("password")
      setErrorStatus("confirm_password")
      setErrorMessage("Hasło musi zawierać conajmniej 1 cyfrę i duza literę")
      setIsValidityCorrect(false)
      return false

      // return false
    }

    errorInputsArray.forEach(input => {
      input.classList.remove("invalid")
    })
    errorInputsArray = []
    return true
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
          Hasło musi zawierać conajmniej 8 znaków w tym przynajmniej jedną
          cyfrę i wielką literę
        </PasswordInfoText>
        {!isValidityCorrect ? <ErrorText>{errorMessage}</ErrorText> : null}
        <Button onClick={e => validateForm(e)} type="button" isLong>
          SPROBOJ SE
        </Button>
        {/* <Button onClick={e => registerUser(e)} type="submit" isLong>
          Zarejestruj
        </Button> */}
      </JoinForm>
      <JoinLink to="/login">
        Masz konto? <ColoredText>Zaloguj się.</ColoredText>
      </JoinLink>
    </JoinPanelWrapper>
  )
}

export default RegisterPanel
