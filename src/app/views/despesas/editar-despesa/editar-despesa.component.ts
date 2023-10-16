import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListarCategoriaViewModel } from '../../categorias/models/listar-categoria.view-model';
import { CategoriaService } from '../../categorias/services/categoria.service';
import { FormsDespesaViewModel } from '../models/forms-despesa.view-model';
import { DespesaService } from '../service/despesas.service';

@Component({
  selector: 'app-editar-despesa',
  templateUrl: './editar-despesa.component.html',
  styleUrls: ['./editar-despesa.component.css']
})
export class EditarDespesaComponent implements OnInit {
  form?: FormGroup;

  despesaFormVM?: FormsDespesaViewModel;
  categorias: ListarCategoriaViewModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private despesasService: DespesaService,
    private CategoriasService: CategoriaService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
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

    this.despesaFormVM = this.route.snapshot.data['despesa'];

    console.log(this.despesaFormVM);

    this.form.patchValue(this.despesaFormVM!);

    const dataFormatada = this.despesaFormVM?.data
      ?.toString()
      .substring(0, 10);

    this.form.patchValue({ data: dataFormatada });


  }

  gravar() {
    if (this.form?.invalid) {
      for (let erro of this.form.validate()) {
        this.toastrService.warning(erro);
      }

      return;
    }


    const id = this.route.snapshot.paramMap.get('id')!;


    this.despesasService.editar(id, this.form?.value).subscribe((res) => {
      this.toastrService.success(
        `A despesa "${res.descricao}" foi salva com sucesso!`,
        'Sucesso'
      );

      this.router.navigate(['/despesas', 'listar']);
    });
  }
}
