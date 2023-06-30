import { ITodo } from "./../../src/types/todo";

interface ITodo {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updateAt?: string;
}

interface ITodoProps {
  todo: ITodo;
}

interface ApiDataType {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
}
