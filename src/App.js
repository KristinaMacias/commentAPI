import React from "react";
import Form from "./components/Form";
import CommentsList from "./components/CommentsList";
import "./App.css";
import AnotherTest from "./components/rest/anothertest";

function App() {
  return (
    <div className="App">
      <Form />
      <CommentsList />
      <AnotherTest />
    </div>
  );
}

export default App;
