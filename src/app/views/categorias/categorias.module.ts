import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { InserirCategoriasComponent } from './inserir-categorias/inserir-categorias.component';
import { EditarCategoriasComponent } from './editar-categorias/editar-categorias.component';
import { ExcluirCategoriasComponent } from './excluir-categorias/excluir-categorias.component';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { CardCategoriasComponent } from './card-categorias/card-categorias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriaService } from './services/categoria.service';



@NgModule({
  declarations: [
    ListarCategoriasComponent,
    InserirCategoriasComponent,
    EditarCategoriasComponent,
    ExcluirCategoriasComponent,
    CardCategoriasComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, CategoriasRoutingModule],
  providers: [CategoriaService],
})
export class CategoriasModule { }
