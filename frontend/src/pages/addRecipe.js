import React, { useState, useContext } from "react"
import axios from "axios"
import { StateContext } from "../context/StateContext"
import FormField from "../components/molecules/FormField/FormField"
import {
  Wrapper,
  Container,
  AddRecipeHeader,
  Form,
  FormContainer,
  ButtonWrapper,
  // Button,
} from "./addRecipe.styles"
import Button from "../components/atoms/Button/Button"
import SelectField from "../components/molecules/SelectField/SelectField"
import LoadingPopup from "../components/molecules/LoadingPopup/LoadingPopup"
import NotificationPopup from "../components/organisms/NotificationPopup/NotificationPopup"

import ErrorText from "../components/atoms/ErrorText/ErrorText"

const initialState = {
  title: "",
  time: "",
  diets: "",
  difficulties: "",
  types: "",
  preparation: "",
  ingredients: "",
}

const AddRecipe = () => {
  const [isValid, setIsValid] = useState(true)
  const [recipeInfo, setRecipeInfo] = useState(initialState)
  const [file, setFile] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const {
    title,
    time,
    diets,
    difficulties,
    types,
    preparation,
    ingredients,
    calories,
  } = recipeInfo
  const [isPopupActive, setIsPopupActive] = useState(false)

  const togglePopup = () => {
    setIsPopupActive(!isPopupActive)
  }
  const windowGlobal = typeof window !== "undefined" && window
  const token = windowGlobal
    ? JSON.parse(windowGlobal.localStorage.getItem("token"))
    : null

  //Wysylanie przepisu
  const uploadHandler = async e => {
    e.preventDefault()
    if (!validateInputs()) return
    setIsLoading(true)
    await axios
      .post(
        `${process.env.STRAPI_URL}/recipes`,
        {
          title: title,
          time: time,
          calories: calories,
          preparation: preparation,
          ingredients: ingredients,
          diets: [
            {
              _id: diets,
            },
          ],
          difficulties: [
            {
              _id: difficulties,
            },
          ],
          types: [
            {
              _id: types,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(res => {
        uploadImage(res.data.id)
        setIsLoading(false)
        togglePopup()
      })
      .catch(err => console.log(err))
  }

  //Upload zdjecia
  async function uploadImage(id) {
    const formData = new FormData()

    formData.append("files", file)
    formData.append("refId", id)
    formData.append("ref", "recipes")
    formData.append("field", "img")

    await axios
      .post(`${process.env.STRAPI_URL}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }

  const updateInput = e => {
    setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value })
  }

  const updateSelect = e => {
    const select = e.target
    const selectValue = select.options[select.selectedIndex].value
    setRecipeInfo({ ...recipeInfo, [select.id]: selectValue })
  }
  let formInputsArr
  if (typeof window !== "undefined") {
    formInputsArr = [
      ...document.querySelectorAll("textarea"),
      ...document.querySelectorAll("input"),
    ]
  }
  const validateInputs = () => {
    formInputsArr.forEach(input => {
      if (input.value.trim() === "") {
        input.classList.add("invalid")
        setIsValid(false)
        return false
      } else {
        input.classList.remove("invalid")
        setIsValid(true)
      }
      return
    })
  }

  return (
    <Wrapper>
      <Container>
        <AddRecipeHeader>Dodaj Przepis</AddRecipeHeader>

        <Form
          onSubmit={e => {
            uploadHandler(e)
          }}
        >
          <FormContainer>
            <FormField
              onChange={updateInput}
              width="70"
              nameId="title"
              content="tytuł"
            />
            <FormField
              content="czas"
              onChange={updateInput}
              width="25"
              nameId="time"
              type="number"
            />
            <FormField
              content="kalorie"
              onChange={updateInput}
              width="25"
              nameId="calories"
              type="number"
            />
          </FormContainer>
          <FormContainer>
            <SelectField
              nameId="diets"
              content="dieta"
              onChange={updateSelect}
              valuesIds={[
                "621d167b5959ad7a45d14bea",
                "621bb7b5896c806c8af640a7",
                "621bb7ad896c806c8af640a6",
                "621bb7bd896c806c8af640a8",
              ]}
              values={["zbilansowana", "wege", "wegańska", "bez-laktozy"]}
            />
            <SelectField
              nameId="difficulties"
              content="trudność"
              onChange={updateSelect}
              valuesIds={[
                "621d079c896c806c8af640b5",
                "621d07a8896c806c8af640b6",
                "621d07b8896c806c8af640b7",
              ]}
              values={["łatwe", "średnie", "trudne"]}
            />
            <SelectField
              nameId="types"
              content="posiłek"
              onChange={updateSelect}
              valuesIds={[
                "621d048d896c806c8af640aa",
                "621bbd62896c806c8af640a9",
                "621d0497896c806c8af640ab",
                "621d04a4896c806c8af640ac",
                "62364060b17a20ff6a917404",
              ]}
              values={["śniadanie", "obiad", "kolacja", "deser", "napój"]}
            />
          </FormContainer>

          <FormField
            content="przygotowanie"
            onChange={updateInput}
            textarea={true}
            nameId="preparation"
            type="textarea"
          />
          <FormField
            content="składniki"
            onChange={updateInput}
            textarea={true}
            nameId="ingredients"
            type="textarea"
          />

          <FormField
            content="zdjęcie"
            onChange={e => {
              setFile(e.target.files[0])
            }}
            nameId="image"
            type="file"
          />
          {!isValid ? <ErrorText>Pola nie mogą być puste!</ErrorText> : null}
          <Button isLong={true} type="submit">
            Dodaj przepis
          </Button>
        </Form>
        {isLoading ? <LoadingPopup /> : null}
        <NotificationPopup
          onClick={() => togglePopup()}
          isActive={isPopupActive}
        >
          Przepis został pomyślnie dodany.
        </NotificationPopup>
      </Container>
    </Wrapper>
  )
}

export default AddRecipe