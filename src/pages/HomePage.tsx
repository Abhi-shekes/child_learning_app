import React from 'react';
import { AlignJustify, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-6">
      <div className="max-w-md mx-auto pt-8 pb-20">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Let's Learn Together!
        </h1>
        
        <div className="grid grid-cols-1 gap-6">
          <Link to="/learn?type=letters">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <AlignJustify className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Learn Letters</h2>
                  <p className="text-gray-600">Master the ABC's</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/learn?type=numbers">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Calculator className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Learn Numbers</h2>
                  <p className="text-gray-600">Count with confidence</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;