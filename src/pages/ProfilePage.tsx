import React from 'react';
import { Star, Award } from 'lucide-react';
import { mockUser } from '../data/mockData';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-6 pb-20">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col items-center">
            <img
              src={mockUser.avatar}
              alt={mockUser.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">{mockUser.name}</h2>
            <p className="text-gray-600">{mockUser.age} years old</p>
            <div className="flex items-center mt-2">
              <Star className="w-5 h-5 text-yellow-500 mr-1" />
              <span className="font-semibold">{mockUser.points} points</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Progress</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-gray-600 mb-2">Letters Learned</h4>
              <div className="flex flex-wrap gap-2">
                {mockUser.progress.letters.map((letter) => (
                  <div
                    key={letter}
                    className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-blue-600 font-semibold">{letter}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-gray-600 mb-2">Numbers Learned</h4>
              <div className="flex flex-wrap gap-2">
                {mockUser.progress.numbers.map((number) => (
                  <div
                    key={number}
                    className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-purple-600 font-semibold">{number}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-gray-600 mb-2">Achievements</h4>
              <div className="flex gap-2">
                <Award className="w-6 h-6 text-yellow-500" />
                <Award className="w-6 h-6 text-gray-300" />
                <Award className="w-6 h-6 text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;