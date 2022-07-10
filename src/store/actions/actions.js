// ID incremental para TODOs

let nextTodoID = 0;

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'ASET_VISIBILITY_FILTER';

//action ADD_TODO
export const addTodo= (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoID ++,
            text 
        }
    }
}

//actions TOGGLE_TODO
export const toggleTodo= (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

//Actions de tipo SET_VISIBILITY_FILTER
export const setVisibilityFilter= (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}