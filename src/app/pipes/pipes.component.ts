import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  public date = new Date;
  public testText = "TestTexT TestTexT";
  public pi: number = Math.PI;
  cars = [
    {name: 'Ford', color: "red"},
    {name: 'Audi', color: "blue"},
    {name: 'MBW', color: "brown"},
    {name: 'FIAT', color: "green"},
    {name: 'Mazda', color: "red"}
  ];
  public json =[{id: 1, name: "jone"}, {id: 2, name: "mari"},{id: 3, name: "rydi"}];



  public testNumber:number = 3;
  searchPipe: string = '';

  public dateString = new Date().toDateString();
}
