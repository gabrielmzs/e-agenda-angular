import { Component } from '@angular/core';
import { CompromissosService } from '../../compromissos/services/compromissos.service';
import { ListarDespesaViewModel } from '../models/listar-despesa.view-model';
import { DespesaService } from '../service/despesas.service';

@Component({
  selector: 'app-listar-despesas',
  templateUrl: './listar-despesas.component.html',
  styleUrls: ['./listar-despesas.component.css']
})
export class ListarDespesasComponent {
  despesas: ListarDespesaViewModel[] = [];

  constructor(private despesaService: DespesaService) { }

  ngOnInit(): void {
    this.despesaService
      .selecionarTodos()
      .subscribe((despesas) => {
        this.despesas = despesas;
        console.log(this.despesas)
      });
  }
}
