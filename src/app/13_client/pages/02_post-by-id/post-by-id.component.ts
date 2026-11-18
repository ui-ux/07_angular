import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../../000_models/post';
import { GetPostByIdService } from '../../services/02_get-post-by-id/get-post-by-id.service';

@Component({
  selector: 'app-post-by-id',
  templateUrl: './post-by-id.component.html',
  imports: [FormsModule],
})
export class PostByIdComponent {
  id = 1;
  post: Post | null = null;
  loading = false;
  error = '';

  constructor(private getPostByIdService: GetPostByIdService) {}

  loadPost(): void {
    if (!Number.isInteger(this.id) || this.id < 1) {
      this.error = 'Enter a positive integer post ID.';
      this.post = null;
      return;
    }

    this.loading = true;
    this.error = '';

    this.getPostByIdService.getPostById(this.id).subscribe({
      next: (post) => {
        this.post = post;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load post.';
        this.loading = false;
      },
    });
  }
}
