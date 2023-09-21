import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vente } from 'src/app/models/vente';
import { environment } from 'src/environment/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class VenteService {
  constructor(private httpCLient: HttpClient) {}
  create(data: Partial<Vente>) {
    const url = API + '/vente';
    return this.httpCLient.post<Vente>(url, data);
  }

  list() {
    const url = API + '/vente';
    return this.httpCLient.get<Vente[]>(url);
  }

  delete() {
    const url = API + '/vente';
    return this.httpCLient.delete<Vente[]>(url);
  }
}
