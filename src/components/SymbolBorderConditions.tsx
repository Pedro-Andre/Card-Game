import React from "react";

interface SymbolProps {
  number: number
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

const SymbolBorderCondition = ({ number }: SymbolProps) => {
  return (
    <p>
      {number === 11 ? "J" : number === 12 ? "Q" : number === 13 ? "K" : number}
    </p>
  );
};

export default SymbolBorderCondition;