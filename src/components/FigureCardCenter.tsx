import React from "react"
import JackOfClub from "./imagensCartas/JackOfClubs";
import JackOfDiamond from "./imagensCartas/JackOfDiamond";
import JackOfHeart from "./imagensCartas/JackOfHeart";
import JackOfSpade from "./imagensCartas/JackOfSpade";
import KingOfClub from "./imagensCartas/KingOfClub";
import KingOfDiamond from "./imagensCartas/KingOfDiamond";
import KingOfHeart from "./imagensCartas/KingOfHeart";
import KingOfSpade from "./imagensCartas/KingOfSpade";
import QueenOfClub from "./imagensCartas/QueenOfClub";
import QuennOfDiamond from "./imagensCartas/QueenOfDiamond";
import QueenOfHeart from "./imagensCartas/QueenOfHeart";
import QueenOfSpade from "./imagensCartas/QueenOfSpade";

interface FigureTypes {
  number?: number;
  name?: string
  type?: SVGElement;
}

declare function FigureContent(props: FigureTypes): JSX.Element;
function FigureComponent(prop: FigureTypes): JSX.Element {
  return <FigureContent />
}

const FigureCardCenter = ({ name, number }: FigureTypes) => {
  switch (number) {
    case 11:
      if (name === "spade") {
        return <JackOfSpade />;
      }
      if (name === "club") {
        return <JackOfClub />;
      }
      if (name === "heart") {
        return <JackOfHeart />;
      }
      if (name === "diamond") {
        return <JackOfDiamond />;
      }
      break;
    case 12:
      if (name === "spade") {
        return <QueenOfSpade />;
      }
      if (name === "club") {
        return <QueenOfClub />;
      }
      if (name === "heart") {
        return <QueenOfHeart />;
      }
      if (name === "diamond") {
        return <QuennOfDiamond />;
      }
      break;
    case 13:
      if (name === "spade") {
        return <KingOfSpade />;
      }
      if (name === "club") {
        return <KingOfClub />;
      }
      if (name === "heart") {
        return <KingOfHeart />;
      }
      if (name === "diamond") {
        return <KingOfDiamond />;
      }
      break;
    default:
      break;
  }
  return (
    <div className="figure-picture">
      <FigureComponent />
    </div>
  );
};

export default FigureCardCenter;