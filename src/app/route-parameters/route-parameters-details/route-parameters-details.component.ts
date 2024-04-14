import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-route-parameters-details',
  templateUrl: './route-parameters-details.component.html',
  styleUrl: './route-parameters-details.component.scss'
})
export class RouteParametersDetailsComponent implements OnInit {
  listId: any;
  list: any[] | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.listId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.listId = id;
    });

  }

  goPrev() {
    const previousId = +this.listId - 1;
    if (previousId >= 1) {
      this.router.navigate(['/route-parameters', previousId ]);
    }
  }

  goNext() {
    const nextId = +this.listId + 1;
    if (nextId < 6) {
      this.router.navigate(['/route-parameters', nextId ]);
    }
  }

  back() {
    const selectedId = this.listId ? this.listId : null;
    this.router.navigate(['/route-parameters', { id: selectedId }]);

    // Relative Path
    // this.router.navigate(['../', {id: selectedId}], { relativeTo: this.route });
  }

  goOne() {
    this.router.navigate(['test-one'], { relativeTo: this.route });
  }

  goTwo() {
    this.router.navigate(['test-two'], { relativeTo: this.route });
  }
}
