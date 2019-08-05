import React from "react";

export default function Person(props) {
  return (
    <div>
      <div>
        <div>
          <p>Name: {props.person.name}</p>
          <p>Bio: {props.person.bio}</p>
          <button>Delete</button>
          <button>Update</button>
        </div>
      </div>
    </div>
  );
}
