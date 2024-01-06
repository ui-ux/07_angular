import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, forkJoin, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private http: HttpClient) {
    console.log('it is ListService');
  }

  loadList(): Observable<any> {
    const params = new HttpParams()
    .set("page", "1")
    .set("pageSize", "10")
    return this.http.get('https://jsonplaceholder.typicode.com/posts',
      { params });
  }

  // This indicates that you want to get data from the first page,
  // and each page has a maximum of 10 records(objects).

  // this is to implement pagination of query results

  updateTitle(id: number, updatedTitle: string): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const body = { title: updatedTitle };
    return this.http.put(url, body);
  }

  updateAllTitleg(list: any[]): Observable<any[]> {
    console.log('Before map');
    const requests = list.map(item => {
      console.log('Inside map');
      const url = `https://jsonplaceholder.typicode.com/posts/${item.id}`;
      return this.http.put(url, { title: item.title });
    });

    return forkJoin(requests);
  }
}
