import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-custom-service',
  templateUrl: './custom-service-component.component.html',
  styleUrls: ['./custom-service-component.component.scss']
})
export class CustomServiceComponent implements OnInit {
  posts$: Observable<any[]> | undefined;
  list: any[] = [];
  id: number | undefined;
  dataById: any | undefined;
  error: string | undefined;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.posts$ = this.listService.loadList();
    this.posts$.subscribe(posts => {
      this.list = posts;
    });
  }

  save(item: any): void {
    this.listService.updateTitle(item.id, item.title)
      .subscribe({
        next: response => console.log('Data updated successfully:', response),
        error: error => console.error('An error occurred while updating:', error)
      });
  }

  saveAll(list: any[]): void {
    this.listService.updateAllTitleg(list)
      .subscribe({
        next: response => console.log('Data updated successfully:', response),
        error: error => console.error('An error occurred while updating:', error)
      });
  }

  getDataById(): void {
    if (this.id) {
      this.listService.getDataById(this.id)
        .subscribe({
          next: data => {
            this.dataById = data;
            this.error = undefined;
          },
          error: error => {
            console.error('An error occurred while fetching data:', error);
            this.error = 'Error fetching data. Please try again.';
          }
        });
    } else {
      this.error = 'Please provide an ID.';
    }
  }
}
