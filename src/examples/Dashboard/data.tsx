import Cotton1 from "../../images/Cotton1.svg"
import Cotton2 from "../../images/Cotton2.svg"
import Cotton3 from "../../images/Cotton3.svg"

export const CardData : ICardData[] = [
  {
    imageSrc : Cotton1,
    description : "Dew Cotton Dobby Coord Set",
    brand : "Inaara",
    isnew : "New",
  },
  {
    imageSrc : Cotton2,
    description : "Dew Cotton Dobby Coord Set",
    brand : "Inaara",
    isnew : "New",
  },
  {
    imageSrc : Cotton3,
    description : "Dew Cotton Dobby Coord Set",
    brand : "Inaara",
    isnew : "New",
  }
]


interface ICardData {
  imageSrc: string;
  description: string;
  brand: string;
  isnew: string;
}