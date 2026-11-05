import type { FilaDeJogadores } from "../contratos/fila-de-jogadores";
import type { Jogador } from "../modelos/jogador";

export class FilaEmArray implements FilaDeJogadores {
  private itens: Jogador[] = [];
  private quantidade = 0;

  entrar(jogador: Jogador): void {
    this.itens[this.quantidade] = jogador;
    this.quantidade++;
  }

  proximo(): Jogador {
    if (this.quantidade === 0) {
      throw new Error("A fila está vazia.");
    }

    let primeiro = this.itens[0];

    for (let i = 0; i < this.quantidade - 1; i++) {
      this.itens[i] = this.itens[i + 1];
    }
    this.quantidade--;

    return primeiro;
  }

  estaVazia(): boolean {
    return this.quantidade === 0;
  }

  tamanho(): number {
    return this.quantidade;
  }
}