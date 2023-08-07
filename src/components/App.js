import React from "react";
import Header from "./Header";
import Herosection from "./Herosection";
import Scrollsection from "./Scrollsection";
import Horizontalcardsection from "./Horizontalcardsection";
import Verticalcardsection from "./Verticalcardsection";
import ReactlyAddedNfts from "./RecentlyAddedNfts";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Herosection />
      <Scrollsection />
      <Horizontalcardsection />
      <Verticalcardsection />
      <ReactlyAddedNfts />
      <Footer />
    </div>
  );
}

export default App;
