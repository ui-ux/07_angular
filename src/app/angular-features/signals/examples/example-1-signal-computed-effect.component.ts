import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-example1',
  standalone: true,
  templateUrl: './example-1-signal-computed-effect.component.html',
  styleUrl: '../styles/interactive-demo.scss',
})
export class Example1Component {
  readonly count = signal(1);
  readonly doubleCount = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      console.info('Signal effect:', this.count(), this.doubleCount());
    });
  }

  increment(): void {
    this.count.update(value => value + 1);
  }

  reset(): void {
    this.count.set(0);
  }
}
