interface CardProps {
  number?: number,
  color?: string,
  symbol?: string,
  name?: string,
  id?: number,
}


export function Card(props: CardProps) {
  return (
    <div className="card">
      <div className={`card-content ${props.name}`}>
        <div className={`card-border-top ${props.color}`}>

          {/* div que engloba o simbolo e o número do card */}
          <div className="card-top-symbol ">
            <p>{props.number}</p>
            <span className="top-symbol">{props.symbol}</span>
          </div>

        </div>

        {/* conteúdo no centro do card */}
        <div className={`card-center-content grid-${props.number} ${props.color}`}>

          {/* percorrendo e retornando o array */}
          {[...Array(Number(props.number))].map((_symb, index) => {

            // incrementando o valor obtido do array
            index += 1;

            return (
              <span className="centerCard" key={index}>
                <span className="center-symbol">{props.symbol}</span>
              </span>
            );
          })}
        </div>

        {/* conteúdo do bottom/direita do card */}
        <div className={`card-border-bottom ${props.color}`}>

          <div className="card-bottom-symbol ">
            <span className="bottom-symbol">{props.symbol}</span>
            <p>{props.number}</p>
          </div>

        </div>

      </div >
    </div >
  );
}