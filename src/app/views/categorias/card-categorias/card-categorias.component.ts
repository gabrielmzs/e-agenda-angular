import { Component, Input } from '@angular/core';
import { ListarCategoriaViewModel } from '../models/listar-categoria.view-model';

@Component({
  selector: 'app-card-categorias',
  templateUrl: './card-categorias.component.html',
  styleUrls: ['./card-categorias.component.css']
})
export class CardCategoriasComponent {
  @Input({ required: true }) categoria!: ListarCategoriaViewModel;
}
