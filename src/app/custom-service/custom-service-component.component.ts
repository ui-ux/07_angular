import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Post } from '../000_models/post';
import { ListService } from '../services/list.service';

@Component({
  standalone: false,
  selector: 'app-custom-service',
  templateUrl: './custom-service-component.component.html',
  styleUrls: ['./custom-service-component.component.scss'],
})
export class CustomServiceComponent implements OnInit {
  posts$: Observable<Post[]> | undefined;
  id: number | undefined;
  dataById: Post | undefined;
  error: string | undefined;
  statusMessage: string | undefined;
  private readonly destroyRef = inject(DestroyRef);

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.posts$ = this.listService.loadList().pipe(
      catchError((error: unknown) => {
        this.error = this.getErrorMessage(error);
        return of([]);
      }),
    );
  }

  save(post: Post): void {
    this.statusMessage = undefined;
    this.listService
      .updateTitle(post.id, post.title)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => (this.statusMessage = `Пост ${post.id} оновлено.`),
        error: (error: unknown) => (this.error = this.getErrorMessage(error)),
      });
  }

  saveAll(posts: Post[]): void {
    this.statusMessage = undefined;
    this.listService
      .updateAllTitles(posts)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => (this.statusMessage = `${posts.length} постів оновлено.`),
        error: (error: unknown) => (this.error = this.getErrorMessage(error)),
      });
  }

  getDataById(): void {
    this.error = undefined;
    this.statusMessage = undefined;
    this.dataById = undefined;

    if (this.id !== undefined && Number.isInteger(this.id) && this.id >= 1 && this.id <= 100) {
      this.listService
        .getDataById(this.id)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (data) => {
            this.dataById = data;
          },
          error: (error: unknown) => (this.error = this.getErrorMessage(error)),
        });
    } else {
      this.error = 'Введіть ціле число від 1 до 100.';
    }
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof HttpErrorResponse && error.status === 0) {
      return 'Не вдалося з’єднатися з API. Перевірте мережу та спробуйте ще раз.';
    }

    return 'Запит не виконано. Спробуйте ще раз.';
  }

  trackPostById(_index: number, post: Post): number {
    return post.id;
  }
}
