import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { Post } from '../000_models/post';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  loadList(page = 1, pageSize = 10): Observable<Post[]> {
    const params = new HttpParams().set('_page', page).set('_limit', pageSize);
    return this.http.get<Post[]>('/api/posts', { params });
  }

  updateTitle(id: number, updatedTitle: string): Observable<Post> {
    const url = `/api/posts/${id}`;
    const body = { title: updatedTitle };
    return this.http.put<Post>(url, body);
  }

  updateAllTitles(list: Post[]): Observable<Post[]> {
    if (list.length === 0) {
      return of([]);
    }

    const requests = list.map((post) => {
      const url = `/api/posts/${post.id}`;
      return this.http.put<Post>(url, { title: post.title });
    });

    return forkJoin(requests);
  }

  getDataById(id: number): Observable<Post> {
    return this.http.get<Post>(`/api/posts/${id}`);
  }
}
