import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contenu } from 'src/app/models/contenu';
import { environment } from 'src/environment/environment';

const API = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class ContenuService {
  constructor(private http: HttpClient) {}
  create(data: Partial<Contenu>) {
    const url = API + '/contenu';
    return this.http.post<Contenu>(url, data);
  }
  list() {
    const url = API + '/contenu';
    return this.http.get<Contenu[]>(url);
  }
}
