import React from 'react';
import { useSearchParams } from 'react-router-dom';
import LearningCard from '../components/LearningCard';

const LearnPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'letters';

  const content = type === 'letters' 
    ? Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    : Array.from({ length: 10 }, (_, i) => i.toString());

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-6 pb-20">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-8">
        {type === 'letters' ? 'Learn Letters' : 'Learn Numbers'}
      </h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {content.map((item) => (
          <LearningCard
            key={item}
            content={item}
            type={type === 'letters' ? 'letter' : 'number'}
            onClick={() => console.log(`Clicked ${item}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default LearnPage;