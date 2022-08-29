export const setErrorStatus = (inputName, remove = false) => {
  if (typeof window !== "undefined") {
    if (remove === true) {
      document
        .querySelector(`input[id='${inputName}']`)
        .classList.remove("invalid")
    } else {
      const errorInput = document.querySelector(`input[id='${inputName}']`)
      errorInput.classList.add("invalid")
      errorInput.setAttribute("className", "invalid")
      return errorInput
    }
  }
}
