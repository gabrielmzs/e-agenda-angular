import { Component } from '@angular/core';
import { ListarCategoriaViewModel } from '../models/listar-categoria.view-model';
import { CategoriaService } from '../services/categoria.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-inserir-categorias',
  templateUrl: './inserir-categorias.component.html',
  styleUrls: ['./inserir-categorias.component.css']
})
export class InserirCategoriasComponent {

  form!: FormGroup;
  categoriaVM!: ListarCategoriaViewModel;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: new FormControl('', [Validators.required]),

    });
  }

  campoEstaInvalido(nome: string) {
    return this.form.get(nome)!.touched && this.form.get(nome)!.invalid;
  }



  gravar() {
    if (this.form.invalid) {
      for (let erro of this.form.validate()) {
        this.toastrService.warning(erro);
      }

      return;
    }

    this.categoriaVM = this.form.value;
    console.log(this.form.value)

    this.categoriaService.inserir(this.categoriaVM).subscribe({
      next: (categoria: ListarCategoriaViewModel) => this.processarSucesso(categoria),
      error: (err: Error) => this.processarFalha(err),
    });
  }

  processarSucesso(categoria: ListarCategoriaViewModel) {
    this.toastrService.success(
      `A categoria "${categoria.titulo}" foi cadastrada com sucesso!`,
      'Sucesso'
    );

    this.router.navigate(['/categorias/listar']);
  }

  processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Error');
  }
}
