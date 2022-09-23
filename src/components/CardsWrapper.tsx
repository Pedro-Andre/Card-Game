import { Card } from "./Card";
import { colors, numbers, symbols } from '../data'
import useValorAleatorioDoArray from '../hooks/RandomValueFromArray'

interface WrpprProps {
  cardsNumber: number;
}

export const CardsWrapper = ({ cardsNumber }: WrpprProps) => {
  const cardNumbers = cardsNumber
  const { valorAleatorioArray } = useValorAleatorioDoArray()

  return (
    <div className="card-wrapper">
      {[...Array(Number(cardsNumber))].map((_numb, index) => {
        index += 1;

        // percorre o array de simbolos e retorna de forma aleatória
        const randomSymbols =
          symbols[Math.floor(Math.random() * symbols.length)];

        return (
          <Card key={index}
            name={randomSymbols.name}
            /* ver isso daqui
            number={valorAleatorioArray(numbers).number}
            */

            // verifica qual elemento foi retornado pra definir a cor correspondente
            color={
              randomSymbols.name === "spade" || randomSymbols.name === "club"
                ? `${colors[1].color}`
                : `${colors[0].color}`
            }
            symbol={randomSymbols.symbol}
          />
        );
      })}
    </div>
  );
}