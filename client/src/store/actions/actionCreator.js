import {
  GET_ALL_CATEGORY,
  GET_CATEGORY_ID,
  GET_ALL_TODO,
  GET_TODO_ID,
  ADD_CATEGORY,
  ADD_TODO,
} from "./actionType";
import axios from "axios";
export const baseUrl = "http://localhost:4000";

export const fetchCategories = (payload) => {
  return {
    type: GET_ALL_CATEGORY,
    payload,
  };
};

export const fetchCategoryById = (payload) => {
  return {
    type: GET_CATEGORY_ID,
    payload,
  };
};

export const createCategorySucces = (payload) => {
  return {
    type: ADD_CATEGORY,
    payload,
  };
};

export const fetchTodos = (payload) => {
  return {
    type: GET_ALL_TODO,
    payload,
  };
};

export const fetchTodoById = (payload) => {
  return {
    type: GET_TODO_ID,
    payload,
  };
};

export const createTodoSucces = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const getAllCategory = (id) => {
  return async (dispatch) => {
    const { data } = await axios({
      method: "GET",
      url: baseUrl + "/category",
      headers: {
        access_token: sessionStorage.access_token,
      },
    });
    dispatch(fetchCategories(data));
  };
};

export const getCategoryById = (id) => {
  return async (dispatch) => {
    const { data } = await axios({
      method: "GET",
      url: baseUrl + "/category" + id,
      headers: {
        access_token: sessionStorage.access_token,
      },
    });
    dispatch(fetchCategoryById(data));
  };
};

export const createCategory = (name) => {
  return async (dispatch) => {
    const {data} = await axios({
      method: "POST",
      url: baseUrl + "/category",
      headers: {
        access_token: sessionStorage.access_token,
      },
      data: {
        name,
      },
    });
    dispatch(createCategorySucces(data))
  };
};

export const getAllTodos = () => {
  return async (dispatch) => {
    const { data } = await axios({
      method: "GET",
      url: baseUrl + "/todo",
      headers: {
        access_token: sessionStorage.access_token,
      },
    });
    dispatch(fetchTodos(data));
  };
};

export const getTodoById = (id) => {
  return async (dispatch) => {
    const { data } = await axios({
      method: "GET",
      url: baseUrl + "/todo" + id,
      headers: {
        access_token: sessionStorage.access_token,
      },
    });
    dispatch(fetchTodoById(data));
  };
};

export const createTodo = (payload) => {
  return async (dispatch) => {
    const { data } = await axios({
      method: "POST",
      url: baseUrl + "/todo",
      headers: {
        access_token: sessionStorage.access_token,
      },
      data: payload,
    });
    dispatch(createTodoSucces(data));
  };
};
