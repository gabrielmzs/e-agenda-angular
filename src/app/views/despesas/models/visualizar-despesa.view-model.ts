import { TipoPagamentoEnum } from "./tipoPagamento.enum";

export type ListarDespesaViewModel = {
    id: string;
    descricao: string;
    data: Date;
    valor: number;
    formaPagamento: TipoPagamentoEnum;
    categorias: string[];

};