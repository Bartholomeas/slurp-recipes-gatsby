import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import { StateContext } from "../../../context/StateContext"
import FormField from "../../molecules/FormField/FormField"
import {
  ModalBody,
  ModalHeader,
  ModalForm,
  FormContainer,
  SelectWrapper,
  SelectLabel,
  Select,
  ButtonWrapper,
  Button,
} from "./AddRecipeModal.styles"
import SelectField from "../../molecules/SelectField/SelectField"

const initialState = {
  title: "",
  time: "",
  diet: "",
  difficulty: "",
  type: "",
  preparation: "",
  ingredients: "",
}

const AddRecipeModal = () => {
  const { isModalOpen, closeModal } = useContext(StateContext)
  const [recipeInfo, setRecipeInfo] = useState(initialState)
  const [file, setFile] = useState()
  const [recipeId, setRecipeId] = useState()
  const { title, time, diet, difficulty, type, preparation, ingredients } =
    recipeInfo

  const windowGlobal = typeof window !== "undefined" && window
  const token = JSON.parse(windowGlobal.localStorage.getItem("token"))

  const uploadImage = async e => {
    e.preventDefault()
    const formData = new FormData()

    formData.append("files", file)
    formData.append("refId", recipeId)
    formData.append("ref", "recipes")
    formData.append("field", "img")
    console.log(formData)

    await axios
      .post(`${process.env.STRAPI_URL}/upload`, formData)
      .then(res => {
        const imageId = res.data[0].id
        console.log(imageId)
      })
      .catch(err => console.log(err))
  }

  const uploadHandler = async e => {
    e.preventDefault()

    await axios
      .post(
        `${process.env.STRAPI_URL}/recipes`,
        {
          title: title,
          time: time,
          diet: diet,
          difficulty: difficulty,
          type: type,
          preparation: preparation,
          ingredients: ingredients,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(res => {
        console.log(res)
        setRecipeId(res.data.id)
        uploadImage(e)
        // console.log()
      })
      .catch(err => console.log(err))

    closeModal(e)
  }

  const updateInput = e => {
    setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value })
    console.log(recipeInfo)
  }

  const updateSelect = e => {
    const select = e.target
    const selectValue = select.options[select.selectedIndex].value
    setRecipeInfo({ ...recipeInfo, [select.id]: selectValue })
    console.log(recipeInfo)
  }

  if (windowGlobal !== "undefined") {
  }
  return (
    <ModalBody
      appElement={
        typeof window !== "undefined"
          ? document.getElementById("___gatsby")
          : null
      }
      isOpen={isModalOpen}
      onRequestClose={closeModal}
    >
      <ModalHeader>Add recipe</ModalHeader>
      <ModalForm
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
        </FormContainer>
        <FormContainer>
          <SelectField
            nameId="diet"
            content="dieta"
            onChange={updateSelect}
            values={["vegetarian", "vegan", "lactose-free"]}
          />
          <SelectField
            nameId="difficulty"
            content="trudność"
            onChange={updateSelect}
            values={["łatwe", "średnie", "trudne"]}
          />
          <SelectField
            nameId="posiłek"
            content="dieta"
            onChange={updateSelect}
            values={["śniadanie", "lunch", "obiad", "deser", "napój"]}
          />

          {/* <SelectWrapper>
            <SelectLabel htmlFor="diet">diet</SelectLabel>
            <Select onChange={e => updateSelect(e)} name="diet" id="diet">
              <option value="vegetarian">vegetarian</option>
              <option value="vegan">vegan</option>
              <option value="lactose-free">lactose-free</option>
            </Select>
          </SelectWrapper> */}
          {/* <SelectWrapper>
            <SelectLabel htmlFor="difficulty">difficulty</SelectLabel>
            <Select onChange={e => updateSelect(e)} nameId="difficulty">
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </Select>
          </SelectWrapper>
          <SelectWrapper>
            <SelectLabel htmlFor="type">type</SelectLabel>
            <Select onChange={e => updateSelect(e)} name="type" id="type">
              <option value="breakfast">breakfast</option>
              <option value="lunch">lunch</option>
              <option value="dinner">dinner</option>
              <option value="starter">starter</option>
              <option value="dessert">dessert</option>
              <option value="drink">drink</option>
              <option value="soup">soup</option>
            </Select>
          </SelectWrapper> */}
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

        <ButtonWrapper>
          <Button type="submit" style={{ marginRight: "1rem" }}>
            add recipe
          </Button>
          <Button onClick={e => closeModal(e)} closeBtn>
            close
          </Button>
        </ButtonWrapper>
      </ModalForm>
    </ModalBody>
  )
}

export default AddRecipeModal
