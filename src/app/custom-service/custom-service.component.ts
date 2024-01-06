import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-custom-service',
  templateUrl: './custom-service.component.html',
  styleUrl: './custom-service.component.scss'
})
export class CustomServiceComponent {
  list$: Observable<any[]> | undefined;
  list: any[] = [];

  constructor(
    private listService: ListService) { }

  ngOnInit(): void {
    this.list$ = this.listService.loadList();
  }

  save(item: any): void {
    this.listService.updateTitle(item.id, item.title)
      .subscribe({
        next: response => console.log('Дані успішно оновлено:', response),
        error: error => console.error('Сталася помилка при оновленні:', error)
      });
  }

  saveAll(list: any[]): void {
    this.listService.updateAllTitleg(list)
      .subscribe({
        next: response => console.log('Дані успішно оновлено:', response),
        error: error => console.error('Сталася помилка при оновленні:', error)
      });
  }
}
