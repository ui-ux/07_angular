import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-route-parameters',
  templateUrl: './route-parameters.component.html',
  styleUrl: './route-parameters.component.scss'
})
export class RouteParametersComponent implements OnInit  {
  selectedId: any;
  list = [
    { 'id': 1, 'name': 'Name 1' },
    { 'id': 2, 'name': 'Name 2' },
    { 'id': 3, 'name': 'Name 3' },
    { 'id': 4, 'name': 'Name 4' },
    { 'id': 5, 'name': 'Name 5'},
  ]

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
       let id = parseInt(params['id']);
       this.selectedId = id;
     });
  }

  isSelected(l:any) { return l.id === this.selectedId; }

  onSelect(list: any) {
    this.router.navigate(['home/route-parameters', list.id]);
   // Relative Path
   // this.router.navigate([list.id], { relativeTo: this.route });

  }
}
