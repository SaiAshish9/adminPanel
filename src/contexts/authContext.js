import createDataContext from "./createDataContext";
import Api from "../api";
import Cookie from "js-cookie";

const reducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { ...state, is_logged_in: true };
    case "signout":
      return { ...state, is_logged_in: false };
    default:
      return state;
  }
};

const signin = (dispatch) => async (username, password) => {
  try {
    const {
      data: { token },
    } = await Api.post("admin/login_via_password", {
      username,
      password,
    });
    if (token) {
      await Cookie.set("token", token);
      dispatch({
        type: "signin",
      });
    } else {
      throw new Error("token not obtained");
    }
  } catch (e) {
    console.log(e.message);
  }
};

const signout = (dispatch) => async () => {
  await Cookie.set("token", null);
  dispatch({
    type: "signout",
  });
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    signin,
    signout,
  },
  {
    is_logged_in: true,
  }
);
