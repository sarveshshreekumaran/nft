import React from "react";
import Topcreater from "./Topcreater";

function Horizontalcardsection() {
  return (
    <div className="bg-body-secondary">
      <div className="container py-5">
        <h3 className="text-center fw-bold text-primary-emphasis">
          Top Creaters
        </h3>
        <div className="row row-gap-5 pt-5">
          <Topcreater
            imgSrc="image_interview_react/liveauctions.png"
            name="lenin quies"
            count="178 items"
          />
          <Topcreater
            imgSrc="image_interview_react/bannerheade.png"
            name="lenin quies"
            count="178 items"
          />
          <Topcreater
            imgSrc="image_interview_react/liveauctions.png"
            name="lenin quies"
            count="178 items"
          />
          <Topcreater
            imgSrc="image_interview_react/bannerheade.png"
            name="lenin quies"
            count="178 items"
          />
          <Topcreater
            imgSrc="image_interview_react/bannerheade.png"
            name="lenin quies"
            count="178 items"
          />
          <Topcreater
            imgSrc="image_interview_react/liveauctions.png"
            name="lenin quies"
            count="178 items"
          />
          <Topcreater
            imgSrc="image_interview_react/bannerheade.png"
            name="lenin quies"
            count="178 items"
          />
          <Topcreater
            imgSrc="image_interview_react/liveauctions.png"
            name="lenin quies"
            count="178 items"
          />
        </div>
      </div>
    </div>
  );
}

export default Horizontalcardsection;
