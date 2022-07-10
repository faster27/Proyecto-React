import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";
import { userReducer } from "./userReducer";



export const rootReducer = combineReducers (
    {
        //State name : reducer controller
        todosState : todosReducer,
        filterState: filterReducer,
        //ASYNC example (LOGIN USER)
        userState: userReducer
        //... añadir mas estados y reducers
    }
) 