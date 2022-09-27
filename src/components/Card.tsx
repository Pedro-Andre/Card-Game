import React from "react"
// import { useEffect, useRef } from "react";
import CenterCardElement from "./CenterCardElement"
import SymbolBorderCondition from "./SymbolBorderConditions"
import randomValueFromArray from "../hooks/RandomValueFromArray";

interface CardProps {
  number: number,
  color: string,
  symbol: string,
  name: string,
  id?: number,
}

type NewArrayProps = {
  numberArray?: object;
  scoreArray: number[] | number;
  randomValueArray: any | number;
  cardsNumber: any;
}

export function Card({ number, color, symbol, name }: CardProps & NewArrayProps) {
  return (
    <div className="card">
      <div className={`card-content ${name}`}>
        <div className={`card-border-top ${color}`}>

          {/* div que engloba o simbolo e o número do card */}
          <div className="card-top-symbol ">
            <p>{number}</p>
            <span className="top-symbol">{symbol}</span>
          </div>

        </div>

        {/* conteúdo no centro do card */}
        <div className={`card-center-content grid-${number} ${color}`}>
          <CenterCardElement number={number} symbol={symbol} name={name} />
        </div>

        {/* conteúdo do bottom/direita do card */}
        <div className={`card-border-bottom ${color}`}>

          <div className="card-bottom-symbol ">
            <span className="bottom-symbol">{symbol}</span>
            <p>{number}</p>
          </div>

        </div>

      </div >
    </div >
  );
}