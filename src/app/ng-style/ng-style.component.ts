import { Component } from '@angular/core';

@Component({
  selector: 'ng-style',
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.scss'
})
export class NgStyleComponent {
  public tdStyle = {
    color: 'blue',
    fontSize: '26px'
  };

  titleStyle() {
    return {
      color: 'red',
      fontSize: '16px'
    }
  };
}
