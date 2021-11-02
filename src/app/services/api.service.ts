import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../types/api'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = 'https://localhost:44381/countries';
  constructor(private http: HttpClient) { }

  getPaises() {
    return this.http.get<Response[]>(`${this.api}`)
  }
}
