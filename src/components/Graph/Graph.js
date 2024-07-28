import React from "react";
import styled from "styled-components";
import {
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const GraphContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 20px 0;
`;

const graphData = [
  { name: "Page A", data1: 100, data2: 200, data3: 300 },
  { name: "Page B", data1: 150, data2: 250, data3: 350 },
  { name: "Page C", data1: 200, data2: 300, data3: 150 },
  { name: "Page D", data1: 250, data2: 350, data3: 200 },
  { name: "Page E", data1: 300, data2: 150, data3: 100 },
  { name: "Page F", data1: 350, data2: 200, data3: 250 },
  { name: "Page G", data1: 400, data2: 250, data3: 300 },
];

// Main component
const Graph = () => {
  return (
    <>
      <GraphContainer>
        {/* <ResponsiveContainer>
          <BarChart data={graphData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 400]} tickCount={9} />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 400]}
              tickCount={9}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="data1" fill="#ef8735" />
            <Bar dataKey="data2" fill="#8e69b8" />
            <Line
              type="monotone"
              dataKey="data3"
              stroke="#ff7300"
              yAxisId="right"
              strokeWidth={2}
            />
          </BarChart>
        </ResponsiveContainer> */}
         <ResponsiveContainer width="100%" height={400}>
      <BarChart data={graphData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 400]} tickCount={9} />
        <YAxis yAxisId="right" orientation="right" domain={[0, 400]} tickCount={9} />
        <Tooltip />
        <Legend />
        <Bar dataKey="data1" fill="#ef8735" />
        <Bar dataKey="data2" fill="#8e69b8" />
        <Line type="monotone" dataKey="data3" stroke="#ff7300" yAxisId="right" strokeWidth={2} />
      </BarChart>
    </ResponsiveContainer>
      </GraphContainer>
    </>
  );
};

export default Graph;
