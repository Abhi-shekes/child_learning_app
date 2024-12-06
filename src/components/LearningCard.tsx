import React from 'react';
import { motion } from 'framer-motion';

interface LearningCardProps {
  content: string;
  type: 'number' | 'letter';
  onClick: () => void;
}

const LearningCard: React.FC<LearningCardProps> = ({ content, type, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-center h-24 w-24 mx-auto">
        <span className="text-4xl font-bold text-blue-500">{content}</span>
      </div>
      <p className="text-center mt-2 text-gray-600 text-sm">
        {type === 'number' ? 'Number' : 'Letter'}
      </p>
    </motion.div>
  );
};

export default LearningCard;