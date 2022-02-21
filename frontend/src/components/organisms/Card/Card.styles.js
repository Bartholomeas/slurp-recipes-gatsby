import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  margin: 0 2rem 2rem 2rem;
  background-color: ${({ theme }) => theme.darkerBase};
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.colors.shadow};
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  @media only screen and (min-width: 768px) {
    margin: 0;
    margin-bottom: 2rem;
    text-decoration: none;
  }
`

export const CardImg = styled(GatsbyImage)`
  background-size: cover;
  background-position: center;
  height: 100%;
`

export const CardLink = styled(Link)`
  text-decoration: none;
`
