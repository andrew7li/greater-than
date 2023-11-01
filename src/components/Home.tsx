import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <div className="pageContainer">
      <img className="imageContainer" src="product.png" />
      <div className="textContainer">
        <div className="child">
          <h1>Greater Than</h1>
          <p>A new era. Where iconic design meets premium performance</p>
          <p>Come to the bright side.</p>
          <div className="button">Buy Now</div>
        </div>
      </div>
    </div>
  );
}
