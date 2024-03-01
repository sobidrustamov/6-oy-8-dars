import React from "react";
import { Link } from "react-router-dom";
import { useDeleteTodosMutation } from "../redux/service/todo-api";

export const Card = ({ description, title, id }) => {
  const [deleteTodoItem] = useDeleteTodosMutation(id);
  const deleteItem = () => {
    deleteTodoItem(id)
      .unwrap()
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="border m-3 p-5 border-red-400">
      <Link className="block" to={`/todo/${id}`}>
        <h2 className="text-4xl">{title}</h2>
      </Link>
      <div className="flex justify-between items-center">
        <p>{description}</p>
        <button onClick={deleteItem} className="bg-red-400 p-3">
          delete
        </button>
      </div>
    </div>
  );
};
