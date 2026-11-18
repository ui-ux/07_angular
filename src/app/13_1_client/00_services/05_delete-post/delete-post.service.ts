import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeletePostService {
  constructor(private http: HttpClient) {}

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
