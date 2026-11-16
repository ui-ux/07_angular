import { HttpClient } from '@angular/common/http';
import { Component, Signal, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Observable, catchError, map, of, startWith, switchMap } from 'rxjs';

interface DemoPost {
  id: number;
  title: string;
  body: string;
}

type PostResourceState =
  | { status: 'loading' }
  | { status: 'success'; post: DemoPost }
  | { status: 'error'; message: string };

@Component({
  selector: 'app-signals-example10',
  standalone: true,
  templateUrl: './example-10-resource.component.html',
  styleUrl: '../styles/state-demo.scss',
})
export class Example10Component {
  readonly postId = signal(1);
  readonly postState: Signal<PostResourceState>;

  constructor(http: HttpClient) {
    const states$: Observable<PostResourceState> = toObservable(this.postId).pipe(
      switchMap(id =>
        http.get<DemoPost>(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
          map((post): PostResourceState => ({ status: 'success', post })),
          startWith<PostResourceState>({ status: 'loading' }),
          catchError((error: unknown) =>
            of<PostResourceState>({
              status: 'error',
              message: error instanceof Error ? error.message : 'The request failed.',
            }),
          ),
        ),
      ),
    );

    this.postState = toSignal(states$, { initialValue: { status: 'loading' } });
  }

  loadNext(): void {
    this.postId.update(id => id >= 100 ? 1 : id + 1);
  }

  loadPrevious(): void {
    this.postId.update(id => id <= 1 ? 100 : id - 1);
  }
}
