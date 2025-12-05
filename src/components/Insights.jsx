import React from 'react';
import { BarChart } from 'lucide-react';

const Insights = ({ insights = []}) => {
  if (!insights.length) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <BarChart className="w-6 h-6 mr-2 text-blue-600" />
        Insights
      </h3>

      {/* Insights List */}
      <div className="space-y-3">
        {insights.map(([key, value], index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-500"
          >
            <span className="font-semibold text-gray-800">{key}:</span>{' '}
            <span className="text-gray-700">{value}</span>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Insights;
