import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss']
})
export class CadastrosComponent {
  perfilComponent = false;

  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router
  ){

  }

  cadastrar(){
    const formCadastro = this.formularioService.getCadastro();
    
    if(formCadastro?.valid){
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
      this.cadastroService.cadatrar(novoCadastro).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso', value);
          this.router.navigate(['/login'])
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro', err)
        }
      })
    }
    
  }
}
