import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss']
})
export class CadastrosComponent {
  perfilComponent = false;

  cadastrar(){
    console.log('Cadastro realizado com sucesso');
  }
}
