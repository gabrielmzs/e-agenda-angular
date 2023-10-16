import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { InserirTarefaComponent } from './inserir-tarefa/inserir-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { ExcluirTarefaComponent } from './excluir-tarefa/excluir-tarefa.component';



@NgModule({
  declarations: [
    ListarTarefasComponent,
    InserirTarefaComponent,
    EditarTarefaComponent,
    ExcluirTarefaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TarefasModule { }
