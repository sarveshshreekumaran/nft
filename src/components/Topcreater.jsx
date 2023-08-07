import React from "react";

function Topcreater(props) {
  return (
    <div className="d-inline-block text-start p-2 rounded bg-primary-subtle mx-5 my-5">
      <img
        width={"50px"}
        height={"50px"}
        className="float-start rounded me-2"
        src={props.imgSrc}
      />
      <div className="d-inline-block">
        <h5 className="m-0">{props.name}</h5>
        <p className="m-0">{props.count}</p>
      </div>
    </div>
  );
}

export default Topcreater;
