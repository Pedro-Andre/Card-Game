import React from "react"
import Card from "./Card";
import { numbers, colors, symbols } from '../data'
import useRandomValueFromArray from "../hooks/RandomValueFromArray";
import { Fragment, useState, useEffect } from "react"

interface WrpprProps {
  cardsNumber: number;
}

export const CardsWrapper = ({ cardsNumber }: WrpprProps) => {
  const cardNumbers = cardsNumber;
  const { randomValueFromArray } = useRandomValueFromArray();
  const [scoreArray] = useState([]);

  useEffect(() => {
    console.log("numberArray", scoreArray);
  }, [scoreArray]);

  return (
    <>
      <div className="card-wrapper">
        {[...Array(Number(cardNumbers))].map((_numb, index) => {
          index += 1;
          const randomSymbols =
            symbols[Math.floor(Math.random() * symbols.length)];
          const randomValueArray = randomValueFromArray(numbers);

          return (
            <Fragment key={index}>
              <Card
                number={randomValueFromArray(numbers).number}
                cardsNumber={cardsNumber}
                scoreArray={scoreArray}
                randomValueArray={randomValueArray}
                name={randomSymbols.name}
                numberArray={randomValueArray}
                color={
                  randomSymbols.name === "spade" ||
                    randomSymbols.name === "club"
                    ? `${colors[1].color}`
                    : `${colors[0].color}`
                }
                symbol={randomSymbols.symbol}
              />
            </Fragment>
          );
        })}
      </div>
    </>
  );
};
