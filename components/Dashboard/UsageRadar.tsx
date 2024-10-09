"use client"

import React from "react";
import { FiEye } from "react-icons/fi";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

function UsageRadar() {
  const data = [
    {
      subject: "Tracking",
      mobile: 15,
      desktop: 110,
      max: 150,
    },
    {
      subject: "Builder",
      mobile: 130,
      desktop: 90,
      max: 150,
    },
    {
      subject: "Schedule",
      mobile: 86,
      desktop: 130,
      max: 150,
    },
    {
      subject: "AI Train",
      mobile: 125,
      desktop: 130, 
      max: 150,
    },
    {
      subject: "Interval",
      mobile: 148,
      desktop: 90,
      max: 100,
    },
  ];

  return (
    <div className="col-span-4 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiEye /> Usage
        </h3>
      </div>
      {/* Our Graph */}
      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" className="text-xs font-bold" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="Mobile"
              dataKey="mobile"
              stroke="#18181b"
              fill="#18181b"
              fillOpacity={0.2}
            />
            <Radar
              name="Desktop"
              dataKey="desktop"
              stroke="#5b21b6"
              fill="#5b21b6"
              fillOpacity={0.2}
            />
            <Tooltip
              wrapperClassName="text-sm rounded"
              labelClassName="text-xs text-stone-500"
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default UsageRadar;
