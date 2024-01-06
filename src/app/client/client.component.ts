import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit {
  list$: Observable<any> | undefined;
  list: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const params = new HttpParams()
      .set("page", "1")
      .set("pageSize", "10")

    // this.http.get('https://jsonplaceholder.typicode.com/posts', {params})
    //   .subscribe(
    //     list => this.list = list
    // )

    this.list$ = this.http.get('https://jsonplaceholder.typicode.com/posts', { params });
  }
}
