import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor() { }

  cadastroFrom: FormGroup | null = null

  getCadastro(): FormGroup | null{
    return this.cadastroFrom
  }

  setCadastro(form: FormGroup){
    this.cadastroFrom = form;
  }
}


