import React from "react"
import FigureCardCenter from "./FigureCardCenter";

type CardElemsProps = {
  number: number;
  symbol: string;
  name: string;
}

const CenterCardElement = ({ number, symbol, name }: CardElemsProps) => {
  return (
    <>
      {[...Array(Number(number))].map((_symb, index) => {
        index += 1;
        return (
          <span className="centerCard" key={index}>
            <span className="center-symbol-sigle">
              {number >= 0 && number <= 10 ? symbol : ""}
            </span>
          </span>
        );
      })}
      {number === 11 || number === 12 || number === 13 ? (
        <FigureCardCenter number={number} name={name} />
      ) : (
        ""
      )}
    </>
  );
};

export default CenterCardElement;