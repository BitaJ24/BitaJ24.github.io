import { ADD } from "../actions/actionTypes";
const initialState = {
  total: 0,
  count: 0,
};

const costReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        total: oldState.total + action.payload,
        count: oldState.count + 1,
      };
    default:
      return oldState;
  }
};

export default costReducer;
