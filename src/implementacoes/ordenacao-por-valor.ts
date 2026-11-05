import type { Carta } from "../modelos/carta";
import type { EstrategiaDeOrdenacao } from "../contratos/estrategia-de-ordenacao";

export class OrdenacaoPorValor implements EstrategiaDeOrdenacao {

  ordenar(cartas: Carta[]): Carta[] {
    let copia = [...cartas];

    for (let i = 0; i < copia.length - 1; i++) {
      let menor = i;

      for (let j = i + 1; j < copia.length; j++) {
        if (copia[j].comparar(copia[menor]) < 0) {
          menor = j;
        }
      }

      let temporaria = copia[i];
      copia[i] = copia[menor];
      copia[menor] = temporaria;
    }

    return copia;
  }
}
