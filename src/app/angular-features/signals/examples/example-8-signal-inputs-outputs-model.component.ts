import { Component, input, model, output, signal } from '@angular/core';

@Component({
  selector: 'app-signals-example8',
  standalone: true,
  templateUrl: './example-8-signal-inputs-outputs-model.component.html',
  styleUrl: '../styles/interactive-demo.scss',
})
export class Example8Component {
  readonly label = input('Standalone demo');
  readonly selected = model(false);
  readonly action = output<string>();
  readonly lastAction = signal('No action emitted yet');

  toggle(): void {
    this.selected.update(value => !value);
  }

  emitAction(): void {
    const message = `Action emitted for "${this.label()}"`;
    this.lastAction.set(message);
    this.action.emit(message);
  }
}
