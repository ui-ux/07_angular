import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elements-model-view',
  templateUrl: './elements-model-view.component.html',
  styleUrl: './elements-model-view.component.scss'
})
export class ElementsModelViewComponent {
  public name = "myName";
  public person = {name: "your Name"}
}
