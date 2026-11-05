import type { GeradorAleatorio } from "../contratos/gerador-aleatorio";

export class GeradorCongruencial implements GeradorAleatorio {
  private estado: number;

  constructor(semente: number) {
    if (!Number.isInteger(semente) || semente < 1 || semente > 2147483646) {
      throw new Error("Semente inválida: use um inteiro de 1 a 2147483646.");
    }
    this.estado = semente;
  }

  proximoInteiro(limite: number): number {
    if (!Number.isInteger(limite) || limite <= 0) {
      throw new Error("Limite inválido: use um inteiro maior que zero.");
    }
    this.estado = (this.estado * 16807) % 2147483647;
    return this.estado % limite;
  }
}