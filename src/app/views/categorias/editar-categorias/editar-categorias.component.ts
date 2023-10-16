import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListarCategoriaViewModel } from '../models/listar-categoria.view-model';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-editar-categorias',
  templateUrl: './editar-categorias.component.html',
  styleUrls: ['./editar-categorias.component.css']
})
export class EditarCategoriasComponent implements OnInit {
  form!: FormGroup;
  categoriaVM!: ListarCategoriaViewModel;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: new FormControl('', [Validators.required]),

    });
    this.categoriaVM = this.route.snapshot.data['categoria'];

    this.form.patchValue(this.categoriaVM!);
  }

  campoEstaInvalido(nome: string) {
    return this.form.get(nome)!.touched && this.form.get(nome)!.invalid;
  }



  gravar() {
    if (this.form?.invalid) {
      for (let erro of this.form.validate()) {
        this.toastrService.warning(erro);
      }

      return;
    }

    const id = this.route.snapshot.paramMap.get('id')!;

    this.categoriaService.editar(id, this.form?.value).subscribe((res) => {
      this.toastrService.success(
        `A categoria "${res.titulo}" foi salva com sucesso!`,
        'Sucesso'
      );

      this.router.navigate(['/categorias', 'listar']);
    });
  }

}
