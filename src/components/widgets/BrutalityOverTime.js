import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

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

function BrutalityOverTime() {
  const ref = useRef();

  useEffect(() => {
    d3.select(ref.current).select("svg").remove();
    const data = mockData
      .map(function (d) {
        return { ...d, month: d3.time.format("%Y-%m").parse(d.month) };
      })
      .sort(function (a, b) {
        return d3.ascending(a.month, b.month);
      });

    //set up svg using margin conventions - we'll need plenty of room on the left for labels
    const metricName = "views";
    const margin = { top: 20, right: 30, bottom: 100, left: 20 };
    const totalWidth = 600;
    const totalHeight = 370;

    const width = totalWidth - margin.left - margin.right;
    const height = totalHeight - margin.top - margin.bottom;

    /* === Context chart === */

    const margin_context = { top: 320, right: 30, bottom: 20, left: 20 };
    const height_context =
      totalHeight - margin_context.top - margin_context.bottom;

    console.log(height_context);
    // the date range of available data:
    const dataXrange = d3.extent(data, function (d) {
      return d.month;
    });
    const dataYrange = [
      0,
      d3.max(data, function (d) {
        return d.count;
      }),
    ];

    // maximum date range allowed to display
    const mindate = dataXrange[0]; // use the range of the data
    const maxdate = dataXrange[1];

    const DateFormat = d3.time.format("%b %Y");

    const dynamicDateFormat = timeFormat([
      [
        d3.time.format("%Y"),
        function () {
          return true;
        },
      ], // <-- how to display when Jan 1 YYYY
      [
        d3.time.format("%b %Y"),
        function (d) {
          return d.getMonth();
        },
      ],
      [
        function () {
          return "";
        },
        function (d) {
          return d.getDate() !== 1;
        },
      ],
    ]);

    /* === Focus Chart === */

    const x = d3.time.scale().range([0, width]).domain(dataXrange);
    const y = d3.scale.linear().range([height, 0]).domain(dataYrange);
    const xAxis = d3.svg
      .axis()
      .scale(x)
      .orient("bottom")
      .tickSize(-height)
      .ticks(function (start, stop) {
        return customTickFunction(width, start, stop);
      })
      .tickFormat(dynamicDateFormat);
    const yAxis = d3.svg
      .axis()
      .scale(y)
      .ticks(4)
      .tickSize(-width)
      .orient("right");

    /* === Context Chart === */

    const x2 = d3.time.scale().range([0, width]).domain([mindate, maxdate]);
    const y2 = d3.scale.linear().range([height_context, 0]).domain(y.domain());
    const xAxis_context = d3.svg
      .axis()
      .scale(x2)
      .orient("bottom")
      .ticks(function (start, stop) {
        return customTickFunction(width, start, stop);
      })
      .tickFormat(dynamicDateFormat);

    /*
     * ========================================================================
     *  Plotted line and area variables
     * ========================================================================
     */

    /* === Focus Chart === */

    const line = d3.svg
      .line()
      .x(function (d) {
        return x(d.month);
      })
      .y(function (d) {
        return y(d.count);
      });

    const area = d3.svg
      .area()
      .x(function (d) {
        return x(d.month);
      })
      .y0(height)
      .y1(function (d) {
        return y(d.count);
      });

    /* === Context Chart === */

    const area_context = d3.svg
      .area()
      .x(function (d) {
        return x2(d.month);
      })
      .y0(height_context)
      .y1(function (d) {
        return y2(d.count);
      });

    const line_context = d3.svg
      .line()
      .x(function (d) {
        return x2(d.month);
      })
      .y(function (d) {
        return y2(d.count);
      });

    /*
     * ========================================================================
     *  Variables for brushing and zooming behaviour
     * ========================================================================
     */
    function timeFormat(formats) {
      return function (date) {
        var i = formats.length - 1,
          f = formats[i];
        while (!f[1](date)) f = formats[--i];
        return f[0](date);
      };
    }

    function customTickFunction(width, t0, t1) {
      var labelSize = 42; //
      var maxTotalLabels = Math.floor(width / labelSize);

      function step(date, offset) {
        date.setMonth(date.getMonth() + offset);
      }

      var time = d3.time.month.ceil(t0),
        times = [],
        monthFactors = [1, 3, 4, 12];

      while (time < t1) {
        times.push(new Date(+time));
        step(time, 1);
      }

      for (let i = 0; times.length > maxTotalLabels; i++) {
        times = times.filter(function (time) {
          return time.getMonth() % monthFactors[i] === 0;
        });
      }

      return times;
    }

    function draw() {
      setYdomain();
      focus.select(".area").attr("d", area);
      focus.select(".line").attr("d", line);
      focus.select(".x.axis").call(xAxis);
      //focus.select(".y.axis").call(yAxis);
      // Force changing brush range
      brush.extent(x.domain());
      vis.select(".brush").call(brush);
      // and update the text showing range of dates.
      updateDisplayDates();
    }

    function updateDisplayDates() {
      const b = brush.extent();
      // update the text that shows the range of displayed dates
      const localBrushDateStart = brush.empty()
          ? DateFormat(dataXrange[0])
          : DateFormat(b[0]),
        localBrushDateEnd = brush.empty()
          ? DateFormat(dataXrange[1])
          : DateFormat(b[1]);

      // Update start and end dates in upper right-hand corner
      d3.select("#displayDates").text(
        localBrushDateStart === localBrushDateEnd
          ? localBrushDateStart
          : localBrushDateStart + " - " + localBrushDateEnd
      );
    }

    function brushed() {
      x.domain(brush.empty() ? x2.domain() : brush.extent());
      focus.select(".area").attr("d", area);
      focus.select(".line").attr("d", line);
      focus.select(".x.axis").call(xAxis);
      // Reset zoom scale's domain
      zoom.x(x);
      updateDisplayDates();
      setYdomain();
    }

    function brushend() {
      // when brush stops moving:

      // check whether chart was scrolled out of bounds and fix,
      const b = brush.extent();
      const out_of_bounds = brush.extent().some(function (e) {
        return (e < mindate) | (e > maxdate);
      });
      if (out_of_bounds) {
        moveInBounds(b);
      }
    }

    function moveInBounds(b) {
      // move back to boundaries if user pans outside min and max date.

      const ms_in_year = 31536000000;
      let brush_start_new;
      let brush_end_new;

      if (b[0] < mindate) {
        brush_start_new = mindate;
      } else if (b[0] > maxdate) {
        brush_start_new = new Date(maxdate.getTime() - ms_in_year);
      } else {
        brush_start_new = b[0];
      }

      if (b[1] > maxdate) {
        brush_end_new = maxdate;
      } else if (b[1] < mindate) {
        brush_end_new = new Date(mindate.getTime() + ms_in_year);
      } else {
        brush_end_new = b[1];
      }

      brush.extent([brush_start_new, brush_end_new]);

      brush(d3.select(".brush").transition());
      brushed();
      draw();

      return brush.extent();
    }

    function setYdomain() {
      // this function dynamically changes the y-axis to fit the data in focus

      // get the min and max date in focus
      const xleft = new Date(x.domain()[0]);
      const xright = new Date(x.domain()[1]);
      let yleft;
      let yright;

      // a function that finds the nearest point to the right of a point
      const bisectDate = d3.bisector(function (d) {
        return d.month;
      }).right;

      // get the y value of the line at the left edge of view port:
      const iL = bisectDate(data, xleft);

      if (data[iL] !== undefined && data[iL - 1] !== undefined) {
        const left_dateBefore = data[iL - 1].month,
          left_dateAfter = data[iL].month;

        const intfun = d3.interpolateNumber(data[iL - 1].count, data[iL].count);
        yleft = intfun(
          (xleft - left_dateBefore) / (left_dateAfter - left_dateBefore)
        );
      } else {
        yleft = 0;
      }

      // get the x value of the line at the right edge of view port:
      const iR = bisectDate(data, xright);

      if (data[iR] !== undefined && data[iR - 1] !== undefined) {
        const right_dateBefore = data[iR - 1].month,
          right_dateAfter = data[iR].month;

        const intfun = d3.interpolateNumber(data[iR - 1].count, data[iR].count);
        yright = intfun(
          (xright - right_dateBefore) / (right_dateAfter - right_dateBefore)
        );
      } else {
        yright = 0;
      }

      // get the y values of all the actual data points that are in view
      const dataSubset = data.filter(function (d) {
        return d.month >= xleft && d.month <= xright;
      });
      const countSubset = [];
      dataSubset.forEach(function (d) {
        countSubset.push(d.count);
      });

      // add the edge values of the line to the array of counts in view, get the max y;
      countSubset.push(yleft);
      countSubset.push(yright);
      let ymax_new = d3.max(countSubset);

      if (ymax_new === 0) {
        ymax_new = dataYrange[1];
      }

      // reset and redraw the yaxis
      y.domain([0, ymax_new * 1.05]);
      focus.select(".y.axis").call(yAxis);
    }

    function scaleDate(d, i) {
      // action for buttons that scale focus to certain time interval

      var b = brush.extent(),
        interval_ms,
        brush_end_new,
        brush_start_new;

      if (d === "year") {
        interval_ms = 31536000000;
      } else if (d === "month") {
        interval_ms = 2592000000;
      }

      if ((d === "year") | (d === "month")) {
        if (maxdate.getTime() - b[1].getTime() < interval_ms) {
          // if brush is too far to the right that increasing the right-hand brush boundary would make the chart go out of bounds....
          brush_start_new = new Date(maxdate.getTime() - interval_ms); // ...then decrease the left-hand brush boundary...
          brush_end_new = maxdate; //...and set the right-hand brush boundary to the maxiumum limit.
        } else {
          // otherwise, increase the right-hand brush boundary.
          brush_start_new = b[0];
          brush_end_new = new Date(b[0].getTime() + interval_ms);
        }
      } else if (d === "data") {
        brush_start_new = dataXrange[0];
        brush_end_new = dataXrange[1];
      } else {
        brush_start_new = b[0];
        brush_end_new = b[1];
      }

      brush.extent([brush_start_new, brush_end_new]);

      // now draw the brush to match our extent
      brush(d3.select(".brush").transition());
      // now fire the brushstart, brushmove, and brushend events
      brush.event(d3.select(".brush").transition());
    }

    const brush = d3.svg
      .brush()
      .x(x2)
      .on("brush", brushed)
      .on("brushend", brushend);

    const zoom = d3.behavior.zoom().on("zoom", draw).on("zoomend", brushend);

    /*
     * ========================================================================
     *  Define the SVG area ("vis") and append all the layers
     * ========================================================================
     */

    // === the main components === //

    const vis = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("class", "metric-chart"); // CB -- "line-chart" -- CB //

    vis
      .append("defs")
      .append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", width)
      .attr("height", height);
    // clipPath is used to keep line and area from moving outside of plot area when user zooms/scrolls/brushes

    const context = vis
      .append("g")
      .attr("class", "context")
      .attr(
        "transform",
        "translate(" + margin_context.left + "," + margin_context.top + ")"
      );

    const focus = vis
      .append("g")
      .attr("class", "focus")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    vis
      .append("svg:rect")
      .attr("class", "pane")
      .attr("width", width)
      .attr("height", height)
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .call(zoom)
      .call(draw);

    // === current date range text & zoom buttons === //

    const display_range_group = vis
      .append("g")
      .attr("id", "buttons_group")
      .attr("transform", "translate(" + 0 + "," + 0 + ")");

    display_range_group
      .append("text")
      .text("Showing data from: ")
      .style("text-anchor", "start")
      .attr("transform", "translate(" + 0 + "," + 10 + ")");

    display_range_group
      .append("text")
      .attr("id", "displayDates")
      .text(DateFormat(dataXrange[0]) + " - " + DateFormat(dataXrange[1]))
      .style("text-anchor", "start")
      .attr("transform", "translate(" + 82 + "," + 10 + ")");

    display_range_group
      .append("text")
      .text("Zoom to: ")
      .style("text-anchor", "start")
      .attr("transform", "translate(" + 180 + "," + 10 + ")");

    // === the zooming/scaling buttons === //

    const button_width = 40;
    const button_height = 14;

    // don't show year button if < 1 year of data
    const dateRange = dataXrange[1] - dataXrange[0];
    const ms_in_year = 31540000000;
    let button_data;

    if (dateRange < ms_in_year) {
      button_data = ["month", "data"];
    } else {
      button_data = ["year", "month", "data"];
    }

    const button = display_range_group
      .selectAll("g")
      .data(button_data)
      .enter()
      .append("g")
      .attr("class", "scale_button")
      .attr("transform", function (d, i) {
        return "translate(" + (220 + i * button_width + i * 10) + ",0)";
      })
      .on("click", scaleDate);

    button
      .append("rect")
      .attr("width", button_width)
      .attr("height", button_height)
      .attr("rx", 1)
      .attr("ry", 1);

    button
      .append("text")
      .attr("dy", button_height / 2 + 3)
      .attr("dx", button_width / 2)
      .style("text-anchor", "middle")
      .text(function (d) {
        return d;
      });

    /* === focus chart === */

    focus
      .append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .attr("transform", "translate(" + width + ", 0)");

    focus.append("path").datum(data).attr("class", "area").attr("d", area);

    focus
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    focus.append("path").datum(data).attr("class", "line").attr("d", line);

    /* === context chart === */

    context
      .append("path")
      .datum(data)
      .attr("class", "area")
      .attr("d", area_context);

    context
      .append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line_context);

    context
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height_context + ")")
      .call(xAxis_context);

    /* === brush (part of context chart)  === */

    var brushg = context.append("g").attr("class", "x brush").call(brush);

    brushg
      .selectAll(".extent")
      .attr("y", -6)
      .attr("height", height_context + 8);
    // .extent is the actual window/rectangle showing what's in focus

    brushg
      .selectAll(".resize")
      .append("rect")
      .attr("class", "handle")
      .attr("transform", "translate(0," + -3 + ")")
      .attr("rx", 2)
      .attr("ry", 2)
      .attr("height", height_context + 6)
      .attr("width", 3);

    brushg
      .selectAll(".resize")
      .append("rect")
      .attr("class", "handle-mini")
      .attr("transform", "translate(-2,8)")
      .attr("rx", 3)
      .attr("ry", 3)
      .attr("height", height_context / 2)
      .attr("width", 7);
    // .resize are the handles on either size
    // of the 'window' (each is made of a set of rectangles)

    /* === y axis title === */

    vis
      .append("text")
      .attr("class", "y axis title")
      .text("Monthly " + metricName)
      .attr("x", -(height / 2))
      .attr("y", 0)
      .attr("dy", "1em")
      .attr("transform", "rotate(-90)")
      .style("text-anchor", "middle");

    // allows zooming before any brush action
    zoom.x(x);
  }, [ref]);

  return (
    <div>
      <h2>Police Brutality Over Time</h2>
      <div id="metric-modal" ref={ref}></div>
    </div>
  );
}

export default BrutalityOverTime;
