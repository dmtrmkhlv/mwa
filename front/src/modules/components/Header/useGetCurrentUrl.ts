import { useLocation } from "react-router-dom";

export const useGetCurrentUrl = () => {
  const location = useLocation();

  let headerName = "";
  switch (location.pathname) {
    case "/":
      headerName = "Главная";
      break;
    case "/login":
      headerName = "Авторизация";
      break;
    case "/signup":
      headerName = "Регистрация";
      break;
    case "/aboutus":
      headerName = "О нас";
      break;
    case "/howitworks":
      headerName = "Как это работает?";
      break;
    case "/services":
      headerName = "Услуги";
      break;
    case "/gifts":
      headerName = "Подарки";
      break;
    case "/event":
      headerName = "Мой список событий";
      break;
    case "/archive":
      headerName = "Архив событий";
      break;
    case "/booking":
      headerName = "Я участник";
      break;
    case "/create":
      headerName = "Создание";
      break;
    case "/more":
      headerName = "Подробнее";
      break;
    case "/brthd":
      headerName = "Ко дню рождения";
      break;
    case "/annyversary":
      headerName = "Годовщина";
      break;
    case "/valentines":
      headerName = "Ко дню святого валентина";
      break;
    case "/christmas":
      headerName = "На рождество";
      break;
    case "/privacy":
      headerName = "Политика конфиденциальности";
      break;
    case "/profile":
      headerName = "Мой профиль";
      break;
    default:
      headerName = "Такой страницы не существует";
      break;
  }

  return { headerName };
};
