import React from "react";
import { Link } from "react-router-dom";
import { useDeleteTodosMutation } from "../redux/service/todo-api";
import { addTodo } from "../redux/reducer/todo-reducer";
import { useDispatch } from "react-redux";

export const Card = ({ description, title, id }) => {
  const [deleteTodoItem] = useDeleteTodosMutation(id);
  const dispatch = useDispatch();

  const deleteItem = () => {
    deleteTodoItem(id)
      .unwrap()
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const saveItem = () => {
    dispatch(addTodo({ id }));
  };
  return (
    <div className="flex justify-between border m-3 p-5 border-red-400">
      <Link className="block" to={`/todo/${id}`}>
        <h2 className="text-4xl">{title}</h2>
        <p>{description}</p>
      </Link>
      <div className="flex gap-2 items-center">
        <button onClick={saveItem} className="bg-yellow-400 p-3">
          save
        </button>
        <button onClick={deleteItem} className="bg-red-400 p-3">
          delete
        </button>
      </div>
    </div>
  );
};
