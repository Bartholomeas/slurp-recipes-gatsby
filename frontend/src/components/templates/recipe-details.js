import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
// import {
//   RecipeDetailsSection,
//   HeaderRecipeDetailsImg,
//   RecipeDetailsHeader,
//   RecipeDetailsWrapper,
//   RecipeInfoContainer,
//   RecipeInfoTitle,
//   RecipeInfoValue,
//   RecipeDetailsLine,
//   PreparationsWrapper,
//   IngredientsContainer,
//   PreparationContainer,
//   PreparationsHeader,
//   IconsWrapper,
//   FacebookIcon,
//   ShareIcon,
//   PrinterIcon,
// } from "./recipe-details-styles"
import {
  Wrapper,
  GeneralContainer,
  RecipeHeader,
  RecipeImage,
  ContentContainer,
  InfoBox,
  InfoCategory,
  InfoValue,
  InfoBoxes,
  RecipeWrapper,
  PreparationContainer,
  PrepHeader,
  StepList,
  StepListItem,
  IngredientsBox,
  IngredientsList,
  IngredientsItem,
} from "./recipe-details-styles"

const RecipeDetails = ({ data }) => {
  const recipeInfo = data.strapiRecipes
  const image = recipeInfo.img
    ? getImage(recipeInfo.img.localFile.childImageSharp.gatsbyImageData)
    : {}

  console.log(recipeInfo)
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>s:urp {recipeInfo.title}</title>
        <meta
          name="description"
          content="Best recipes that will be loved by everyone of your family, friends, kids or animals!"
        />
        <link rel="canonical" href="http://localhost:8000/contact" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>{" "}
      <Wrapper>
        <GeneralContainer>
          <RecipeImage image={image} alt="Food header img" />
          <ContentContainer>
            <RecipeHeader>{recipeInfo.title}</RecipeHeader>

            <InfoBoxes>
              <InfoBox>
                <InfoCategory>diet</InfoCategory>
                <InfoValue>
                  {recipeInfo.diets[0] ? recipeInfo.diets[0].diets : "balanced"}
                </InfoValue>
              </InfoBox>
              <InfoBox>
                <InfoCategory>difficulty</InfoCategory>
                <InfoValue>
                  {recipeInfo.difficulties[0]
                    ? recipeInfo.difficulties[0].difficulties
                    : "?"}
                </InfoValue>
              </InfoBox>
              <InfoBox>
                <InfoCategory>time</InfoCategory>
                <InfoValue>{recipeInfo.time}min</InfoValue>
              </InfoBox>
              <InfoBox>
                <InfoCategory>calories</InfoCategory>
                <InfoValue> {parseInt(Math.random() * 1000)}kcal</InfoValue>
              </InfoBox>
            </InfoBoxes>
          </ContentContainer>
        </GeneralContainer>

        <RecipeWrapper>
          <PreparationContainer>
            <PrepHeader>Preparation</PrepHeader>
            <StepList>
              <StepListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vel nisi aliquet, gravida risus vel, maximus lectus.
                Vivamus dolor risus, lacinia ac mollis et, placerat vestibulum
                eros. Morbi vulputate justo neque, sed sollicitudin sapien
                ullamcorper et. Fusce egestas porttitor mauris, eget tincidunt
                justo pellentesque id. Aliquam ac nunc sed leo bibendum
                ultrices. Proin at lacus sed tellus commodo varius. Suspendisse
                magna augue, iaculis eget urna eu, blandit ullamcorper enim. In
                mollis et lacus condimentum laoreet. In et lobortis turpis, id
                gravida dolor. Fusce eu sollicitudin neque, sed cursus libero.
                Phasellus non malesuada ligula, aliquet fermentum dolor.
                Phasellus hendrerit imperdiet fringilla. Aliquam sed justo
                porta, pharetra lacus nec, viverra leo. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Vestibulum consectetur
                eros id ex faucibus dapibus. Morbi luctus scelerisque blandit.
              </StepListItem>
              <StepListItem>
                Vestibulum non sodales purus, a imperdiet nisi. Donec vulputate
                urna fermentum blandit rutrum. Aliquam sodales nibh a sem
                gravida, hendrerit sagittis magna elementum. Morbi lacinia at
                lectus id commodo. Vestibulum lobortis nunc vitae mauris pretium
                efficitur. Aenean a condimentum ex. Donec sit amet lorem ut
                purus egestas rutrum accumsan quis mauris. In id blandit lectus,
                a placerat libero. Integer sodales eros a elementum euismod.
                Etiam quis nibh nec risus varius tristique.{" "}
              </StepListItem>
              <StepListItem>
                Curabitur vehicula, sapien euismod hendrerit elementum, nunc
                arcu ullamcorper turpis, quis sollicitudin odio ante id est.
                Nulla facilisi. Proin eget egestas lacus. Nunc maximus venenatis
                lacus ut congue. Morbi imperdiet tellus id augue vehicula mollis
                id eu quam. Aenean lobortis magna luctus sapien dignissim
                pulvinar. Cras feugiat facilisis ex quis posuere. Donec turpis
                dolor, dictum et imperdiet id, malesuada faucibus metus.
                Pellentesque imperdiet dui tortor, sit amet varius libero
                elementum ut.
              </StepListItem>
            </StepList>
          </PreparationContainer>
          <IngredientsBox>
            <PrepHeader>Ingredients</PrepHeader>
            <IngredientsList>
              <IngredientsItem>
                Vestibulum non sodales purus, a imperdiet nisi. Donec vulputate
              </IngredientsItem>
              <IngredientsItem>
                Vestibulum non sodales purus, a imperdiet nisi. Donec vulputate
                urna fermentum blandit rutrum.{" "}
              </IngredientsItem>
              <IngredientsItem>
                Vestibulum non sodales purus, a imperdiet nisi. Donec vulputate
              </IngredientsItem>
              <IngredientsItem>
                Vestibulum non sodales purus, a imperdiet nisi. Donec vulputate
                urna fermentum blandit rutrum.{" "}
              </IngredientsItem>
              <IngredientsItem>
                Vestibulum non sodales purus, a imperdiet nisi. Donec vulputate
              </IngredientsItem>
            </IngredientsList>
          </IngredientsBox>
        </RecipeWrapper>
      </Wrapper>
      {/* <RecipeDetailsSection>
        <RecipeDetailsWrapper>
          <HeaderRecipeDetailsImg image={image} alt="Food header img" />
          <RecipeDetailsHeader content={recipeInfo.title}></RecipeDetailsHeader>
          <RecipeInfoContainer>
            <RecipeInfoTitle>cook time</RecipeInfoTitle>
            <RecipeInfoValue>~{recipeInfo.time} min</RecipeInfoValue>
          </RecipeInfoContainer>
          <RecipeDetailsLine />
          <RecipeInfoContainer>
            <RecipeInfoTitle>difficulity</RecipeInfoTitle>
            <RecipeInfoValue>
              {recipeInfo.difficulties[0]
                ? recipeInfo.difficulties[0].difficulties
                : "?"}
            </RecipeInfoValue>
          </RecipeInfoContainer>
          <RecipeDetailsLine />
          <RecipeInfoContainer>
            <RecipeInfoTitle>diet</RecipeInfoTitle>
            <RecipeInfoValue>
              {recipeInfo.diets[0] ? recipeInfo.diets[0].diets : "standard"}
            </RecipeInfoValue>
          </RecipeInfoContainer>
        </RecipeDetailsWrapper>

        <PreparationsWrapper>
          <IngredientsContainer>
            <PreparationsHeader>ingredients</PreparationsHeader>
            {/* {recipeInfo.ingredients.split("-")} */}
      {/* {recipeInfo.ingredients} */}
      {/* </IngredientsContainer>
          <PreparationContainer>
            <PreparationsHeader>preparation</PreparationsHeader>
            {recipeInfo.preparation}
          </PreparationContainer>
        </PreparationsWrapper>
        <IconsWrapper>
          <FacebookIcon />
          <ShareIcon />
          <PrinterIcon onClick={() => window.print()} />
        </IconsWrapper>
      </RecipeDetailsSection> */}
    </>
  )
}

export default RecipeDetails

export const query = graphql`
  query RecipeDetails($slug: String) {
    strapiRecipes(title: { eq: $slug }) {
      id
      title
      ingredients
      preparation
      time
      types {
        types
      }
      img {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      diets {
        diets
      }
      difficulties {
        difficulties
      }
    }
  }
`
