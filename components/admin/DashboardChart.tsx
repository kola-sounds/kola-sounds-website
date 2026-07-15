"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface DashboardChartProps {
  gallery: number;
  music: number;
  events: number;
  updates: number;
}

export default function DashboardChart({
  gallery,
  music,
  events,
  updates,
}: DashboardChartProps) {
  const data = [
    { name: "Gallery", total: gallery },
    { name: "Music", total: music },
    { name: "Events", total: events },
    { name: "Updates", total: updates },
  ];

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-yellow-400">
        Content Overview
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="total"
              radius={[8, 8, 0, 0]}
              fill="#facc15"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
