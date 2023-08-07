import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Scrollsection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1025 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 769 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 426 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-body-secondary">
      <div className="text-center container py-5">
        <h3 className="fw-bold text-primary-emphasis">Hot Collections</h3>

        <Carousel responsive={responsive} className="pt-5">
          <div className="col">
            <div className="card shadow mx-3">
              <img
                src={"image_interview_react/hotcollectionthree.png"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>

          <div className="col px-0">
            <div className="card shadow mx-3">
              <img
                src={"image_interview_react/hotcollectionthree.png"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>

          <div className="col px-0">
            <div className="card shadow mx-3">
              <img
                src={"image_interview_react/hotcollectionthree.png"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>

          <div className="col px-0">
            <div className="card shadow mx-3">
              <img
                src={"image_interview_react/hotcollectionthree.png"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>

          <div className="col px-0">
            <div className="card shadow mx-3">
              <img
                src={"image_interview_react/hotcollectionthree.png"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>

          <div className="col px-0">
            <div className="card shadow mx-3">
              <img
                src={"image_interview_react/hotcollectionthree.png"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Scrollsection;
