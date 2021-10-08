import { ADD_TODO } from "../action/action-types";

const initialState = [
  {
    id: 0,
    title: "first task",
    desc: "still the first thing",
    desc2: "Hi",
  },
  {
    id: 1,
    title: "second task",
    desc: "next thing thing",
    desc2: "Hi",
  },
  {
    id: 2,
    title: "second task",
    desc: "next thing thing",
    desc2: "Hi",
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