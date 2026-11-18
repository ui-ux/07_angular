import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { Post } from '../../../000_models/post';

@Injectable({
  providedIn: 'root',
})
export class UpdateAllPostTitlesService {
  constructor(private http: HttpClient) {}

  updateAllTitles(posts: Post[]): Observable<Post[]> {
    if (posts.length === 0) {
      return of([]);
    }

    const requests = posts.map((post) =>
      this.http.put<Post>(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        title: post.title,
      }),
    );

    return forkJoin(requests);
  }
}
