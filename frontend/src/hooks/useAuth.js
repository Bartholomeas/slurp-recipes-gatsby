import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../store/authSlice"

const useAuth = () => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(state => state.auth)

  const setAuthentication = type => {
    if (type) dispatch(authActions.setAuthenticated(true))
    else dispatch(authActions.setAuthenticated(false))
  }

  return [setAuthentication, isAuthenticated]
}

export default useAuth
