import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(0.98);
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  width: 60%;
  padding: 0.8rem 0.2rem 0.8rem 2rem;
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  /* background-color: ${({ theme }) => theme.colors.base}; */
`
export const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontColor};
`
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
`
export const CardLink = styled(Link)`
  padding: 1rem 0;
  text-decoration: none;
`
export const Button = styled.button`
  color: ${({ theme }) => theme.colors.accent};
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`
export const ImageContainer = styled.div`
  height: 100%;
  width: 60%;
  overflow: hidden;
`

export const CardImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
`
