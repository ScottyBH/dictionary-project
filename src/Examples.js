import React from "react";

export default function Examples(props) {
  if (props.examples) {
    return (
      <div>
        {props.examples.map(function (examples, index) {
          return <span key={index}>{examples}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
