import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { authApi } from "../__fake-api__/auth-api";
import { axiosClient } from "../api/config";

var ActionType;
(function (ActionType) {
  ActionType["INITIALIZE"] = "INITIALIZE";
  ActionType["LOGIN"] = "LOGIN";
  ActionType["LOGOUT"] = "LOGOUT";
  ActionType["REGISTER"] = "REGISTER";
})(ActionType || (ActionType = {}));

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext({
  ...initialState,
  platform: "JWT",
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
});

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = globalThis.localStorage.getItem("accessToken");

        if (accessToken) {
          const user = await authApi.me({ accessToken });

          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (email, password) => {
    console.log(email, email, "email password in redux");
    const userLoginData = await axiosClient.post("Authenticate/login", {
      // const userLoginData = await axiosClient.post("login", {
      username: "userone@gmail.com",
      password: "Demo_1234",
      // username: "kminchelle",
      // password: "0lelplR",
    });

    console.log(userLoginData, "login data in redux");
    const { accessToken } = await authApi.login({ email, password });
    // const user = await authApi.me({ accessToken });
    localStorage.setItem("accessToken", accessToken);

    dispatch({
      type: ActionType.LOGIN,
      payload: {
        user: userLoginData.data,
      },
    });
  };

  const logout = async () => {
    localStorage.removeItem("accessToken");
    dispatch({ type: ActionType.LOGOUT });
  };

  const register = async (email, name, password) => {
    const { accessToken } = await authApi.register({ email, name, password });
    const user = await authApi.me({ accessToken });

    localStorage.setItem("accessToken", accessToken);

    dispatch({
      type: ActionType.REGISTER,
      payload: {
        user,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        platform: "JWT",
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
