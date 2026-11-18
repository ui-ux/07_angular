import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../../000_models/post';
import { GetPagedPostsService } from '../../services/01_get-paged-posts/get-paged-posts.service';

@Component({
  selector: 'app-paged-list',
  templateUrl: './paged-list.component.html',
  imports: [FormsModule],
})
export class PagedListComponent implements OnInit {
  page = 1;
  pageSize = 10;
  posts: Post[] = [];
  loading = false;
  error = '';

  constructor(private getPagedPostsService: GetPagedPostsService) {}

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(): void {
    if (this.page < 1 || this.pageSize < 1) {
      this.error = 'Page and page size must be positive numbers.';
      return;
    }

    this.loading = true;
    this.error = '';

    this.getPagedPostsService.loadPage(this.page, this.pageSize).subscribe({
      next: (posts) => {
        this.posts = posts;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load posts.';
        this.loading = false;
      },
    });
  }
}
