import React from "react"
import styled from "styled-components"
import LogoIcon from "../../../images/logo.svg"

const LogoImg = styled.img`
  height: 100%;
  width: 100%;
`
const Logo = () => {
  return (
      <LogoImg src={LogoIcon} alt="Logo Siorb Przepisy" />
  )
}

export default Logo
