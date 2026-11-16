import { Component } from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch-component.html',
})
export class SwitchComponent {
  readonly testCount: number | null | undefined = 5;
  current = '';
  readonly abc = ['uno', 'dos', 'tress', 'cuatro'];

  onClickSwitch(value: string): void {
    this.current = value;
  }
}
