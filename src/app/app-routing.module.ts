import { NgModule, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterModule,
  Routes,
} from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { InserirContatoComponent } from './views/contatos/inserir-contato/inserir-contato.component';
import { ListarContatosComponent } from './views/contatos/listar-contatos/listar-contatos.component';
import { EditarContatoComponent } from './views/contatos/editar-contato/editar-contato.component';
import { ExcluirContatoComponent } from './views/contatos/excluir-contato/excluir-contato.component';
import { FormsContatoViewModel } from './views/contatos/models/forms-contato.view-model';
import { ContatosService } from './views/contatos/services/contatos.service';
import { VisualizarContatoViewModel } from './views/contatos/models/visualizar-contato.view-model';
import { ListarContatoViewModel } from './views/contatos/models/listar-contato.view-model';
import { InserirCompromissoComponent } from './views/compromissos/inserir-compromisso/inserir-compromisso.component';
import { ListarCompromissosComponent } from './views/compromissos/listar-compromissos/listar-compromissos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'contatos',
    loadChildren: () =>
      import('./views/contatos/contatos.module').then((m) => m.ContatosModule),
  },

  {
    path: 'compromissos',
    loadChildren: () =>
      import('./views/compromissos/compromissos.module').then(
        (m) => m.CompromissosModule
      ),
  },
  {
    path: 'categorias',
    loadChildren: () =>
      import('./views/categorias/categorias.module').then(
        (m) => m.CategoriasModule
      ),
  },
  {
    path: 'despesas',
    loadChildren: () =>
      import('./views/despesas/despesas.module').then(
        (m) => m.DespesasModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
