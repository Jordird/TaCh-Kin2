import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/app/models/article';
import { environment } from 'src/environment/environment';

const API = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class articleService {
  constructor(private http: HttpClient) {}
  create(data: Partial<Article>) {
    const url = API + '/article';
    return this.http.post<Article>(url, data);
  }
  list() {
    const url = API + '/article';
    return this.http.get<Article[]>(url);
  }
}
