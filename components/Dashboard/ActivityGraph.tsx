"use client";

import React from "react";
import { FiUser } from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "jan",
    Returning: 275,
    New: 41,
  },
  {
    name: "Feb",
    Returning: 620,
    New: 96,
  },
  {
    name: "Mar",
    Returning: 202,
    New: 100,
  },
  {
    name: "April",
    Returning: 720,
    New: 69,
  },
  {
    name: "May",
    Returning: 650,
    New: 55,
  },
  {
    name: "Jun",
    Returning: 800,
    New: 105,
  },
];

function ActivityGraph() {
  return (
    <div className="col-span-8 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiUser /> Activity
        </h3>
      </div>
      {/* Our Graph */}
      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, right: 0, left: -24, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              padding={{ right: 4 }}
              axisLine={false}
              tickLine={false}
              className="text-xs font-bold"
            />
            <YAxis
              className="text-xs font-bold"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              wrapperClassName="text-sm rounded"
              labelClassName="text-xs text-stone-500"
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="New"
              stroke="#18181b"
              fill="#18181b"
            />
            <Line
              type="monotone"
              dataKey="Returning"
              stroke="#5b21b6"
              fill="#5b21b6"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ActivityGraph;
