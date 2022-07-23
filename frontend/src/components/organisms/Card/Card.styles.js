import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const flexColumn = css`
  display: flex;
  flex-direction: column;
`
const heartStyles = css`
  position: absolute;
  text-decoration: none;
  top: 1rem;
  right: 1rem;
  font-size: 3rem;
`

export const CardWrapper = styled.div`
  ${flexColumn}
  position:relative;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  box-shadow: 0px 2px 5px ${({ theme }) => theme.otherStyles.shadow};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(0.98);
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
  height: 60%;
  width: 100%;
  /* border-radius: ${({ theme }) => theme.otherStyles.smallRadius} 6px 0 0; */
`

export const CardLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accent};
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  border: none;
  background: none;
  padding: 2rem 0 0 2rem;
  cursor: pointer;
`
export const CardInfoContainer = styled.div`
  ${flexColumn};
  justify-content: flex-start;
  height: 40%;
  width: 100%;
  gap: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem 1.6rem 1rem;
`
export const CardLabelTitle = styled.p`
  font-size: 2rem;
  align-self: flex-start;
  margin-top: 0.8rem;
  font-weight: 700;
  height: auto;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.fontColor};
`

export const CardInfoHeaderContainer = styled.div`
  ${flexColumn}
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  background-color: pink;
`

export const CardRecipeInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  color: ${({ theme }) => theme.colors.fontLighter};
  font-size: 1.2rem;
  text-transform: uppercase;
`

export const RecipeTime = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.8rem;
  font-family: "Poppins", sans-serif;
`
export const DetailsButton = styled.button`
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

export const FavouriteButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
`

export const HeartFilled = styled(AiFillHeart)`
  ${heartStyles};
  /* display: none; */
  fill: ${({ theme }) => theme.colors.errorColor};
`
export const HeartEmpty = styled(AiOutlineHeart)`
  ${heartStyles};
  fill: ${({ theme }) => theme.colors.white};
`
