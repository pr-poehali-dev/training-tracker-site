import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";

const Index = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const features = [
    {
      icon: "Calendar",
      title: "Удобное расписание",
      description:
        "Просматривайте и записывайтесь на тренировки в несколько кликов",
    },
    {
      icon: "BarChart3",
      title: "Отслеживание прогресса",
      description: "Следите за своими достижениями и статистикой посещений",
    },
    {
      icon: "Users",
      title: "Работа с тренерами",
      description: "Взаимодействуйте с профессиональными тренерами",
    },
    {
      icon: "Trophy",
      title: "Достижения",
      description: "Получайте награды за регулярные тренировки",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-8">
            <Icon
              name="Dumbbell"
              className="h-16 w-16 text-blue-600 animate-scale-in"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 animate-fade-in">
              FitClub Pro
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Современная система управления тренировками для спортивных клубов
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="px-8 py-4 text-lg animate-scale-in"
            >
              <Icon name="UserPlus" className="h-5 w-5 mr-2" />
              Начать тренировки
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/schedule")}
              className="px-8 py-4 text-lg animate-scale-in"
            >
              <Icon name="Calendar" className="h-5 w-5 mr-2" />
              Посмотреть расписание
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Активных спортсменов</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Профессиональных тренеров</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-green-600 mb-2">
                1000+
              </div>
              <div className="text-gray-600">Тренировок в месяц</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Возможности платформы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Все инструменты для эффективного управления тренировочным
              процессом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={feature.icon as any}
                      className="h-8 w-8 text-blue-600"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы начать тренировки?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Присоединяйтесь к нашему сообществу и достигайте новых высот!
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/auth")}
            className="px-8 py-4 text-lg"
          >
            <Icon name="Rocket" className="h-5 w-5 mr-2" />
            Создать аккаунт
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Icon name="Dumbbell" className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">FitClub Pro</span>
          </div>
          <p className="text-gray-400 mb-4">
            Система управления тренировками нового поколения
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              О нас
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Контакты
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Поддержка
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
