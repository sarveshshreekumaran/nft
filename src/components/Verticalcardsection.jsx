import React from "react";
import Verticalcreater from "./Verticalcreater";
import cardBuyersDetails from "./cardBuyersDetails";

function Verticalcardsection() {
  return (
    <div className="bg-body-secondary">
      <div className="container py-5">
        <h3 className="text-center fw-bold text-primary-emphasis">Live Auctions</h3> 

        <div className="row row-gap-5 pt-5">
          {cardBuyersDetails.map((buyerDetail) => {
            return (
              <Verticalcreater
                key={buyerDetail.id}
                cardTitle={buyerDetail.cardTitle}
                cardRate={buyerDetail.cardRate}
                cardBuyerFirstImg={buyerDetail.cardBuyerFirstImg}
                cardBuyerSecondImg={buyerDetail.cardBuyerSecondImg}
                cardBuyerEmail={buyerDetail.cardBuyerEmail}
                cardBuyerName={buyerDetail.cardBuyerName}
                cardLikes={buyerDetail.cardLikes}
                hours={buyerDetail.time.hours}
                minutes={buyerDetail.time.minutes}
                seconds={buyerDetail.time.seconds}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Verticalcardsection;
