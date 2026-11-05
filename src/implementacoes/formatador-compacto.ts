import type { Carta } from "../modelos/carta";
import type { FormatadorDeCarta } from "../contratos/formatador-de-carta";

export class FormatadorCompacto implements FormatadorDeCarta {
  formatar(carta: Carta): string {
    return this.rotulo(carta.valor) + this.simbolo(carta.naipe);
  }

  private rotulo(valor: number): string {
    if (valor === 1) return "A";
    if (valor === 11) return "J";
    if (valor === 12) return "Q";
    if (valor === 13) return "K";
    return String(valor);
  }

  private simbolo(naipe: string): string {
    if (naipe === "Copas") return "♥";
    if (naipe === "Espadas") return "♠";
    if (naipe === "Ouros") return "♦";
    return "♣";
  }
}