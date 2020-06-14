import React from "react";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";

import { COLORS } from "../../styles/constants";

const mockData = [
  { name: "CA", value: 1186 },
  { name: "TX", value: 719 },
  { name: "FL", value: 540 },
  { name: "AZ", value: 343 },
  { name: "GA", value: 265 },
  { name: "CO", value: 227 },
  { name: "WA", value: 218 },
  { name: "OH", value: 215 },
  { name: "OK", value: 214 },
  { name: "NC", value: 204 },
  { name: "MO", value: 197 },
  { name: "IL", value: 181 },
  { name: "TN", value: 179 },
  { name: "PA", value: 171 },
  { name: "NY", value: 155 },
  { name: "LA", value: 148 },
  { name: "NM", value: 142 },
  { name: "AL", value: 138 },
  { name: "MD", value: 128 },
  { name: "VA", value: 124 },
  { name: "IN", value: 124 },
  { name: "MI", value: 123 },
  { name: "KY", value: 122 },
  { name: "NV", value: 121 },
  { name: "SC", value: 120 },
  { name: "OR", value: 113 },
  { name: "WI", value: 111 },
  { name: "MS", value: 108 },
  { name: "AR", value: 103 },
  { name: "NJ", value: 103 },
  { name: "MN", value: 84 },
  { name: "UT", value: 82 },
  { name: "KS", value: 75 },
  { name: "WV", value: 74 },
  { name: "MA", value: 56 },
  { name: "ID", value: 48 },
  { name: "IA", value: 45 },
  { name: "AK", value: 41 },
  { name: "MT", value: 40 },
  { name: "HI", value: 37 },
  { name: "NE", value: 36 },
  { name: "CT", value: 36 },
  { name: "ME", value: 31 },
  { name: "DC", value: 26 },
  { name: "SD", value: 25 },
  { name: "DE", value: 20 },
  { name: "WY", value: 19 },
  { name: "NH", value: 17 },
  { name: "VT", value: 12 },
  { name: "ND", value: 11 },
  { name: "RI", value: 6 },
];

function transformData(data) {
  return data
    .map(function (d) {
      return { x: d.name, y: d.value };
    })
    .sort(function (a, b) {
      return a.y - b.y;
    });
}

function BrutalityByState() {
  return (
    <div style={{ width: 500 }}>
      <h2>Police Brutality By State</h2>
      <VictoryChart
        height={800}
        theme={VictoryTheme.material}
        domainPadding={{ x: 10 }}
      >
        <VictoryBar
          barRatio={0.8}
          style={{
            data: { fill: COLORS.primary },
          }}
          horizontal
          data={transformData(mockData)}
        />
      </VictoryChart>
    </div>
  );
}

export default BrutalityByState;
