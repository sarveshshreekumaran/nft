import React from "react";

function Herosection() {
  return (
    <div className="background-img mt-5">
      <div className="container">
        <div className="row py-5">
          <div className="col">
            <h1 className="display-1 fw-bolder text-primary-emphasis hero-title">
              Discover
            </h1>
            <h1 className="display-1 fw-bolder hero-title">Digital art &</h1>
            <h1 className="display-1 fw-bolder hero-title">Collect NFTs</h1>
            <p className="mt-3">
              Edaface is a user interface aggregator that brings all the various
              functionalities of the crypto onto a single platform! Edaface is a
              user interface aggregator that brings all the various
              functionalities of the crypto onto a single platform!
            </p>
          </div>

          <div className="col">
            <div className="card shadow rounded-4">
              <img
                height={"400rem"}
                src={"image_interview_react/bannerheade.png"}
                className="object-fit-cover rounded-top-4"
                alt="..."
              />

              <div className="card-body">
                <img
                  className="rounded-circle float-start me-2 "
                  width={"50px"}
                  height={"50px"}
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
                  }
                />
                <div>
                  <h6 className="m-0">Blue Studios NFT</h6>
                  <span>by lorem ipsum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
