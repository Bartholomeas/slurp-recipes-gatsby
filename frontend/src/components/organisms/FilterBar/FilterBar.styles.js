import styled from "styled-components"
import Button from "../../atoms/Button/Button"

export const FilterWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  height: 100vh;
  width: 100%;
  margin-top: 4rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
    scale(${({ isOpen }) => (isOpen ? "1" : "0")});
  transform-origin: right bottom;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 5px ${({ theme }) => theme.otherStyles.shadow};
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  overflow: hidden;
  transition: transform 0.2s ease;
  z-index: 200;
  /* @media only screen and (min-width: 768px) {
    position: relative;
    display: flex;
    min-height: 100%;
    max-width: 200px;
    left: 0;
    top: 0;
    transform: translate(0);
    z-index: 0;
    opacity: 1;
  } */
`

export const FilterHeader = styled.p`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 2.6rem;
  font-weight: bold;
  text-align: center;
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 100%;
  padding: 2rem 0;
  overflow-y: auto;
  @media only screen and (min-width: 768px) {
    padding: 0;
    align-items: center;
  }
`

export const ClearButton = styled(Button)``
