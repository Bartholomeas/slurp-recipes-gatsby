import styled from "styled-components"

export const FilterWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 2rem;
  margin-top: 4rem;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%) scale(${({ isOpen }) => (isOpen ? "1" : "0")});
  transform-origin: right bottom;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.otherStyles.shadow};
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  transition: transform 0.2s ease;
  z-index: 200;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    top: 0;
    right: 0;
    transform: translate(0) scale(${({ isOpen }) => (isOpen ? "1" : "0")});
    max-width: 300px;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    opacity: 1;
  }
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
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
`
