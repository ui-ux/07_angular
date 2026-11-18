import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../000_models/post';

@Injectable({
  providedIn: 'root',
})
export class UpdatePostTitleService {
  constructor(private http: HttpClient) {}

  updateTitle(id: number, title: string): Observable<Post> {
    return this.http.put<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`, { title });
  }
}
