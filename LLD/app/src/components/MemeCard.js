import React from "react";

const MemeCard = ({ data }) => {
  const { url, author } = data;
  return (
    <div className="p-1 m-2 border border-black rounded-md">
      <img alt="meme" className="w-56 h-56" src={url} />
      <p>{author}</p>
    </div>
  );
};

export default MemeCard;
