import React from "react";
import { AreaChart, BarChart, LineChart } from "@tremor/react";
import { chartData, dataFormatter } from "./data";
import "@tremor/react/dist/esm/tremor.css";

const DemoAreaChart = () => (
  <AreaChart
    data={chartData}
    categories={["SemiAnalysis", "The Pragmatic Engineer"]}
    dataKey="date"
    height="h-72"
    colors={["indigo", "cyan"]}
    valueFormatter={dataFormatter}
    marginTop="mt-4"
  />
);
const DemoBarChart = () => (
  <BarChart
    data={chartData}
    categories={["SemiAnalysis", "The Pragmatic Engineer"]}
    dataKey="date"
    height="h-72"
    colors={["indigo", "cyan"]}
    valueFormatter={dataFormatter}
    marginTop="mt-4"
  />
);
const DemoLineChart = () => (
  <LineChart
    data={chartData}
    categories={["SemiAnalysis", "The Pragmatic Engineer"]}
    dataKey="date"
    height="h-72"
    colors={["indigo", "cyan"]}
    valueFormatter={dataFormatter}
    marginTop="mt-4"
  />
);

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <DemoAreaChart />
        <DemoBarChart />
      </div>
      <div
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "center",
        }}
      >
        <DemoLineChart />
      </div>
    </div>
  );
}

export default App;
