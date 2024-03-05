import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMems] = useState([]);
  const [isShimmer, setIsShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY + 1 >= document.body.scrollHeight) {
      fetchMemes();
    }
  };

  const fetchMemes = async () => {
    setIsShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setIsShimmer(false);
    setMems((meme) => [...meme, ...json.memes]);
  };

  return (
    <div className="flex flex-wrap">
      {memes?.map((meme, i) => (
        <MemeCard key={i} data={meme} />
      ))}
      {isShimmer && <Shimmer />}
    </div>
  );
};

export default Body;
