import React from "react";
import { Link } from "react-router-dom";
import { useDeleteUserMutation } from "../redux/service/user-api";
import { remove } from "../redux/reducer/user-reducer";
import { useDispatch } from "react-redux";
import { add } from "../redux/reducer/user-reducer";

export const UserCard = ({ name, id }) => {
  const [deleteUserItem] = useDeleteUserMutation(id);
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(remove({ id }));
    deleteUserItem(id)
      .unwrap()
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const saveItem = () => {
    dispatch(add({ id }));
  };
  return (
    <div className="flex justify-between p-3 border m-3">
      <Link to={`/user/${id}`}>
        <h2>{name}</h2>
      </Link>
      <div>
        <button onClick={saveItem} className="bg-yellow-400 p-2 mx-2">
          save
        </button>
        <button onClick={deleteItem} className="bg-red-400 p-2">
          delete
        </button>
      </div>
    </div>
  );
};
