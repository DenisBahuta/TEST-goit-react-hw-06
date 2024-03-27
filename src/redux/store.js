import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { ContactDetailsReducer } from "./contactsSlice";

const rootReducer = combineReducers({
  contactDetails: ContactDetailsReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
