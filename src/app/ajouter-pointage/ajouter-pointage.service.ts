import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voiture } from '../model/voiture.model';
import { Escale } from '../model/escale.model';
@Injectable({
  providedIn: 'root'
})
export class AjouterPointageService {

  private baseUrl = 'http://localhost:8087'; // Base URL de votre backend

  constructor(private http: HttpClient) {}

  saveVoiture(voiture: Voiture): Observable<Voiture> {
    return this.http.post<Voiture>(`${this.baseUrl}/saveVoiture`, voiture);
  }
  getEscaleById(id: string): Observable<Escale> {
    return this.http.get<Escale>(`${this.baseUrl}/escale/${id}`);
  }
}
