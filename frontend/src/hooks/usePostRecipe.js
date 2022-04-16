// import { useState } from "react"
// import axios from "axios"
// const usePostRecipe = () => {
//   const initialState = {
//     title: "",
//     time: "",
//     diets: "",
//     difficulties: "",
//     types: "",
//     preparation: "",
//     ingredients: "",
//   }

//   const [recipeInfo, setRecipeInfo] = useState(initialState)
//   const [file, setFile] = useState()
//   const [isLoading, setIsLoading] = useState(false)
//   const [isPopupActive, setIsPopupActive] = useState(false)

//   const {
//     title,
//     time,
//     diets,
//     difficulties,
//     types,
//     preparation,
//     ingredients,
//     calories,
//   } = recipeInfo

//   const windowGlobal = typeof window !== "undefined" && window
//   const token = windowGlobal
//     ? JSON.parse(windowGlobal.localStorage.getItem("token"))
//     : null
//   //   const togglePopup = () => {
//   //     setIsPopupActive(!isPopupActive)
//   //   }
//   //   const [recipeInfo, setRecipeInfo] = useState(initialState)
//   //   const [file, setFile] = useState()
//   //   const [isLoading, setIsLoading] = useState(false)
//   //   const windowGlobal = typeof window !== "undefined" && window
//   //   const token = windowGlobal
//   //     ? JSON.parse(windowGlobal.localStorage.getItem("token"))
//   //     : null

//   //Wysylanie przepisu
//   const uploadHandler = async e => {
//     e.preventDefault()
//     setIsLoading(true)
//     await axios
//       .post(
//         `${process.env.STRAPI_URL}/recipes`,
//         {
//           title: title,
//           time: time,
//           calories: calories,
//           preparation: preparation,
//           ingredients: ingredients,
//           diets: [
//             {
//               _id: diets,
//             },
//           ],
//           difficulties: [
//             {
//               _id: difficulties,
//             },
//           ],
//           types: [
//             {
//               _id: types,
//             },
//           ],
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then(res => {
//         uploadImage(res.data.id)
//         setIsLoading(false)
//         togglePopup()
//         console.log(res)
//       })
//       .catch(err => console.log(err))

//     setTimeout(() => {
//       closeModal(e)
//       togglePopup()
//     }, 2000)
//   }

//   //Upload zdjecia
//   async function uploadImage(id) {
//     const formData = new FormData()

//     formData.append("files", file)
//     formData.append("refId", id)
//     formData.append("ref", "recipes")
//     formData.append("field", "img")

//     await axios
//       .post(`${process.env.STRAPI_URL}/upload`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then(res => {
//         console.log(res)
//         setIsLoading(false)
//       })
//       .catch(err => console.log(err))
//   }

//   const updateSelect = e => {
//     const select = e.target
//     const selectValue = select.options[select.selectedIndex].value
//     setRecipeInfo({ ...recipeInfo, [select.id]: selectValue })
//     console.log(e.target.options[select.selectedIndex].value)
//     // console.log(types)
//     console.log(recipeInfo)
//   }

//   const updateInput = e => {
//     setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value })
//   }

//   return { updateSelect, updateInput, uploadHandler, uploadImage }
// }

// export default usePostRecipe
