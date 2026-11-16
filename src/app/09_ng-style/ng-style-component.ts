import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'ng-style',
  templateUrl: './ng-style-component.html',
  imports: [NgStyle],
})
export class NgStyleComponent {
  public tdStyle = {
    color: 'blue',
    fontSize: '26px',
  };

  titleStyle() {
    return {
      color: 'red',
      fontSize: '16px',
    };
  }

}
