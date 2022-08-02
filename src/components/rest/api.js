let url = "https://62ce3672066bd2b699313f26.mockapi.io/comments";

class CommentApi {
  get = async () => {
    //async function to get comments from API and return them as a promise
    try {
      const response = await fetch(url); //await waits for the response to be received before moving to next line
      const data = await response.json(); //await and then convert the response to json
      return data; //returning data
    } catch (error) {
      //if error, return error
      console.log("There is an error in the get method", error);
    }
  };

  //update api method
  update = async (comment) => {
    try {
      const response = await fetch(url + "/" + comment.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", //setting the content type to json because that's what my api uses
        },
        body: JSON.stringify({ comment: comment.comment }), //converting the comment to json
      });
      return await response.json(); //returning the json response from the api
    } catch (error) {
      console.log("There is an error in the update method", error);
    }
  };

  //post request to API
  post = async (comment) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("There is an error in the post method", error);
    }
  };

  //delete request to API
  delete = async (id) => {
    try {
      const response = await fetch(url + "/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("There is an error in the delete method", error);
    }
  };
}

export const commentAPI = new CommentApi(); //export the commentAPI object to be used in other files
