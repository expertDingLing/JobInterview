import { SET_CURRENT_USER } from "../actions/actionTypes";
import { SET_SELECT_TAB } from "../actions/actionTypes";
import { isEmpty } from "../helpers/utility";
const initialState = {
  isAuthenticated: false,
  user: {},
  tabname: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case SET_SELECT_TAB:
      return {
        ...state,
        tabname: action.payload
      };
    default:
      return state;
  }
}
