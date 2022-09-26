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
import React, { DOMAttributes } from "react"

type FigureTypes = {
  name: string
  number: number;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

export interface FigureProps extends DOMAttributes<HTMLElement> {
  className?: string;
  type: SVGElement
}


const FigureCardCenter = ({ name, number }: FigureTypes) => {
  const FigureContent = () => {
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
  };

  return (
    <div className="figure-picture">
      {/* <FigureContent /> */}
    </div>
  );
};

export default FigureCardCenter;