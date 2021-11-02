import React, { useContext } from "react"
import styled from "styled-components"
import axios from "axios"
import { StateContext } from "../context/StateContext"

const AdminPanelWrapper = styled.div`
  display: flex;
  margin-top: 7rem;
`

const AdminPanel = () => {
  const { token } = useContext(StateContext)

  const uploadHandler = async e => {
    e.preventDefault()

    // const token = localStorage.getItem("token").slice(1, -1)
    await axios
      .post("http://localhost:1337/recipes", {
        body: {
          title: "tytuuul",
          time: "125",
          preparation: "just prepare",
          ingredients: "love ",
        },
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <AdminPanelWrapper>
      <form>
        <label name="title" htmlFor="title">
          title
        </label>
        <input id="title" name="title" type="text" />
        <button
          onClick={e => {
            uploadHandler(e)
          }}
          type="submit"
        >
          submit
        </button>
      </form>
    </AdminPanelWrapper>
  )
}

export default AdminPanel
