import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers: [
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorPassageiroComponent),
      multi: true
    }
  ]
})
export class SeletorPassageiroComponent implements ControlValueAccessor{
  
  @Input() titulo : string = ''
  @Input() subtitulo : string = ''

  constructor(
    public formBuscaService: FormBuscaService
  ){

  }

  value: number = 0

  onChange = (val: number) => {}
  onTouch = () => {}
  
  writeValue(val: any): void {
    this.value = val
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onChange = fn
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  incrementar() {
    this.value += 1;
    this.onChange(this.value);
    this.onTouch();
    this.formBuscaService.alterarQuantidade(this.value, this.titulo);
  }

  decrementar(){
    if(this.value > 0){
      this.value -= 1;
      this.onChange(this.value);
      this.onTouch();
      this.formBuscaService.alterarQuantidade(this.value, this.titulo)
    }
  }

}
