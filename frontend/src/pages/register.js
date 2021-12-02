import React from "react"
import styled from "styled-components"
import RegisterPanel from "../components/organisms/RegisterPanel/RegisterPanel"

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  width: 100%;
  padding: 3rem;
  margin-top: 7rem;
`

const Register = () => {
  return (
    <RegisterWrapper>
      <RegisterPanel />
    </RegisterWrapper>
  )
}

export default Register
