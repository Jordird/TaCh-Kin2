import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/models/cleints';
import { environment } from 'src/environment/environment';
const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  create(data: Partial<Client>) {
    const url = API + '/client';
    return this.http.post<Client>(url, data);
  }

  list() {
    const url = API + '/client';
    return this.http.get<Client[]>(url);
  }
}
