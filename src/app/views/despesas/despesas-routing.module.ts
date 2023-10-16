
import { NgModule, inject } from "@angular/core";
import { Routes, RouterModule, ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { ListarDespesasComponent } from "./listar-despesas/listar-despesas.component";
import { InserirDespesaComponent } from "./inserir-despesa/inserir-despesa.component";
import { EditarDespesaComponent } from "./editar-despesa/editar-despesa.component";
import { ExcluirDespesaComponent } from "./excluir-despesa/excluir-despesa.component";
import { ListarDespesaViewModel } from "./models/listar-despesa.view-model";
import { DespesaService } from "./service/despesas.service";

const visualizarDespesaResolver: ResolveFn<
  ListarDespesaViewModel
> = (route: ActivatedRouteSnapshot) => {
  return inject(DespesaService).selecionarDespesaCompletaPorId(route.paramMap.get('id')!);
};

const formsDespesaResolver: ResolveFn<ListarDespesaViewModel> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(DespesaService).selecionarPorId(route.paramMap.get('id')!);
};
const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },

  {
    path: 'listar',
    component: ListarDespesasComponent,
    //   resolve: { contatos: listarContatosResolver },
  },
  {
    path: 'inserir',
    component: InserirDespesaComponent,
  },
  {
    path: 'editar/:id',
    component: EditarDespesaComponent,
    resolve: { despesa: formsDespesaResolver },
  },
  {
    path: 'excluir/:id',
    component: ExcluirDespesaComponent,
    resolve: { despesa: visualizarDespesaResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespesasRoutingModule { }