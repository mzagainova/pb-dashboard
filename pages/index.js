import React from "react";
import BrutalityByState from "../src/components/widgets/BrutalityByState";
import BrutalityOverTime from "../src/components/widgets/BrutalityOverTime";

function HomePage() {
  return (
    <div>
      <h1>Police Brutality Dashboard</h1>
      <BrutalityOverTime />
      <BrutalityByState />
    </div>
  );
}

export default HomePage;
