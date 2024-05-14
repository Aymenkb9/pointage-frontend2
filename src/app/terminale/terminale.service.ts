import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Terminal } from '../model/terminal.model';

@Injectable({
  providedIn: 'root'
})
export class TerminaleService {
  private baseUrl = 'http://localhost:8087'; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  getAllTerminals(): Observable<Terminal[]> {
    return this.http.get<Terminal[]>(`${this.baseUrl}/terminals`);
  }
}
