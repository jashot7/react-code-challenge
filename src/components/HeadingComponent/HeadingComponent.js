import React from "react";
import "./HeadingComponent.scss";

export default props => {
  return (
    <>
      <img
        className="rounded-circle"
        src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        alt="Generic placeholder"
        width="140"
        height="140"
      />
      <h2>{props.heading}</h2>
      <p>{props.caption}</p>
      <p>
        <a className="btn btn-secondary" href="/" role="button">
          {props.buttonText}
        </a>
      </p>
    </>
  );
};
