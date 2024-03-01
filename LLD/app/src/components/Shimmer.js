import React from "react";

const Shimmer = () => {
  return Array(10)
    .fill(0)
    .map((v, i) => (
      <div key={i} className="p-1 m-2 border border-black rounded-md">
        <div className="w-56 h-56 bg-gray-200"></div>
        <p className="bg-gray-200 w-[100%] h-3 mt-2"></p>
      </div>
    ));
};

export default Shimmer;
