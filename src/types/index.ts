export interface User {
  id: string;
  name: string;
  email: string;
  role: "athlete" | "trainer";
  avatar?: string;
}

export interface Training {
  id: string;
  title: string;
  description: string;
  trainerId: string;
  trainerName: string;
  date: string;
  time: string;
  duration: number;
  maxParticipants: number;
  currentParticipants: string[];
  type: "cardio" | "strength" | "flexibility" | "sports";
}

export interface Attendance {
  id: string;
  trainingId: string;
  athleteId: string;
  date: string;
  attended: boolean;
}

export interface AthleteStats {
  totalTrainings: number;
  thisWeekTrainings: number;
  thisMonthTrainings: number;
  favoriteType: string;
  streakDays: number;
}
