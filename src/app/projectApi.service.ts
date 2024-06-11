import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectApiService {
  uri = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.uri);
  }
  getDetail(id: any) {
    return this.http.get(this.uri + '/' + id);
  }
  delete(id: any) {
    return this.http.delete(this.uri + '/' + id);
  }
  create(data: any) {
    return this.http.post(this.uri, data);
  }
  update(id: any, data: any) {
    return this.http.put(this.uri + '/' + id, data);
  }
}
