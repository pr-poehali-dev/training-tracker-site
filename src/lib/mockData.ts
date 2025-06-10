import { Training, AthleteStats, Trainer } from "@/types";

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

export const mockTrainers: Trainer[] = [
  {
    id: "trainer1",
    name: "Анна Петрова",
    specialty: "Кардио и функциональный тренинг",
    experience: 8,
    rating: 4.9,
    photo:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=300&fit=crop&crop=face",
    description:
      "Сертифицированный тренер по кардио-тренировкам и функциональному фитнесу",
    achievements: ["Мастер спорта по легкой атлетике", "Сертификат ACSM"],
  },
  {
    id: "trainer2",
    name: "Михаил Иванов",
    specialty: "Силовой тренинг и пауэрлифтинг",
    experience: 12,
    rating: 4.8,
    photo:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face",
    description:
      "Эксперт в области силовых тренировок и работы с профессиональными спортсменами",
    achievements: ["КМС по пауэрлифтингу", "Тренер высшей категории"],
  },
  {
    id: "trainer3",
    name: "Елена Смирнова",
    specialty: "Йога и растяжка",
    experience: 6,
    rating: 4.9,
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    description: "Инструктор йоги и специалист по восстановительным практикам",
    achievements: ["Сертификат RYT-500", "Специалист по йога-терапии"],
  },
];
