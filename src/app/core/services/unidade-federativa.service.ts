import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { UnidadeFederativa } from '../types/type';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
    ) { 
    }

    listarestado(): Observable <UnidadeFederativa[]>{
      return this.http.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`)
    }
}
