// import React from 'react';
import About from "./About";
import LatestNews from "./LatestNews";


export default function BothAboutAndLatest() {
  return (
    <div className="background">
      <LatestNews/>
      <About/>
    </div>
  );
}
