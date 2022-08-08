import { useEffect, useState } from "react"

const useConverter = () => {
  const initialState = { product: "mąka pszenna", symbol: "g", value: "0" }
  const [dataToConvert, setDataToConvert] = useState(initialState)
  const [convertedValues, setConvertedValues] = useState({
    cup: "",
    spoon: "",
    teaspoon: "",
  })

  let timer
  console.log(convertedValues)
  const measures = [
    {
      name: "cup",
      g: {
        "mąka pszenna": 150,
        "mąka ziemniaczana": 150,
        "cukier kryształ": 250,
        "cukier puder": 250,
        kakao: 100,
        "bułka tarta": 150,
        "kasza manna": 250,
        sól: 150,
        olej: 200,
        mleko: 200,
      },
      ml: 250,
    },
    {
      name: "spoon",
      g: {
        "mąka pszenna": 9,
        "mąka ziemniaczana": 9,
        "cukier kryształ": 15,
        "cukier puder": 9,
        "  kakao": 6,
        "bułka tarta": 9,
        "kasza manna": 15,
        sól: 9,
        olej: 15,
        mleko: 15,
      },
      ml: 15,
    },
    {
      name: "teaspoon",
      g: {
        "mąka pszenna": 3,
        "mąka ziemniaczana": 3,
        "cukier kryształ": 5,
        "cukier puder": 3,
        kakao: 2,
        "bułka tarta": 3,
        "kasza manna": 5,
        sól: 3,
        olej: 4,
        mleko: 5,
      },
      ml: 5,
    },
  ]

  const setInputValue = e => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      setDataToConvert(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }, 500)
  }

  const setSelectValue = e => {
    setDataToConvert(prevState => ({
      ...prevState,
      [e.target.name]:
        e.target.options[e.target.options.selectedIndex].innerText,
    }))
  }

  useEffect(() => {
    const calculateConvertedValue = ({ product = "", symbol = "" }) => {
      console.log(product, symbol)
      switch (symbol) {
        case "g":
          measures.forEach(measure => {
            setConvertedValues(prevState => ({
              ...prevState,
              [measure.name]: parseFloat(
                (dataToConvert.value / measure[symbol][product]).toFixed(1)
              ),
            }))
          })
          return
        case "dag":
          measures.forEach(measure => {
            setConvertedValues(prevState => ({
              ...prevState,
              [measure.name]: parseFloat(
                ((dataToConvert.value * 10) / measure["g"][product]).toFixed(1)
              ),
            }))
          })

          return
        case "ml":
          measures.forEach(measure => {
            setConvertedValues(prevState => ({
              ...prevState,
              [measure.name]: parseFloat(
                (dataToConvert.value / measure.ml).toFixed(1)
              ),
            }))
          })
          return
        default:
          console.log("default")
          return
      }
    }
    calculateConvertedValue(dataToConvert)
  }, [dataToConvert])

  return {
    initialState,
    dataToConvert,
    setDataToConvert,
    convertedValues,
    setConvertedValues,
    setInputValue,
    setSelectValue,
  }
}
export default useConverter

// const initialState = { product: "mąka pszenna", symbol: "g", value: "" }
// const [dataToConvert, setDataToConvert ] = useState(initialState)
// const [convertedValues, setConvertedValues] = useState({
//     cup: "",
//     spoon: "",
//     teaspoon: "",
// })
//
// let timer
//
// const measures = [
//     {
//         name: "cup",
//         g: {
//             "mąka pszenna": 150,
//             "mąka ziemniaczana": 150,
//             "cukier kryształ": 250,
//             "cukier puder": 250,
//             kakao: 100,
//             "bułka tarta": 150,
//             "kasza manna": 250,
//             sól: 150,
//             olej: 200,
//             mleko: 200,
//         },
//         ml: 250,
//     },
//     {
//         name: "spoon",
//         g: {
//             "mąka pszenna": 9,
//             "mąka ziemniaczana": 9,
//             "cukier kryształ": 15,
//             "cukier puder": 9,
//             kakao: 6,
//             "bułka tarta": 9,
//             "kasza manna": 15,
//             "sól": 9,
//             olej: 15,
//             mleko: 15,
//         },
//         ml: 15,
//     },
//     {
//         name: "teaspoon",
//         g: {
//             "mąka pszenna": 3,
//             "mąka ziemniaczana": 3,
//             "cukier kryształ": 5,
//             "cukier puder": 3,
//             kakao: 2,
//             "bułka tarta": 3,
//             "kasza manna": 5,
//             sól: 3,
//             olej: 4,
//             mleko: 5,
//         },
//         ml: 5,
//     },
// ]
//
//
// const setInputValue = e => {
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//         setDataToConvert(prevState => ({
//             ...prevState,
//             [e.target.name]: e.target.value,
//         }))
//     }, 500)
// }
//
// const setSelectValue = e => {
//     setDataToConvert(prevState => ({
//         ...prevState,
//         [e.target.name]:
//         e.target.options[e.target.options.selectedIndex].innerText,
//     }))
//     useEffect(() => {
//         const calculateConvertedValue = ({
//                                              product = "",
//                                              symbol = "",
//                                          }) => {
//             if (symbol === "dag") {
//                 measures.forEach(measure => {
//                     console.log(measure)
//                     setConvertedValues(prevState => ({
//                         ...prevState,
//                         [measure.name]: [
//                             parseFloat(
//                                 ((dataToConvert.value * 10) / measure["g"][product]).toFixed(1)
//                             ),
//                         ],
//                     }))
//                 })
//             } else if (symbol === "ml") {
//                 measures.forEach(measure => {
//                     setConvertedValues(prevState => ({
//                         ...prevState,
//                         [measure.name]: [
//                             parseFloat((dataToConvert.value / measure.ml).toFixed(1)),
//                         ],
//                     }))
//                 })
//             } else {
//                 measures.forEach(measure => {
//                     setConvertedValues(prevState => ({
//                         ...prevState,
//                         [measure.name]: [
//                             parseFloat(
//                                 (dataToConvert.value / measure[symbol][product]).toFixed(1)
//                             ),
//                         ],
//                     }))
//                 })
//             }
//         }
//         calculateConvertedValue(dataToConvert)
//     }, [dataToConvert])
// }
