import { Component, OnInit } from '@angular/core';
import { DepoimentosService } from 'src/app/core/services/depoimentos.service';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Depoimento, Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor( private servicoPromocao: PromocaoService, private servicoDepoimento: DepoimentosService) {
    
  }

  depoimentos: Depoimento[] = [];
  promocoes!: Promocao[];

  ngOnInit(): void {
    this.servicoPromocao.listar()
      .subscribe(
        resposta => {
          this.promocoes = resposta;
        }
      )
    
    this.servicoDepoimento.listar()
      .subscribe(
        resposta => {
          this.depoimentos = resposta;
        }
    )
  }

}
