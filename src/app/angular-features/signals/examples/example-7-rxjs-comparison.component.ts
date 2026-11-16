import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { interval, map, scan, shareReplay, startWith } from 'rxjs';

@Component({
  selector: 'app-signals-example7',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './example-7-rxjs-comparison.component.html',
  styleUrl: '../styles/state-demo.scss',
})
export class Example7Component {
  readonly signalCount = signal(0);
  readonly observableCount$ = interval(1000).pipe(
    scan(count => count + 1, 0),
    startWith(0),
    shareReplay({ bufferSize: 1, refCount: true }),
  );

  incrementSignal(): void {
    this.signalCount.update(value => value + 1);
  }

  resetSignal(): void {
    this.signalCount.set(0);
  }
}
