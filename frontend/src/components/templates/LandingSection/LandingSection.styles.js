import styled from "styled-components"

export const LandingWrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 6rem;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    height: clamp(700px, 93vh, 1920px);
    max-width: 1980px;
    left: 50%;
    transform: translateX(-50%);
  }
`
export const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding: 0 4rem;
  gap: 3rem;
  color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.colors.shadow};

  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`
export const LandingText = styled.h1`
  margin-bottom: 2rem;
  font-size: 4.8rem;
  font-weight: 300;
  text-align: left;
  max-width: 800px;
  @media only screen and (min-width: 576px) {
    font-size: 5.4rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 6rem;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 7rem;
  }
`

export const ColoredText = styled.span`
  display: block;

  color: ${({ theme }) => theme.colors.primaryColor};
`
export const FeaturedRecipesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.greenish};
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.shadow};

  @media only screen and (min-width: 768px) {
    height: 100%;
    width: 40%;
  }
`
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 2rem;

  @media only screen and (min-width: 768px) {
    gap: 0rem;
  }
`

export const FeaturedRecipesHeader = styled.h2`
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.colors.secondaryColor};
  @media only screen and (min-width: 768px) {
    font-size: 4rem;
    margin-bottom: 0;
    margin: 2rem 0;
  }
`
