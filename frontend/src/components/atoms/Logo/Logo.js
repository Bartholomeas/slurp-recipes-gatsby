import React from "react"
import styled from "styled-components"
import LogoIcon from "../../../../static/logo.svg"
// import LogoIcon from "../../../images/logo.svg"
const LogoImg = styled.img`
  /* height: 13rem; */
  height: 100%;
  width: 100%;
`
const Logo = () => {
  return (
    <>
      <LogoImg src={LogoIcon} />
    </>
  )
}

export default Logo
