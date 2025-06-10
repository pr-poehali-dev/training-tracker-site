import { Training } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

interface TrainingCardProps {
  training: Training;
  onJoin?: (trainingId: string) => void;
  onLeave?: (trainingId: string) => void;
  showActions?: boolean;
}

const TrainingCard = ({
  training,
  onJoin,
  onLeave,
  showActions = true,
}: TrainingCardProps) => {
  const { user } = useAuth();
  const [isJoined, setIsJoined] = useState(
    user ? training.currentParticipants.includes(user.id) : false,
  );

  const getTypeIcon = (type: Training["type"]) => {
    switch (type) {
      case "cardio":
        return "Heart";
      case "strength":
        return "Dumbbell";
      case "flexibility":
        return "Users";
      case "sports":
        return "Trophy";
      default:
        return "Activity";
    }
  };

  const getTypeColor = (type: Training["type"]) => {
    switch (type) {
      case "cardio":
        return "bg-red-100 text-red-700";
      case "strength":
        return "bg-blue-100 text-blue-700";
      case "flexibility":
        return "bg-green-100 text-green-700";
      case "sports":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleJoinLeave = () => {
    if (isJoined) {
      onLeave?.(training.id);
      setIsJoined(false);
    } else {
      onJoin?.(training.id);
      setIsJoined(true);
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
    });
  };

  const isTrainer = user?.role === "trainer";
  const canJoin =
    training.currentParticipants.length < training.maxParticipants;

  return (
    <Card className="hover-scale">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Icon
                name={getTypeIcon(training.type)}
                className="h-5 w-5 text-blue-600"
              />
            </div>
            <div>
              <CardTitle className="text-lg">{training.title}</CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                {training.description}
              </p>
            </div>
          </div>
          <Badge className={getTypeColor(training.type)}>
            {training.type === "cardio" && "Кардио"}
            {training.type === "strength" && "Силовая"}
            {training.type === "flexibility" && "Растяжка"}
            {training.type === "sports" && "Спорт"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" className="h-4 w-4" />
                <span>{formatDate(training.date)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" className="h-4 w-4" />
                <span>{training.time}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Timer" className="h-4 w-4" />
                <span>{training.duration} мин</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Icon name="User" className="h-4 w-4" />
                <span>{training.trainerName}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Users" className="h-4 w-4" />
                <span>
                  {training.currentParticipants.length}/
                  {training.maxParticipants}
                </span>
              </div>
            </div>

            {showActions && !isTrainer && (
              <Button
                size="sm"
                variant={isJoined ? "outline" : "default"}
                onClick={handleJoinLeave}
                disabled={!canJoin && !isJoined}
                className="animate-fade-in"
              >
                {isJoined ? (
                  <>
                    <Icon name="UserMinus" className="h-4 w-4 mr-1" />
                    Отменить
                  </>
                ) : (
                  <>
                    <Icon name="UserPlus" className="h-4 w-4 mr-1" />
                    Записаться
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainingCard;
