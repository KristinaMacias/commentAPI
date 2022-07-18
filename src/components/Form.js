import React, { useState } from "react";
import { commentAPI } from "./rest/api";

export const Form = () => {
  const [comment, setComment] = useState([]); //initializing the comment state using useState hook and setting it to an empty string

  //handleChange is a function that is called when the user types in the comment input
  const handleReviewChange = (event) => {
    setComment(event.target.value); //set the comment state to the value of the event target
  };

  //handleSubmit is a function that is called when the user clicks the submit button
  const handleReviewSubmit = (event) => {
    event.preventDefault(); //prevent the default behavior of the form
    commentAPI.post({ comment }); //call the post method on the commentAPI object and pass the comment state as the comment object
    setComment(""); //reset the comment state to empty string after the comment is posted because the comment state is set to the value of the event target
    //refresh the page to get the new comment
    window.location.reload();
  };

  return (
    <div className="form">
      <form onSubmit={handleReviewSubmit}>
        <h2>Leave a Comment:</h2>
        <label>
          <textarea
            name="comment" //name is used to identify the comment
            value={comment} //set the value of the textarea to the comment state
            onChange={handleReviewChange} //call the handleChange function when the user types in the textarea
            placeholder="Add your comment here"
            rows="5"
            cols="50"
          />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Form;
