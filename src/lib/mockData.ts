import { Training, AthleteStats } from "@/types";

export const mockTrainings: Training[] = [
  {
    id: "1",
    title: "Утренняя кардио-тренировка",
    description: "Интенсивная кардио-сессия для улучшения выносливости",
    trainerId: "trainer1",
    trainerName: "Анна Петрова",
    date: "2025-01-15",
    time: "08:00",
    duration: 60,
    maxParticipants: 15,
    currentParticipants: ["athlete1", "athlete2"],
    type: "cardio",
  },
  {
    id: "2",
    title: "Силовая тренировка",
    description: "Работа с весами и функциональные упражнения",
    trainerId: "trainer2",
    trainerName: "Михаил Иванов",
    date: "2025-01-15",
    time: "18:00",
    duration: 90,
    maxParticipants: 10,
    currentParticipants: ["athlete3"],
    type: "strength",
  },
  {
    id: "3",
    title: "Йога и растяжка",
    description: "Расслабляющая йога для гибкости и восстановления",
    trainerId: "trainer1",
    trainerName: "Анна Петрова",
    date: "2025-01-16",
    time: "19:00",
    duration: 75,
    maxParticipants: 20,
    currentParticipants: [],
    type: "flexibility",
  },
];

export const mockAthleteStats: AthleteStats = {
  totalTrainings: 47,
  thisWeekTrainings: 3,
  thisMonthTrainings: 12,
  favoriteType: "cardio",
  streakDays: 5,
};
