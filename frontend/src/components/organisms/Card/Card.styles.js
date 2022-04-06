import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import Button from "../../atoms/Button/Button"
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
  box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 6px;
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
  border-radius: 6px 6px 0 0;
`

export const CardLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondarySupport};
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  border: none;
  background: none;
  padding: 2rem 0 0 2rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`
export const CardInfoContainer = styled.div`
  ${flexColumn}
  height: 40%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem 1.6rem 2rem;
`
export const CardLabelTitle = styled.p`
  font-size: 2rem;
  align-self: flex-start;
  flex-grow: 1;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontColor};
`

export const CardInfoHeaderContainer = styled.div`
  ${flexColumn}
  justify-content: space-between;
  height: 100%;
`
export const CardInfoBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: auto;
  width: 100%;
  border-radius: 6px;
`
export const CardRecipeInfos = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 1.6rem;
`
export const Circle = styled.span`
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
`

export const RecipeTime = styled.p`
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: 1.8rem;
  font-family: "Poppins", sans-serif;
`
export const DetailsButton = styled.button`
  color: ${({ theme }) => theme.colors.secondarySupport};
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryColor};
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
