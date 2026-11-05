import type { PilhaDeCartas } from "../contratos/pilha-de-cartas";
import type { Carta } from "../modelos/carta";

export class PilhaEmArray implements PilhaDeCartas {
  private cartas: Carta[] = [];

  empilhar(carta: Carta): void {
    this.cartas.push(carta);
  }

  desempilhar(): Carta {
    const carta = this.cartas.pop();
    if (carta === undefined) {
      throw new Error("Pilha vazia: não há carta para desempilhar.");
    }
    return carta;
  }

  topo(): Carta {
    if (this.cartas.length == 0) {
      throw new Error("Pilha vazia: não há carta no topo.");
    }
    return this.cartas[this.cartas.length - 1];
  }

  estaVazia(): boolean {
    return this.cartas.length == 0;
  }

  tamanho(): number {
    return this.cartas.length;
  }
}