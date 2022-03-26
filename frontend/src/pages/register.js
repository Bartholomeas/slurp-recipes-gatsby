import React from "react"
import styled from "styled-components"
import RegisterPanel from "../components/organisms/RegisterPanel/RegisterPanel"

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 7rem;
  background-color: ${({ theme }) => theme.colors.greenish};

  @media only screen and (min-width: 768px) {
    padding: 3rem;
  }
`

const Register = () => {
  return (
    <RegisterWrapper>
      <RegisterPanel />
    </RegisterWrapper>
  )
}

export default Register
