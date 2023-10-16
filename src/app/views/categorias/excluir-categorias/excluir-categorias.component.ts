import { Component, OnInit } from '@angular/core';
import { ListarCategoriaViewModel } from '../models/listar-categoria.view-model';
import { CategoriaService } from '../services/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-excluir-categorias',
  templateUrl: './excluir-categorias.component.html',
  styleUrls: ['./excluir-categorias.component.css']
})
export class ExcluirCategoriasComponent implements OnInit {
  categoriaVM?: ListarCategoriaViewModel;

  constructor(
    private service: CategoriaService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categoriaVM = this.route.snapshot.data['categoria'];
  }

  gravar() {

    console.log(this.categoriaVM)
    this.service.excluir(this.categoriaVM!.id).subscribe(() => {
      this.toastrService.success(
        `A Categoria foi excluída com sucesso!`,
        'Sucesso'
      );

      this.router.navigate(['/categorias', 'listar']);
    });
  }
}
