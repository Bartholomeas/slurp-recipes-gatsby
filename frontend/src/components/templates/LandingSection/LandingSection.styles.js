import styled from "styled-components"

export const LandingWrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: clamp(700px, 93vh, 1920px);
  margin-top: 7rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1980px;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 4rem;
  color: ${({ theme }) => theme.colors.fontColor};

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`
export const LandingText = styled.h1`
  margin-bottom: 2rem;
  font-size: 4rem;
  font-weight: 300;
  text-align: center;

  @media only screen and (min-width: 576px) {
    font-size: 5.4rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 7rem;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 9rem;
  }
`

export const ColoredText = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.baseColor};
`
export const FeaturedRecipesWrapper = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightSecondary};

  @media only screen and (min-width: 768px) {
    height: 100%;
    width: 50%;
  }
`
