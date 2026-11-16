import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Post } from '../000_models/post';
import { ListService } from '../services/list.service';

@Component({
  standalone: false,
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
})
export class ClientComponent implements OnInit {
  list$: Observable<Post[]> | undefined;
  error: string | undefined;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.list$ = this.listService.loadList().pipe(
      catchError(() => {
        this.error = 'Не вдалося завантажити пости. Перевірте з’єднання з API.';
        return of([]);
      }),
    );
  }

  trackPostById(_index: number, post: Post): number {
    return post.id;
  }
}
