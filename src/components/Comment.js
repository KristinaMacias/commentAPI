import React from "react";
import { commentAPI } from "./rest/api";

export const Comment = (props) => {
  const { comment } = props; //destructuring the props to get the comment

  //delete the comment from the api
  const handleDelete = async () => {
    await commentAPI.delete(comment.id); //call the delete method on the commentAPI object and pass the comment id as the comment object
  };

  return (
    <div className="comment">
      <div className="comment-header">
        <p>{comment.comment}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Comment;
