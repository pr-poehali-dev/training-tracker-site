import { useAuth } from "@/contexts/AuthContext";
import { mockTrainings, mockAthleteStats } from "@/lib/mockData";
import Header from "@/components/Header";
import TrainingCard from "@/components/TrainingCard";
import AthleteStats from "@/components/AthleteStats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Dashboard = () => {
  const { user } = useAuth();
  const [userTrainings] = useState(mockTrainings.slice(0, 2));

  const handleJoinTraining = (trainingId: string) => {
    console.log("Joining training:", trainingId);
    // Здесь будет логика записи на тренировку
  };

  const handleLeaveTraining = (trainingId: string) => {
    console.log("Leaving training:", trainingId);
    // Здесь будет логика отмены записи
  };

  if (!user) return null;

  const isTrainer = user.role === "trainer";

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Добро пожаловать, {user.name}! 👋
          </h1>
          <p className="text-gray-600">
            {isTrainer
              ? "Управляйте тренировками и следите за прогрессом спортсменов"
              : "Отслеживайте свой прогресс и записывайтесь на тренировки"}
          </p>
        </div>

        {isTrainer ? (
          // Кабинет тренера
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Активные тренировки
                  </CardTitle>
                  <Icon name="Calendar" className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-gray-600">на этой неделе</p>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Записавшихся
                  </CardTitle>
                  <Icon name="Users" className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">25</div>
                  <p className="text-xs text-gray-600">всего участников</p>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Посещаемость
                  </CardTitle>
                  <Icon name="TrendingUp" className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">87%</div>
                  <p className="text-xs text-gray-600">средняя за месяц</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Мои тренировки
              </h2>
              <Button>
                <Icon name="Plus" className="h-4 w-4 mr-2" />
                Создать тренировку
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockTrainings.map((training) => (
                <TrainingCard
                  key={training.id}
                  training={training}
                  showActions={false}
                />
              ))}
            </div>
          </div>
        ) : (
          // Кабинет спортсмена
          <div className="space-y-8">
            <AthleteStats stats={mockAthleteStats} />

            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Мои записи
              </h2>
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/schedule")}
              >
                <Icon name="Calendar" className="h-4 w-4 mr-2" />
                Посмотреть расписание
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {userTrainings.map((training) => (
                <TrainingCard
                  key={training.id}
                  training={training}
                  onJoin={handleJoinTraining}
                  onLeave={handleLeaveTraining}
                />
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Trophy" className="h-5 w-5 text-yellow-600" />
                  <span>Достижения</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <Icon
                      name="Flame"
                      className="h-8 w-8 text-yellow-600 mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">5 дней подряд</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Icon
                      name="Target"
                      className="h-8 w-8 text-blue-600 mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">47 тренировок</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Icon
                      name="Heart"
                      className="h-8 w-8 text-green-600 mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">Кардио-любитель</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Icon
                      name="Award"
                      className="h-8 w-8 text-purple-600 mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">Активный месяц</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
