import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleDataQuery } from "../redux/service/todo-api";

export const SingleData = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleDataQuery(id);

  return (
    <div className="container">
      {isLoading ? (
        <h1 className="text-4xl">Loading...</h1>
      ) : (
        <div>
          <h2>{data?.title}</h2>
        </div>
      )}
    </div>
  );
};
