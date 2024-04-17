import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required)
  
  constructor ( 
    private formBuilder: FormBuilder
  ){}
  
  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, Validators.required],
      cpf: [null, Validators.required],
      cidade: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: [null, Validators.required],
      estado: this.estadoControl,
      confirmaEmail: [null, [Validators.required, Validators.email]],
      confirmaSenha: [null, [Validators.required, Validators.minLength(3)]],
      aceitarTermos: [null, Validators.requiredTrue]
    })
  }

}
