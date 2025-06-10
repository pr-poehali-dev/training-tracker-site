import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return user?.role === "trainer" ? "Кабинет тренера" : "Мой кабинет";
      case "/schedule":
        return "Расписание тренировок";
      default:
        return "FitClub Pro";
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div
              className="flex items-center space-x-2 cursor-pointer hover-scale"
              onClick={() => navigate("/")}
            >
              <Icon name="Dumbbell" className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                FitClub Pro
              </span>
            </div>
            <div className="hidden md:block">
              <span className="text-lg text-gray-600">{getPageTitle()}</span>
            </div>
          </div>

          {user && (
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-4">
                <Button
                  variant="ghost"
                  onClick={() => navigate("/dashboard")}
                  className={
                    location.pathname === "/dashboard"
                      ? "bg-blue-50 text-blue-600"
                      : ""
                  }
                >
                  <Icon name="User" className="h-4 w-4 mr-2" />
                  Кабинет
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => navigate("/schedule")}
                  className={
                    location.pathname === "/schedule"
                      ? "bg-blue-50 text-blue-600"
                      : ""
                  }
                >
                  <Icon name="Calendar" className="h-4 w-4 mr-2" />
                  Расписание
                </Button>
              </nav>

              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {user.role === "trainer" ? "Тренер" : "Спортсмен"}
                  </p>
                </div>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <Icon name="LogOut" className="h-4 w-4 mr-2" />
                  Выйти
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
