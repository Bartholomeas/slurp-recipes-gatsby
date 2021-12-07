import React, { useState, useContext } from "react"
import axios from "axios"
import { StateContext } from "../../../context/StateContext"
import FormField from "../../molecules/FormField/FormField"
import {
  ModalBody,
  ModalForm,
  FormContainer,
  SelectWrapper,
  SelectLabel,
  Select,
  ButtonWrapper,
  Button,
} from "./AddRecipeModal.styles"

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
  const [image, setImage] = useState()
  const { title, time, diet, difficulty, type, preparation, ingredients } =
    recipeInfo

  const uploadImage = async e => {
    e.preventDefault()
    const formData = new FormData()
    const token = JSON.parse(localStorage.getItem("token"))

    formData.append("image", image)
    console.log(formData)
    console.log(image)

    await axios
      .post(`${process.env.GATSBY_STRAPI_URL}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const uploadHandler = async e => {
    e.preventDefault()
    const token = JSON.parse(localStorage.getItem("token"))

    await axios
      .post(
        `${process.env.GATSBY_STRAPI_URL}/recipes`,
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

  return (
    <ModalBody
      appElement={document.getElementById("___gatsby")}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
    >
      <ModalForm
        onSubmit={e => {
          uploadImage(e)
        }}
      >
        <FormContainer>
          <FormField
            onChange={updateInput}
            width="70"
            id="title"
            name="title"
            label="title"
          />
          <FormField
            onChange={updateInput}
            width="25"
            id="time"
            name="time"
            label="time"
            type="number"
          />
        </FormContainer>
        <FormContainer>
          <SelectWrapper>
            <SelectLabel htmlFor="diet">diet</SelectLabel>
            <Select onChange={e => updateSelect(e)} name="diet" id="diet">
              <option value="vegetarian">vegetarian</option>
              <option value="vegan">vegan</option>
              <option value="lactose-free">lactose-free</option>
            </Select>
          </SelectWrapper>
          <SelectWrapper>
            <SelectLabel htmlFor="difficulty">difficulty</SelectLabel>
            <Select
              onChange={e => updateSelect(e)}
              name="difficulty"
              id="difficulty"
            >
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
          </SelectWrapper>
        </FormContainer>

        <FormField
          onChange={updateInput}
          textarea={true}
          id="preparation"
          name="preparation"
          label="preparation"
          type="textarea"
        />
        <FormField
          onChange={updateInput}
          textarea={true}
          id="ingredients"
          name="ingredients"
          label="ingredients"
          type="textarea"
        />
        <FormField
          onChange={e => {
            setImage(e.target.files[0])
          }}
          id="image"
          name="image"
          label="image"
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
