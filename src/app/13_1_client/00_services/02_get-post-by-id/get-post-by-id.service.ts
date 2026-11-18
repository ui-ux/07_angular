import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../000_models/post';

@Injectable({
  providedIn: 'root',
})
export class GetPostByIdService {
  constructor(private http: HttpClient) {}

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
