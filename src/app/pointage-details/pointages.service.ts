import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from '../model/voiture.model';
import { Escale } from '../model/escale.model';

@Injectable({
  providedIn: 'root'
})
export class PointagesService {

  private baseUrl = 'http://localhost:8087'; // Remplacez l'URL par celle de votre backend

  constructor(private http: HttpClient) { }

  getAllVoitures(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(`${this.baseUrl}/voitures`);
  }

  getEscaleById(id: string): Observable<Escale> {
    return this.http.get<Escale>(`${this.baseUrl}/escale/${id}`);
  }

}
