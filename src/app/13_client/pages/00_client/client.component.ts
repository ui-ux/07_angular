import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Post } from '../../../000_models/post';
import { GetPostsService } from '../../services/00_get-posts/get-posts.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  imports: [AsyncPipe],
})
export class ClientComponent implements OnInit {
  list$: Observable<Post[]> | undefined;
  error: string | undefined;

  constructor(private getPostsService: GetPostsService) {}

  ngOnInit(): void {
    this.list$ = this.getPostsService.getPosts().pipe(
      catchError(() => {
        this.error = 'Failed to load posts. Please check your API connection.';
        return of([]);
      }),
    );
  }

  trackPostById(_index: number, post: Post): number {
    return post.id;
  }
}
