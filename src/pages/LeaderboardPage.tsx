import React from 'react';
import { Trophy } from 'lucide-react';
import { mockLeaderboard } from '../data/mockData';

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-6 pb-20">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Trophy className="w-8 h-8 text-yellow-500 mr-2" />
          <h1 className="text-2xl font-bold text-blue-600">Leaderboard</h1>
        </div>

        <div className="space-y-4">
          {mockLeaderboard.map((entry) => (
            <div
              key={entry.id}
              className="bg-white rounded-lg p-4 shadow-md flex items-center space-x-4"
            >
              <div className="flex-shrink-0 w-12 h-12">
                <img
                  src={entry.avatar}
                  alt={entry.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800">{entry.name}</h3>
                <p className="text-sm text-gray-500">{entry.points} points</p>
              </div>
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-semibold">#{entry.rank}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;