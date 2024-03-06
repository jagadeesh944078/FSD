import React, { useState } from "react";

const AccordianItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div className="border border-black" onClick={() => setIsOpen()}>
      <div className="bg-slate-200 p-2 font-bold flex justify-between">
        <span>{title}</span>
        <span>⬇️</span>
      </div>
      {isOpen && <div>{body}</div>}
    </div>
  );
};

export default AccordianItem;
