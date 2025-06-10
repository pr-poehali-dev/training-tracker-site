import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Trainer } from "@/types";

interface TrainerCardProps {
  trainer: Trainer;
}

const TrainerCard = ({ trainer }: TrainerCardProps) => {
  return (
    <Card className="hover-scale overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={trainer.photo}
            alt={trainer.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/90 text-gray-900">
              <Icon name="Star" className="h-3 w-3 mr-1 text-yellow-500" />
              {trainer.rating}
            </Badge>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {trainer.name}
          </h3>

          <div className="flex items-center text-blue-600 mb-3">
            <Icon name="Award" className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">{trainer.specialty}</span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {trainer.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500 text-sm">
              <Icon name="Clock" className="h-4 w-4 mr-1" />
              {trainer.experience} лет опыта
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  className={`h-4 w-4 ${
                    i < Math.floor(trainer.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t">
            <div className="flex flex-wrap gap-1">
              {trainer.achievements.slice(0, 2).map((achievement, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainerCard;
