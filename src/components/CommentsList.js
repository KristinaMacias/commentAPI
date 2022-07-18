import React from "react";
import Comment from "./Comment";
import { commentAPI } from "./rest/api";

export default class CommentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    //componentDidMount is a lifecycle method that is called after the component is rendered for the first time
    this.fetchComments(); //fetch comments when the component is mounted
  }

  //import the commentAPI object and call get method on it
  fetchComments = async () => {
    const comments = await commentAPI.get(); //get the comments from the api and store them in the comments variable
    //push the comments to the state
    this.setState({ comments });
  };

  render() {
    console.log(this.state.comments);
    return (
      <div className="comment-list">
        <h2>View All Comments</h2>
        {/* map the comments to Comment Component. Comment Component will render each individaul component */}
        {this.state.comments.map((comment) => (
          <Comment
            key={comment.id} //key is used to identify each comment
            comment={comment} //comment is the comment object from the api
          />
        ))}
      </div>
    );
  }
}
