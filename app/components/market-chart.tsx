'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import { marketData } from '../data/market-data';

export function MarketChart() {
  return (
    <div className="h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={marketData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis label={{ value: 'billion USD', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="AIRobotics" fill="#3B82F6" stackId="a" name="AI Robotics">
            <LabelList dataKey="value" position="top" offset={10} fill="#000000" />
          </Bar>
          <Bar dataKey="AutonomousSensor" fill="#1E3A8A" stackId="a" name="Autonomous & Sensor Technology">
            <LabelList dataKey="value" position="top" offset={10} fill="#000000" />
          </Bar>
          <Bar dataKey="ComputerVision" fill="#94A3B8" stackId="a" name="Computer Vision">
            <LabelList dataKey="value" position="top" offset={10} fill="#000000" />
          </Bar>
          <Bar dataKey="MachineLearning" fill="#EAB308" stackId="a" name="Machine Learning">
            <LabelList dataKey="value" position="top" offset={10} fill="#000000" />
          </Bar>
          <Bar dataKey="NLP" fill="#4ADE80" stackId="a" name="Natural Language Processing">
            <LabelList dataKey="value" position="top" offset={10} fill="#000000" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 