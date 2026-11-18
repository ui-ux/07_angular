import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../000_models/post';

@Injectable({
  providedIn: 'root',
})
export class GetPagedPostsService {
  constructor(private http: HttpClient) {}

  loadPage(page = 1, pageSize = 10): Observable<Post[]> {
    const params = new HttpParams().set('_page', page).set('_limit', pageSize);
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts', { params });
  }
}
