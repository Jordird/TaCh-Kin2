import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environment/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  create(data: Partial<Category>) {
    const url = API + '/categorie';
    return this.http.post<Category>(url, data);
  }

  list() {
    const url = API + '/categorie';
    return this.http.get<Category[]>(url);
  }

  delete() {
    const url = API + '/categorie';
    return this.http.delete<Category[]>(url);
  }
}
