import { LOGIN, LOGOUT } from "./userDefinedActions";

export const LoginUser = (id, email, userName, token) => async (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: { id, email, userName, token },
  });
};
export const LogoutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
