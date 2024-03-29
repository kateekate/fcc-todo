import axios, { AxiosResponse } from "axios";
import { ApiDataType, ITodo } from "./type";

const baseUrl: string = "http://localhost:9000";

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    );
    return todos;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-todo",
      todo
    );
    return saveTodo;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, "status"> = {
      status: true,
    };
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-todo/${todo._id}`,
      todoUpdate
    );
    return updatedTodo;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-todo/${todo._id}`
    );
    return deletedTodo;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
