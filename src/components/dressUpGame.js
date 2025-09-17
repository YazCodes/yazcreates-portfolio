import React, { useState } from "react";
import "../components/css/dressUpGame.css";



import base from "../assets/dressUpAssets/base.png";

import outfit1 from "../assets/dressUpAssets/outfit1.png";
import outfit2 from "../assets/dressUpAssets/outfit2.png";
import outfit3 from "../assets/dressUpAssets/outfit3.png";

import bow1 from "../assets/dressUpAssets/bow1.png";
import bow2 from "../assets/dressUpAssets/bow2.png";

import shoe1 from "../assets/dressUpAssets/shoe1.png";
import shoe2 from "../assets/dressUpAssets/shoe2.png";

export default function DressUpGame() {
  const outfits = [outfit1, outfit2, outfit3];
  const bows = [bow1, bow2];
  const shoes = [shoe1, shoe2];

  const [outfitIndex, setOutfitIndex] = useState(0);
  const [bowIndex, setBowIndex] = useState(0);
  const [shoeIndex, setShoeIndex] = useState(0);

  return (
    <div className="dressup-container">
      <h2 className="title">Miffy Fits</h2>
      <p className="subtitle">Customize Miffy’s fit!</p>

      {/* Stage */}
      <div className="stage">
        <img src={base} alt="base" className="base" />
        <img src={outfits[outfitIndex]} alt="outfit" className="outfit" />
        <img src={bows[bowIndex]} alt="bow" className="bow" />
        <img src={shoes[shoeIndex]} alt="shoes" className="shoes" />
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button onClick={() => setOutfitIndex((outfitIndex + 1) % outfits.length)}>
          👕 Outfit
        </button>
        <button onClick={() => setBowIndex((bowIndex + 1) % bows.length)}>
          🎀 Bow
        </button>
        <button onClick={() => setShoeIndex((shoeIndex + 1) % shoes.length)}>
          👟 Shoes
        </button>
      </div>
    </div>
  );
}

