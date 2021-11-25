import React from "react"
import styled from "styled-components"

const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.baseColor};
  z-index: 1000;
`

const UserNavbar = () => {
  return (
    <Wrapper>
      <button>login</button>
      <div>
        <button>logout</button>
      </div>
    </Wrapper>
  )
}

export default UserNavbar
