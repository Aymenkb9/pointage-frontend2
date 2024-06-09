// Service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserve } from '../model/reserve.model';
import { Escale } from '../model/escale.model';

@Injectable({
  providedIn: 'root'
})
export class AjouterReserveService {
  private baseUrl = 'http://localhost:8087'; // Base URL de votre backend

  constructor(private http: HttpClient) { }

  ajouterReserve(reserve: Reserve): Observable<Reserve> {
    return this.http.post<Reserve>(`${this.baseUrl}/saveReserve`, reserve);
  }
  getEscaleById(id: string): Observable<Escale> {
    return this.http.get<Escale>(`${this.baseUrl}/escale/${id}`);
  }
}
