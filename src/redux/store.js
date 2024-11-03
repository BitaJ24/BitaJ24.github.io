import { createStore } from "redux";
import costReducer from "./reducers/costReducer";
// import { composeWithDevTools } from "@redux-devtools/extension";
const store = createStore(
  costReducer
  // composeWithDevTools()
);
export default store;
