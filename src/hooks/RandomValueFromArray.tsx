interface dadosAleatorios {
  myArray: number;
  length: number;
  [index: number]: number;
  numbers: number
}

const useValorAleatorioDoArray = () => {
  let alreadyDone: Array<number> = [] //array pra receber os valores aleatorios

  const valorAleatorioArray = (myArray: dadosAleatorios) => {
    if (alreadyDone.length === 0) {
      for (let i = 0; i < myArray.length; i++) alreadyDone.push(i)
    }
    let valorAleatorio = Math.floor(Math.random() * alreadyDone.length)

    let indexDoValorNoArray = alreadyDone[valorAleatorio]

    alreadyDone.splice(valorAleatorio, 1)

    return myArray[indexDoValorNoArray];
  };
  return {
    valorAleatorioArray
  };
};

export default useValorAleatorioDoArray