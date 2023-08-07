import React from "react";

function Topcreater(props) {
  return (
    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
      <div
        className="card"
        style={{ backgroundColor: "#E9F8F9", border: "none" }}
      >
        <div className="row">
          <div className="col">
            <img
              src={props.imgSrc}
              className="float-start rounded m-3"
              alt="..."
              width={"90px"}
              height={"90px"}
            />

            <div className="card-body m-3">
              <h5 className="card-title text-primary-emphasis">{props.name}</h5>
              <h6 className="card-title text-primary">{props.count}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topcreater;
