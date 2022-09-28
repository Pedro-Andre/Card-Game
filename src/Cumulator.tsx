import React from "react"
import { useEffect, useState } from "react";

interface CumulatorProps {
  scoreArray: number[];
}

const Cumulator = ({ scoreArray }: CumulatorProps) => {
  const [scoreFinal, setScoreFinal] = useState(0);

  useEffect(() => {
    const cumulScore = scoreArray.reduce((accum, item) => accum + item, 0);
    setScoreFinal(cumulScore);
    console.log("cumul", cumulScore);
  }, [setScoreFinal, scoreArray]);

  return (
    <span style={{
      color: "#ccc",
      fontSize: 22,
      textAlign: "center",
      display: "block",
      paddingBottom: "1rem"
    }}>
      Score: {scoreFinal} Pts
    </span>
  );
};

export default Cumulator;