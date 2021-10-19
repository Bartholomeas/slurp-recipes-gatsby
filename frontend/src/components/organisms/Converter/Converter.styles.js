import styled from "styled-components"

export const ConverterWrapper = styled.div`
  position: absolute;
  height: 300px;
  width: 100%;
  top: 7rem;
  right: 0;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  box-shadow: 2px 12px 25px ${({ theme }) => theme.colors.shadow};
  transform: translateY(${({ isActive }) => (isActive ? "0" : "-150%")});
  transition: transform 0.6s ease-in-out;
  z-index: -15;

  @media only screen and (min-width: 768px) {
    height: 300px;
    width: 400px;
  }
`

export const MeasuresContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-between;
  height: 100%;
  width: 100%;
`

export const MeasureWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const MeasureInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 90%;
`

export const MeasureTitle = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkerBase};
`
export const MeasureValue = styled.p`
  align-self: end;
`