import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Navire } from '../model/navire.model';

@Injectable({
  providedIn: 'root'
})
export class NavireService {
  private baseUrl = 'http://localhost:8087'; // Remplacez l'URL par celle de votre backend

  constructor(private http: HttpClient) { }

  getAllNavires(): Observable<Navire[]> {
    return this.http.get<Navire[]>(`${this.baseUrl}/navires`);
  }
}
