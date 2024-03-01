import React from "react";
import { useGetUserQuery } from "../redux/service/user-api";
import { usePostUserMutation } from "../redux/service/user-api";
import { UserCard } from "../components/user-card";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add } from "../redux/reducer/user-reducer";
import { nanoid } from "@reduxjs/toolkit";

export const UserPage = () => {
  const { data } = useGetUserQuery();
  const dispatch = useDispatch();

  const [postUser] = usePostUserMutation();

  const { register, reset, handleSubmit } = useForm();
  const { user } = useSelector((state) => state);
  console.log(user);

  const submit = (data) => {
    dispatch(add({ ...data, id: nanoid() }));
    postUser(data)
      .unwrap()
      .then((res) => {});
    reset();
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(submit)}>
        <div className="mb-3">
          <input
            className="py-2 border px-2 border-blue-500"
            {...register("name", { required: true })}
            placeholder="Name"
            type="text"
          />
        </div>
        <button className="bg-blue-300 p-2" type="submit">
          send
        </button>
      </form>
      {data?.map((item, i) => (
        <UserCard key={i} {...item} />
      ))}
    </div>
  );
};
