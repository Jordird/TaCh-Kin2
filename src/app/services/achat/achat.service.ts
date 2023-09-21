import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Achat } from 'src/app/models/achat';
import { environment } from 'src/environment/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AchatService {
  constructor(private httpClient: HttpClient) {}

  create(data: Partial<Achat>) {
    const url = API + '/achatClient';
    return this.httpClient.post<Achat>(url, data);
  }
  list() {
    const url = API + '/achatClient';
    return this.httpClient.get<Achat[]>(url);
  }
  delete() {
    const url = API + '/vente';
    return this.httpClient.delete<Achat[]>(url);
  }
}
