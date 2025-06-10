import { AthleteStats as StatsType } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface AthleteStatsProps {
  stats: StatsType;
}

const AthleteStats = ({ stats }: AthleteStatsProps) => {
  const statCards = [
    {
      title: "Всего тренировок",
      value: stats.totalTrainings,
      icon: "Activity",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "За эту неделю",
      value: stats.thisWeekTrainings,
      icon: "Calendar",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "За месяц",
      value: stats.thisMonthTrainings,
      icon: "BarChart3",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Дней подряд",
      value: stats.streakDays,
      icon: "Flame",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards.map((stat, index) => (
        <Card key={index} className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <Icon
                name={stat.icon as any}
                className={`h-4 w-4 ${stat.color}`}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            {stat.title === "Дней подряд" && (
              <p className="text-xs text-gray-600 mt-1">
                Отличная мотивация! 🔥
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AthleteStats;
