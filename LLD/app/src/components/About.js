import React from "react";
import { LANG } from "../util/langConstant";

const About = ({ lang }) => {
  const data = LANG[lang];
  return (
    <div>
      <div className="mt-4">
        <h3 className="font-bold">{data.title}</h3>
        <p>{data.desc}</p>
      </div>
      <div className="mt-4">
        <h3 className="font-bold">{data.title2}</h3>
        <p>{data.desc}</p>
      </div>
      <div className="mt-4">
        <h3 className="font-bold">{data.title3}</h3>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default About;
