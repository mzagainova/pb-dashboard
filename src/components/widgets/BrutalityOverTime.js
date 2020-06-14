import React, { useState } from "react";
import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryBrushContainer,
  VictoryLine,
  VictoryAxis,
} from "victory";
import { COLORS } from "../../styles/constants";

const mockData = [
  { count: 105, month: "2013-01" },
  { count: 56, month: "2013-02" },
  { count: 98, month: "2013-03" },
  { count: 95, month: "2013-04" },
  { count: 103, month: "2013-05" },
  { count: 112, month: "2013-06" },
  { count: 106, month: "2013-07" },
  { count: 94, month: "2013-08" },
  { count: 79, month: "2013-09" },
  { count: 111, month: "2013-10" },
  { count: 76, month: "2013-11" },
  { count: 71, month: "2013-12" },
  { count: 81, month: "2014-01" },
  { count: 64, month: "2014-02" },
  { count: 98, month: "2014-03" },
  { count: 89, month: "2014-04" },
  { count: 99, month: "2014-05" },
  { count: 90, month: "2014-06" },
  { count: 84, month: "2014-07" },
  { count: 114, month: "2014-08" },
  { count: 77, month: "2014-09" },
  { count: 77, month: "2014-10" },
  { count: 88, month: "2014-11" },
  { count: 89, month: "2014-12" },
  { count: 83, month: "2015-01" },
  { count: 82, month: "2015-02" },
  { count: 106, month: "2015-03" },
  { count: 95, month: "2015-04" },
  { count: 77, month: "2015-05" },
  { count: 73, month: "2015-06" },
  { count: 117, month: "2015-07" },
  { count: 103, month: "2015-08" },
  { count: 89, month: "2015-09" },
  { count: 93, month: "2015-10" },
  { count: 85, month: "2015-11" },
  { count: 100, month: "2015-12" },
  { count: 86, month: "2016-01" },
  { count: 97, month: "2016-02" },
  { count: 101, month: "2016-03" },
  { count: 79, month: "2016-04" },
  { count: 83, month: "2016-05" },
  { count: 99, month: "2016-06" },
  { count: 88, month: "2016-07" },
  { count: 95, month: "2016-08" },
  { count: 81, month: "2016-09" },
  { count: 85, month: "2016-10" },
  { count: 91, month: "2016-11" },
  { count: 86, month: "2016-12" },
  { count: 102, month: "2017-01" },
  { count: 107, month: "2017-02" },
  { count: 87, month: "2017-03" },
  { count: 73, month: "2017-04" },
  { count: 91, month: "2017-05" },
  { count: 91, month: "2017-06" },
  { count: 103, month: "2017-07" },
  { count: 94, month: "2017-08" },
  { count: 74, month: "2017-09" },
  { count: 94, month: "2017-10" },
  { count: 92, month: "2017-11" },
  { count: 85, month: "2017-12" },
  { count: 105, month: "2018-01" },
  { count: 89, month: "2018-02" },
  { count: 115, month: "2018-03" },
  { count: 101, month: "2018-04" },
  { count: 91, month: "2018-05" },
  { count: 89, month: "2018-06" },
  { count: 96, month: "2018-07" },
  { count: 102, month: "2018-08" },
  { count: 86, month: "2018-09" },
  { count: 83, month: "2018-10" },
  { count: 85, month: "2018-11" },
  { count: 100, month: "2018-12" },
  { count: 105, month: "2019-01" },
  { count: 80, month: "2019-02" },
  { count: 92, month: "2019-03" },
  { count: 81, month: "2019-04" },
  { count: 83, month: "2019-05" },
  { count: 93, month: "2019-06" },
  { count: 91, month: "2019-07" },
  { count: 101, month: "2019-08" },
  { count: 87, month: "2019-09" },
  { count: 93, month: "2019-10" },
  { count: 82, month: "2019-11" },
  { count: 110, month: "2019-12" },
];

function transformData(data) {
  return data.map(function (d) {
    return { x: new Date(d.month), y: d.count };
  });
}

function getOneMonthAgo() {
  const d = new Date();
  d.setMonth(d.getMonth - 1);
  return d;
}

function BrutalityOverTime() {
  const data = transformData(mockData);
  const [zoomDomain, setZoomDomain] = useState({
    x: [new Date("2019-09"), new Date("2019-12")],
  });

  return (
    <div style={{ width: 500 }}>
      <h2>Police Brutality Over Time</h2>
      <VictoryChart
        width={600}
        height={470}
        scale={{ x: "time" }}
        containerComponent={
          <VictoryZoomContainer
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={setZoomDomain}
          />
        }
      >
        <VictoryLine
          style={{
            data: { stroke: COLORS.primary },
          }}
          data={data}
        />
      </VictoryChart>
      <VictoryChart
        padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
        width={600}
        height={100}
        scale={{ x: "time" }}
        containerComponent={
          <VictoryBrushContainer
            brushDimension="x"
            brushDomain={zoomDomain}
            onBrushDomainChange={setZoomDomain}
          />
        }
      >
        <VictoryAxis tickFormat={(x) => new Date(x).getFullYear()} />
        <VictoryLine
          style={{
            data: { stroke: COLORS.primary },
          }}
          data={data}
        />
      </VictoryChart>
    </div>
  );
}

export default BrutalityOverTime;
