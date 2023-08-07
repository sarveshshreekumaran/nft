import React from "react";

function RecentNfts(props) {
  return (
    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 p-0">
      <div className="card rounded-4 shadow mx-3">
        <img
          src={props.nftImg}
          className="card-img-top rounded-top-4"
          alt="..."
        />
        <div className="card-body">
          <div className="row">
            <div className="col ">
              <h5 className="card-title text-primary-emphasis">
                {props.cardTitle}
              </h5>
            </div>
            <div className="col text-end">
              <i
                className="fa fa-star "
                style={{ color: props.cardRating.star1 }}
              ></i>
              <i
                className="fa fa-star"
                style={{ color: props.cardRating.star2 }}
              ></i>
              <i
                className="fa fa-star"
                style={{ color: props.cardRating.star3 }}
              ></i>
              <i className="fa fa-star "></i>
              <i className="fa fa-star "></i>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p>Highest Bid</p>
            </div>
            <div className="col">
              <h6 className="text-end py-1">{props.cardRate} BUSD</h6>
            </div>
          </div>

          <div className="row">
            <div className="col position-relative">
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
              <div style={{ whiteSpace: "nowrap" }}>
                <h6 className="m-0 text-primary-emphasis">
                  {props.cardBuyerEmail}
                </h6>
                <small className="m-0">{props.cardBuyerName}</small>
              </div>
            </div>

            <div className="col text-end">
              <p className="text-secondary pt-3 m-0">
                <i className="fa-solid fa-heart"></i> {props.cardLikes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentNfts;
