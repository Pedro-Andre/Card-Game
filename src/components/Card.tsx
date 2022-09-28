import React from "react"
import { useEffect, useRef } from "react";
import CenterCardElement from "./CenterCardElement"
import SymbolBorderCondition from "./SymbolBorderConditions"
import { numbers } from "../data"


type NewCardProps = {
  id?: number;
  number: number;
}

interface CardProps {
  number: number,
  color: string,
  symbol: string,
  name: string,
  id?: number,
  score?: number;
  numberArray: NewCardProps;
  scoreArray: Array<object>;
  randomValueArray: any | number;
  cardsNumber: number;
}

const Card = ({
  numberArray,
  color,
  symbol,
  name,
  randomValueArray,
  scoreArray,
  cardsNumber,
}: CardProps) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted) {
      return;
    }
    isMounted.current = true;
    if (
      numberArray.id === randomValueArray.id &&
      scoreArray.length < Number(cardsNumber)
    ) {
      scoreArray.push(randomValueArray.score);
      isMounted.current = false;
    }
  }, [isMounted, scoreArray, numberArray, randomValueArray, cardsNumber]);
  return (
    <div className="card">
      <p
        style={{
          position: "absolute",
          width: "14rem",
          fontSize: "1.5rem",
          textAlign: "center",
          fontWeight: 600,
          zIndex: 9,
          marginTop: "-.8rem",
          color: "#bbb",
        }}
      >
        Card pts: {randomValueArray.score}
      </p>

      <div className={`card-content ${name}`}>
        <div className={`card-border-top ${color}`}>

          {/* div que engloba o simbolo e o número do card */}
          <div className="card-top-symbol ">
            <SymbolBorderCondition number={numberArray.number} />
            <span className="top-symbol">{symbol}</span>
          </div>

        </div>

        {/* conteúdo no centro do card */}
        <div className={`card-center-content grid-${numberArray.number} ${color}`}>
          <CenterCardElement
            number={numberArray.number}
            symbol={symbol}
            name={name}
          />
        </div>

        {/* conteúdo do bottom/direita do card */}
        <div className={`card-border-bottom ${color}`}>

          <div className="card-bottom-symbol ">
            <span className="bottom-symbol">{symbol}</span>
            <SymbolBorderCondition number={numberArray.number} />
          </div>
        </div>
      </div >
    </div >
  );
}
export default Card;