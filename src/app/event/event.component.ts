import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  public person = {
    name: 'Name Person'
  }
  onClick() {
    alert('Test text');
  }
  onKeyUp(newName: string) {
    this.person.name = newName;
  }
}
