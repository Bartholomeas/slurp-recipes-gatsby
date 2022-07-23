import React from "react"
import styled from "styled-components"
import LoginPanel from "../components/organisms/LoginPanel/LoginPanel"

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin-top: 7rem;
  background-color: ${({ theme }) => theme.colors.base};

  @media only screen and (min-width: 768px) {
    padding: 3rem;
  }
`
const Login = () => {
  return (
    <LoginWrapper>
      <LoginPanel />
    </LoginWrapper>
  )
}

export default Login
