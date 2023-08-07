import React from "react";

function Verticalcreater(props) {
  return (
    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 p-0">
      <div className="card rounded-4 shadow mx-3">
        <img
          src={"image_interview_react/liveauctions.png"}
          className="card-img-top rounded-top-4"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-primary-emphasis">
            {props.cardTitle}
          </h5>
          <div className="row">
            <div className="col">
              <p>Highest Bid</p>
            </div>
            <div className="col ">
              <h6 className="text-end py-1">{props.cardRate} BUSD</h6>
            </div>
          </div>

          <div className="row">
            <div className=" col position-relative">
              <img
                src={props.cardBuyerFirstImg}
                width={"40px"}
                height={"40px"}
                className="rounded-circle float-start me-4"
              />
              <img
                src={props.cardBuyerSecondImg}
                width={"40px"}
                height={"40px"}
                className="rounded-circle"
                style={{ position: "absolute", left: "25px" }}
              />
              <div className="" style={{ whiteSpace: "nowrap" }}>
                <h6 className="mb-0 text-primary-emphasis">
                  {props.cardBuyerEmail}
                </h6>
                <small className="mb-0">{props.cardBuyerName}</small>
              </div>
            </div>

            <div className=" col text-end">
              <p className="text-secondary m-0 pt-3">
                <i className="fa-solid fa-heart"></i> {props.cardLikes}
              </p>
            </div>
          </div>
        </div>

        <div className="card-img-overlay">
          <div className="card-title text-end text-white">
            <span className="bg-primary p-1">{props.hours}</span>:
            <span className="bg-primary p-1">{props.minutes}</span>:
            <span className="bg-primary p-1">{props.seconds}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verticalcreater;
