import { ListarCategoriaViewModel } from "../../categorias/models/listar-categoria.view-model";
import { TipoPagamentoEnum } from "./tipoPagamento.enum";


export type FormsDespesaViewModel = {

    id: string;
    descricao: string;
    data: Date;

    formaPagamento: TipoPagamentoEnum;

    valor: number;

    categorias: string[];
};