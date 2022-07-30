import styled from "styled-components"

export const ConverterWrapper = styled.div`
  position: absolute;
  height: auto;
  width: 100%;
  top: 7rem;
  right: 0;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.otherStyles.shadow};
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  transform: scale(
    ${({ isConverterActive }) => (isConverterActive ? "1" : "0")}
  );
  transform-origin: top;
  transition: transform 0.2s ease;
  z-index: -15;

  @media only screen and (min-width: 768px) {
    height: auto;
    width: 400px;
    right: 2rem;
  }
`

export const MeasuresContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 0;

  height: 100%;
  width: 100%;
`
export const ConverterHeader = styled.h2`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: ${({ theme }) => theme.fontSize.medium};
`
export const TopContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`
export const ConvertedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.otherStyles.shadow};

  & p {
    font-size: ${({ theme }) => theme.fontSize.standard};
  }
`
export const ConvertedInfo = styled.p`
  padding: 1rem;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.standard};
`

export const ConvertedValuesBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  color: ${({ theme }) => theme.colors.fontColor};

  font-size: 1.6rem;
`
export const ConvertedValue = styled.p`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  font-size: 1.6rem;

  & svg {
    fill: ${({ theme }) => theme.colors.base};
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
