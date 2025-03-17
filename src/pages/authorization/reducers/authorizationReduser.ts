import {
  SET_AUTH_PIN,
  SET_AUTH_ERROR,
  SET_ERROR_TEXT,
  SET_HELPER_TEXT,
  SET_PHONE_ERROR,
  SET_PHONE_VALUE,
  SET_CODE,
  SET_SHOW_PIN,
  SET_VALID_PHONE
} from "./authorizationActions";

export type AuthState = {
  phoneValue: string;
  isValidPhone: Boolean;
  phoneError: Boolean;
  isAuthPin: Boolean;
  helperText: string;
  isShowPin: Boolean;
  isErrorAuth: Boolean;
  code: string[];
  errorText: string;
};

export type AuthAction =
  | { type: typeof SET_PHONE_VALUE; payload: string }
  | { type: typeof SET_VALID_PHONE; payload: boolean }
  | {type: typeof SET_AUTH_PIN; payload: boolean}
  | {type: typeof SET_AUTH_ERROR; payload: boolean}
  | {type: typeof SET_ERROR_TEXT; payload: string}
  | {type: typeof SET_HELPER_TEXT; payload: string}
  | {type: typeof SET_CODE; payload: string[]}
  | {type: typeof SET_SHOW_PIN; payload: boolean}
  | { type: typeof SET_PHONE_ERROR; payload: boolean };

export const initialState: AuthState = {
  phoneValue: "",
  isValidPhone: false,
  phoneError: false,
  isAuthPin: false,
  helperText: "",
  isShowPin: false,
  isErrorAuth: false,
  code: ["", "", "", ""],
  errorText: "",
};

export const authReducer = (state: AuthState, action: AuthAction):AuthState => {
    switch (action.type) {
        case SET_PHONE_VALUE:
          return { ...state, phoneValue: action.payload }; 
        case SET_VALID_PHONE:
          return { ...state, isValidPhone: action.payload }; 
        default:
          return state; 
      }
}
