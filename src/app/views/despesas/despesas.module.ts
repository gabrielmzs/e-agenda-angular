import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesasRoutingModule } from './despesas-routing.module';
import { ListarDespesasComponent } from './listar-despesas/listar-despesas.component';
import { InserirDespesaComponent } from './inserir-despesa/inserir-despesa.component';
import { EditarDespesaComponent } from './editar-despesa/editar-despesa.component';
import { ExcluirDespesaComponent } from './excluir-despesa/excluir-despesa.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CategoriasModule } from '../categorias/categorias.module';
import { DespesaService } from './service/despesas.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarDespesasComponent,
    InserirDespesaComponent,
    EditarDespesaComponent,
    ExcluirDespesaComponent

  ],
  imports: [
    CommonModule,
    DespesasRoutingModule,
    NgSelectModule,
    CategoriasModule,
    ReactiveFormsModule,

  ],
  providers: [DespesaService],
})
export class DespesasModule { }
