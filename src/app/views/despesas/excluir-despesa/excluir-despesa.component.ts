import { Component, OnInit } from '@angular/core';
import { DespesaService } from '../service/despesas.service';
import { ListarDespesaViewModel } from '../models/listar-despesa.view-model';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-excluir-despesa',
  templateUrl: './excluir-despesa.component.html',
  styleUrls: ['./excluir-despesa.component.css']
})
export class ExcluirDespesaComponent implements OnInit {

  DespesaVM?: ListarDespesaViewModel;

  constructor(
    private despesaService: DespesaService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.DespesaVM = this.route.snapshot.data['despesa'];
    console.log(this.DespesaVM);
  }

  gravar() {


    this.despesaService.excluir(this.DespesaVM!.id).subscribe(() => {
      this.toastrService.success(
        `A despesa foi excluída com sucesso!`,
        'Sucesso'
      );

      this.router.navigate(['/despesas', 'listar']);
    });
  }
}
