import React from "react";

function Emoji(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.img}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.mean}</dd>
    </div>
  );
}

export default Emoji;
