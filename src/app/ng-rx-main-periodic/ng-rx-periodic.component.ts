import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PeriodicElement } from './store/models/periodic.model';
import { selectFilteredElements, selectFilter } from './store/selectors/selectors';
import { loadElements, setFilter } from './store/actions/actions';
import { AppState } from './store/state/state';

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-ng-rx-periodic',
  templateUrl: './ng-rx-periodic.component.html',
  styleUrls: ['./ng-rx-periodic.component.scss'],
})
export class NgRxPeriodicComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource$: Observable<PeriodicElement[]>;
  filter$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.dataSource$ = this.store.select(selectFilteredElements);
    this.filter$ = this.store.select(selectFilter);
  }

  ngOnInit(): void {
    this.store.dispatch(loadElements({ elements: ELEMENT_DATA }));
  }

  applyFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    const filterValue = input.value.trim();
    this.store.dispatch(setFilter({ filter: filterValue }));
  }
}

