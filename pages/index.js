import React from "react";
import BrutalityByState from "../src/components/widgets/BrutalityByState";
import BrutalityOverTime from "../src/components/widgets/BrutalityOverTime";
import BubbleHeatmap from "../src/components/widgets/BubbleHeatmap"

function HomePage() {
  return (
    <div>
      <h1>Police Brutality Dashboard</h1>
      <BrutalityOverTime />
      <BrutalityByState />
      <BubbleHeatmap />
    </div>
  );
}

export default HomePage;
