import { ADD_TODO } from "../action/action-types";
const initialState = [];
export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};