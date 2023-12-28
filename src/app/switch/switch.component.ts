import { Component } from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  count: number = 5;
  current: string = '';
  abc = ['uno', 'dos', 'tress', 'cuatro'];

  onClickSwitch(string: string) {
    this.current = string;
  }
}
