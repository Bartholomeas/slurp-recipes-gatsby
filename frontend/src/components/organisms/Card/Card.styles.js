import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { AiOutlineFieldTime } from "react-icons/ai"

const flexColumn = css`
  display: flex;
  flex-direction: column;
`

export const CardWrapper = styled.div`
  ${flexColumn}
  align-items: flex-start;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
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
  width: 230px;
  height: 400px;
`
export const CardInfoContainer = styled.div`
  ${flexColumn}
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightSecondary};
  padding: 1rem 1.6rem 2rem;
`
export const CardLabelTitle = styled.p`
  font-size: 2.4rem;
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
  width: 100%;
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
  color: ${({ theme }) => theme.colors.darkerBase};
  font-size: 1.8rem;
  font-family: "Poppins", sans-serif;
`
export const TimeIcon = styled(AiOutlineFieldTime)`
  margin-right: 0.8rem;
`
