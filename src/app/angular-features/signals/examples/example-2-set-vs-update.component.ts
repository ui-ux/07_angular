import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals-example2',
  standalone: true,
  templateUrl: './example-2-set-vs-update.component.html',
  styleUrl: '../styles/interactive-demo.scss',
})
export class Example2Component {
  readonly count = signal(1);
  readonly message = signal('ready');

  setValue(): void {
    this.count.set(10);
    this.message.set('set() replaced the value');
  }

  updateValue(): void {
    this.count.update(value => value + 1);
    this.message.set('update() used previous value');
  }

  reset(): void {
    this.count.set(0);
    this.message.set('ready');
  }
}
