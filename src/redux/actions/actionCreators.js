import { ADD } from "./actionTypes";

export const add = (data) => {
  return {
    type: ADD,
    payload: data,
  };
};
