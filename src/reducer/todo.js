import { ADD_TODO } from "../action/action-types";

const initialState = [
  {
    id: 0,
    title: "Initial first task ID 0",
    desc: "Second text box item on ID 0",
    desc2: "Third text box item on ID ",
  },
  {
    id: 1,
    title: "Initial first task ID 1",
    desc: "Second text box item on ID 1",
    desc2: "Third text box item on ID 1",
  },
  {
    id: 2,
    title: "Initial first task ID 2",
    desc: "Second text box item on ID 2",
    desc2: "Third text box item on ID 2",
  }


];
export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};