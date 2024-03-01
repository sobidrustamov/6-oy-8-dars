import React from "react";
import { useForm } from "react-hook-form";
import {
  useGetTodoQuery,
  usePostTodosMutation,
  useDeleteTodosMutation,
} from "../redux/service/todo-api";
import { Card } from "../components/card";

export const Home = () => {
  const { register, reset, handleSubmit } = useForm();
  const [page, setPage] = React.useState(1);
  const [postTodo] = usePostTodosMutation();

  const { data, isLoading } = useGetTodoQuery(page);
  

  const submit = (data) => {
    postTodo(data)
      .unwrap()
      .then((res) => {
        console.log(res);
      });
    reset();
  };
  const buttons = Array(data?.pageSize).fill(null);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(submit)}>
        <div className="mb-3">
          <input
            className="py-2 border px-2 border-blue-500"
            {...register("title", { required: true })}
            placeholder="title"
            type="text"
          />
        </div>
        <div className="mb-3">
          <input
            className="py-2 border px-2 border-blue-500"
            {...register("description", { required: true })}
            placeholder="description"
            type="text"
          />
        </div>
        <button className="bg-blue-300 p-2" type="submit">
          send
        </button>
      </form>
      {isLoading ? (
        <h1 className="text-4xl">Loading...</h1>
      ) : (
        <>
          {data?.data?.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </>
      )}
      <div className="flex items-center justify-center gap-3">
        {buttons.map((_, index) => {
          let number = index + 1;
          return (
            <button
              onClick={() => setPage(number)}
              className={`p-3 bg-red-400 ${
                number === page ? "bg-blue-500" : ""
              }`}
              key={number}
            >
              {number}
            </button>
          );
        })}
      </div>
    </div>
  );
};
