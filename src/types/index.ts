export interface User {
  id: string;
  name: string;
  age: number;
  avatar: string;
  progress: {
    numbers: string[];
    letters: string[];
  };
  points: number;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  avatar: string;
  points: number;
  rank: number;
}