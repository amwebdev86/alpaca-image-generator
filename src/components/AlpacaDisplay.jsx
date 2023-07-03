import React from "react";
export default function AlpacaDisplay({ imageArray }) {
  return (
    <div className="first:relative first:w-full max-w-xl top-0 left-0 ">
      {imageArray.map((source, index) => (
        <img
          key={index}
          className="alpaca"
          src={source.img}
          alt="Your created alpaca"
        ></img>
      ))}
    </div>
  );
}