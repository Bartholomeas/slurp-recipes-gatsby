import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"

const AddRecipePanelWrapper = styled.div`
  display: flex;
  margin-top: 7rem;
`
const initialState = {
  title: "",
  time: "",
  preparation: "",
  ingredients: "",
}
const AddRecipePanel = () => {
  const [recipeInfo, setRecipeInfo] = useState(initialState)

  const uploadHandler = async e => {
    e.preventDefault()
    const token = JSON.parse(localStorage.getItem("token"))

    const { title, time, preparation, ingredients } = recipeInfo

    await axios
      .post(
        "http://localhost:1337/recipes",
        {
          title: title,
          time: time,
          preparation: preparation,
          ingredients: ingredients,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const updateInput = e => {
    setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value })
    console.log(recipeInfo)
  }

  return (
    <AddRecipePanelWrapper>
      <form>
        <div>
          <label name="title" htmlFor="title">
            title
          </label>
          <input
            onChange={e => updateInput(e)}
            id="title"
            name="title"
            type="text"
          />
        </div>
        <div>
          <label name="time" htmlFor="time">
            time
          </label>
          <input
            onChange={e => updateInput(e)}
            id="time"
            name="time"
            type="number"
          />
        </div>
        <div>
          <label name="preparation" htmlFor="preparation">
            preparation
          </label>
          <input
            onChange={e => updateInput(e)}
            id="preparation"
            name="preparation"
            type="text"
          />
        </div>
        <div>
          <label name="ingredients" htmlFor="ingredients">
            ingredients
          </label>
          <input
            onChange={e => updateInput(e)}
            id="ingredients"
            name="ingredients"
            type="text"
          />
        </div>
        <div>
          <label name="image" htmlFor="image">
            image
          </label>
          <input
            onChange={e => updateInput(e)}
            id="image"
            name="image"
            type="file"
          />
        </div>
        <button
          onClick={e => {
            uploadHandler(e)
          }}
          type="submit"
        >
          add recipe
        </button>
      </form>
    </AddRecipePanelWrapper>
  )
}

export default AddRecipePanel
