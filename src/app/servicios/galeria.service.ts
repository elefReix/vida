import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Foto {
  url: string;
  descripcion: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
private jsonUrl = 'assets/fotos/lista.json';
  constructor(private http:HttpClient) { }
  obtenerFotos(): Observable<Foto[]> {
    return this.http.get<Foto[]>(this.jsonUrl);
  }
}
