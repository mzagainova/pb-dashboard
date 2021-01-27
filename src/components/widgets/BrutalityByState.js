import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

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

function BrutalityByState() {
  const ref = useRef();

  useEffect(() => {
    const data = mockData.sort(function (a, b) {
      return d3.ascending(a.value, b.value);
    });

    //set up svg using margin conventions - we'll need plenty of room on the left for labels
    const margin = {
      top: 15,
      right: 100,
      bottom: 15,
      left: 60,
    };
    const totalWidth = 495;
    const totalHeight = 750;

    const width = totalWidth - margin.left - margin.right;
    const height = totalHeight - margin.top - margin.bottom;

    const svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scale
      .linear()
      .range([0, width])
      .domain([
        0,
        d3.max(data, function (d) {
          return d.value;
        }),
      ]);

    const y = d3.scale
      .ordinal()
      .rangeRoundBands([height, 0], 0.2)
      .domain(
        data.map(function (d) {
          return d.name;
        })
      );

    //make y axis to show bar names
    const yAxis = d3.svg
      .axis()
      .scale(y)
      //no tick marks
      .tickSize(0)
      .orient("left");

    svg.append("g").attr("class", "y axis").call(yAxis);

    const bars = svg.selectAll(".bar").data(data).enter().append("g");

    //append rects
    bars
      .append("rect")
      .attr("class", "bar")
      .attr("y", function (d) {
        return y(d.name);
      })
      .attr("height", y.rangeBand())
      .attr("x", 0)
      .attr("width", function (d) {
        return x(d.value);
      });

    //add a value label to the right of each bar
    bars
      .append("text")
      .attr("class", "label")
      //y position of the label is halfway down the bar
      .attr("y", function (d) {
        return y(d.name) + y.rangeBand() / 2 + 4;
      })
      //x position is 3 pixels to the right of the bar
      .attr("x", function (d) {
        return x(d.value) + 3;
      })
      .text(function (d) {
        return d.value;
      });
  }, [ref]);

  return (
    <div>
      <h2>Police Brutality By State</h2>
      <svg ref={ref} />
    </div>
  );
}

export default BrutalityByState;
