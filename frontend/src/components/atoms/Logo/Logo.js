import React from "react"
import styled from "styled-components"
const LogoImg = styled.img`
  /* height: 13rem; */
  height: 100%;
  width: 100%;
`
const Logo = () => {
  return (
    <>
      <LogoImg src={`../../../../static/logo.svg`} />
    </>
  )
}

export default Logo
