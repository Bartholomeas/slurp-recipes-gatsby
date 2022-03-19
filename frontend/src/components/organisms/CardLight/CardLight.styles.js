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
  max-width: 500px;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.colors.offGreenish};
  border-radius: 6px;

  box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.shadow};
  overflow: hidden;
  transition: transform 0.3s;

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
  padding: 0.8rem 2rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.greenish};
`
export const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontColor};
`
export const CardLink = styled(Link)`
  padding: 1rem 0;
  text-decoration: none;
  align-self: flex-end;
  margin-right: 2rem;
`
export const Button = styled.button`
  color: ${({ theme }) => theme.colors.secondarySupport};
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`
export const ImageContainer = styled.div`
  height: 100%;
  width: 40%;
  overflow: hidden;
`

export const CardImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`
