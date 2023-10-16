import { NgModule, inject } from "@angular/core";
import { Routes, RouterModule, ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { ListarCategoriasComponent } from "./listar-categorias/listar-categorias.component";
import { EditarCategoriasComponent } from "./editar-categorias/editar-categorias.component";
import { ExcluirCategoriasComponent } from "./excluir-categorias/excluir-categorias.component";
import { InserirCategoriasComponent } from "./inserir-categorias/inserir-categorias.component";
import { ListarCategoriaViewModel } from "./models/listar-categoria.view-model";
import { CategoriaService } from "./services/categoria.service";

const formsCategoriaResolver: ResolveFn<ListarCategoriaViewModel> = (
    route: ActivatedRouteSnapshot
) => {
    return inject(CategoriaService).selecionarPorId(route.paramMap.get('id')!);
};

const visualizarCategoriaResolver: ResolveFn<
    ListarCategoriaViewModel
> = (route: ActivatedRouteSnapshot) => {
    return inject(CategoriaService).selecionarCategoriaCompletaPorId(
        route.paramMap.get('id')!
    );
};

const routes: Routes = [
    {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
    },

    {
        path: 'listar',
        component: ListarCategoriasComponent,
        //   resolve: { contatos: listarContatosResolver },
    },
    {
        path: 'inserir',
        component: InserirCategoriasComponent,
    },
    {
        path: 'editar/:id',
        component: EditarCategoriasComponent,
        resolve: { categoria: formsCategoriaResolver },
    },
    {
        path: 'excluir/:id',
        component: ExcluirCategoriasComponent,
        resolve: { categoria: visualizarCategoriaResolver },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoriasRoutingModule { }