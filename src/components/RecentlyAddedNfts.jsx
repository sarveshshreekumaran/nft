import React from "react";
import RecentNfts from "./RecentNfts";
import NewNftsDetails from "./NewNftsDetails";

function ReactlyAddedNfts() {
  return (
    <div className="bg-body-secondary">
    <div className="container  py-5">
      <h3 className="fw-bold text-primary-emphasis text-center">Recently Added NFTs</h3>
      <div className="row row-gap-5 pt-5">
        {NewNftsDetails.map((NewNFTDetails) => {
          return (
            <RecentNfts
              key={NewNFTDetails.id}
              nftImg={NewNFTDetails.nftImg}
              cardTitle={NewNFTDetails.cardTitle}
              cardRating={NewNFTDetails.cardRating}
              cardRate={NewNFTDetails.cardRate}
              cardBuyerFirstImg={NewNFTDetails.cardBuyerFirstImg}
              cardBuyerSecondImg={NewNFTDetails.cardBuyerSecondImg}
              cardBuyerEmail={NewNFTDetails.cardBuyerEmail}
              cardBuyerName={NewNFTDetails.cardBuyerName}
              cardLikes={NewNFTDetails.cardLikes}
            />
          );
        })}
      </div>
      <div className="row pt-5 text-center">
        <div className="col">
          <button type="button" className="btn btn-primary btn-lg">
            Load More
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ReactlyAddedNfts;
