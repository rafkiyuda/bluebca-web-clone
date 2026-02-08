"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { day: '1-7', amount: 0 },
    { day: '8-14', amount: 0 },
    { day: '15-21', amount: 0 },
    { day: '22-28', amount: 0 },
];

export function TrackerChart() {
    return (
        <div className="h-48 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: '#9CA3AF' }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: '#9CA3AF' }}
                        tickFormatter={(value) => `${value}`}
                        domain={[0, 1000]}
                    />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="#00C0D4"
                        strokeWidth={2}
                        dot={{ r: 4, fill: '#00C0D4', strokeWidth: 0 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
