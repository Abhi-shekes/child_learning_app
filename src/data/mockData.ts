import { User, LeaderboardEntry } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Tommy',
  age: 6,
  avatar: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=100&h=100&fit=crop',
  progress: {
    numbers: ['1', '2', '3'],
    letters: ['A', 'B', 'C'],
  },
  points: 150,
};

export const mockLeaderboard: LeaderboardEntry[] = [
  {
    id: '1',
    name: 'Sarah',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    points: 250,
    rank: 1,
  },
  {
    id: '2',
    name: 'Tommy',
    avatar: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=100&h=100&fit=crop',
    points: 150,
    rank: 2,
  },
  {
    id: '3',
    name: 'Mike',
    avatar: 'https://images.unsplash.com/photo-1570632267781-46f97c2a4f76?w=100&h=100&fit=crop',
    points: 120,
    rank: 3,
  },
];