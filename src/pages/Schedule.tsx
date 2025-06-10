import { useState } from "react";
import { mockTrainings } from "@/lib/mockData";
import Header from "@/components/Header";
import TrainingCard from "@/components/TrainingCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Schedule = () => {
  const [trainings] = useState(mockTrainings);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  const filteredTrainings = trainings.filter((training) => {
    const matchesSearch =
      training.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      training.trainerName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "all" || training.type === typeFilter;
    const matchesDate =
      dateFilter === "all" ||
      (dateFilter === "today" &&
        training.date === new Date().toISOString().split("T")[0]) ||
      (dateFilter === "tomorrow" &&
        training.date ===
          new Date(Date.now() + 86400000).toISOString().split("T")[0]);

    return matchesSearch && matchesType && matchesDate;
  });

  const handleJoinTraining = (trainingId: string) => {
    console.log("Joining training:", trainingId);
    // Здесь будет логика записи на тренировку
  };

  const handleLeaveTraining = (trainingId: string) => {
    console.log("Leaving training:", trainingId);
    // Здесь будет логика отмены записи
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Расписание тренировок 📅
          </h1>
          <p className="text-gray-600">
            Выберите тренировки и записывайтесь на занятия
          </p>
        </div>

        {/* Фильтры */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Поиск</label>
              <div className="relative">
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                />
                <Input
                  placeholder="Название или тренер..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Тип тренировки
              </label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все типы</SelectItem>
                  <SelectItem value="cardio">Кардио</SelectItem>
                  <SelectItem value="strength">Силовая</SelectItem>
                  <SelectItem value="flexibility">Растяжка</SelectItem>
                  <SelectItem value="sports">Спорт</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Дата</label>
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все дни</SelectItem>
                  <SelectItem value="today">Сегодня</SelectItem>
                  <SelectItem value="tomorrow">Завтра</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setTypeFilter("all");
                  setDateFilter("all");
                }}
                className="w-full"
              >
                <Icon name="RotateCcw" className="h-4 w-4 mr-2" />
                Сбросить
              </Button>
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Всего тренировок</p>
                <p className="text-2xl font-bold text-gray-900">
                  {trainings.length}
                </p>
              </div>
              <Icon name="Calendar" className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Доступно мест</p>
                <p className="text-2xl font-bold text-green-600">
                  {trainings.reduce(
                    (sum, t) =>
                      sum + (t.maxParticipants - t.currentParticipants.length),
                    0,
                  )}
                </p>
              </div>
              <Icon name="Users" className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Активных тренеров</p>
                <p className="text-2xl font-bold text-purple-600">
                  {new Set(trainings.map((t) => t.trainerId)).size}
                </p>
              </div>
              <Icon name="UserCheck" className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Список тренировок */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Доступные тренировки ({filteredTrainings.length})
            </h2>
          </div>

          {filteredTrainings.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg">
              <Icon
                name="Calendar"
                className="h-12 w-12 text-gray-400 mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Тренировки не найдены
              </h3>
              <p className="text-gray-600">
                Попробуйте изменить фильтры поиска
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredTrainings.map((training) => (
                <TrainingCard
                  key={training.id}
                  training={training}
                  onJoin={handleJoinTraining}
                  onLeave={handleLeaveTraining}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Schedule;
