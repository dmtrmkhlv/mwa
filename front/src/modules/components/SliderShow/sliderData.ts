import happy_brthd from "../images/happy_brthd.jpg";
import annyversary from "../images/annyversary.jpg";
import valentines from "../images/valentines.jpg";
import christmas from "../images/christmas.jpg";
import wedding from "../images/wedding.jpg";
import graduate from "../images/graduate.jpg";

function createData(key: number, images: string, name: string) {
  return { key, images, name };
}

export const rows = [
  createData(1, happy_brthd, "С Днем рожденья!"),
  createData(2, annyversary, "С Юбилеем!"),
  createData(3, valentines, "С Днем Св. Валентина!"),
  createData(4, christmas, "С Рождеством!"),
  createData(5, wedding, "На Cвадьбу"),
  createData(6, graduate, "На Выпускной"),
];
