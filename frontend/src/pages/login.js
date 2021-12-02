import React from "react"
import styled from "styled-components"
import LoginPanel from "../components/organisms/LoginPanel/LoginPanel"

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 3rem;
  margin-top: 7rem;
`
const Login = () => {
  return (
    <LoginWrapper>
      <LoginPanel />
    </LoginWrapper>
  )
}

export default Login
