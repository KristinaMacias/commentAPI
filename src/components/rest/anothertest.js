import React from "react";
import Test from "../../test/test";

export default class AnotherTest extends React.Component {
  render() {
    return (
      <div>
        <Test />
      </div>
    );
  }
}

//I am in rest/anothertest.js
//I want to import Test from test/test.js
//how do i find this path?

// ../ means go up one directory
// ../../ means go up two directories
// ../../../ means go up three directories
//etc
