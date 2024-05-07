import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escale } from '../model/escale.model';

@Injectable({
  providedIn: 'root'
})
export class EscaleService {
  private baseUrl = 'http://localhost:8087'; // Remplacez l'URL par celle de votre backend

  constructor(private http: HttpClient) { }

  getAllEscales(): Observable<Escale[]> {
    return this.http.get<Escale[]>(`${this.baseUrl}/escales`);
  }

  getEscaleById(id: string): Observable<Escale> {
    return this.http.get<Escale>(`${this.baseUrl}/escale/${id}`);
  }

  saveEscale(escale: any): Observable<Escale> {
    return this.http.post<Escale>(`${this.baseUrl}/saveEscale`, escale);
  }

  updateEscale(id: string, escale: Escale): Observable<Escale> {
    return this.http.put<Escale>(`${this.baseUrl}/updateEscale/${id}`, escale);
  }

  deleteEscale(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteEscale/${id}`);
  }
}