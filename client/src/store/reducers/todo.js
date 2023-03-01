import { GET_ALL_TODO, GET_TODO_ID, ADD_TODO } from "../actions/actionType";
const initialState = {
    todos: [],
    todo: {},
    newTodo: ''
}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TODO:
            return {
                ...state,
                todos: action.payload
            }
        case GET_TODO_ID:
            return {
                ...state,
                todo: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                newTodo: action.payload
            }
        default:
            return state;
    }
}