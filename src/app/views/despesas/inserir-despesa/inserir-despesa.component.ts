import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListarCategoriaViewModel } from '../../categorias/models/listar-categoria.view-model';
import { FormsDespesaViewModel } from '../models/forms-despesa.view-model';
import { DespesaService } from '../service/despesas.service';
import { CategoriaService } from '../../categorias/services/categoria.service';

@Component({
  selector: 'app-inserir-despesa',
  templateUrl: './inserir-despesa.component.html',
  styleUrls: ['./inserir-despesa.component.css']
})
export class InserirDespesaComponent implements OnInit {

  form?: FormGroup;

  despesaFormVM?: FormsDespesaViewModel;
  categorias: ListarCategoriaViewModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private despesasService: DespesaService,
    private CategoriasService: CategoriaService,
    private toastrService: ToastrService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      descricao: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      data: new FormControl('09/10/2023', [Validators.required]),
      formaPagamento: new FormControl(0, [Validators.required]),
      valor: new FormControl(''),

      categoriasSelecionadas: new FormControl([]),
    });

    this.CategoriasService
      .selecionarTodos()
      .subscribe(
        (categorias) => {
          this.categorias = categorias;
        }
      );


  }

  gravar() {
    if (this.form?.invalid) {
      for (let erro of this.form.validate()) {
        this.toastrService.warning(erro);
      }

      return;
    }

    this.despesasService.inserir(this.form?.value).subscribe((res) => {
      this.toastrService.success(
        `A despesa "${res.descricao}" foi salva com sucesso!`,
        'Sucesso'
      );

      this.router.navigate(['/despesas', 'listar']);
    });
  }

}
