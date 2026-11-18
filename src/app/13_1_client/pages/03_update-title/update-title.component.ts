import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../../000_models/post';
import { UpdatePostTitleService } from '../../00_services/03_update-post-title/update-post-title.service';

@Component({
  selector: 'app-update-title',
  templateUrl: './update-title.component.html',
  imports: [FormsModule],
})
export class UpdateTitleComponent {
  id = 1;
  title = '';
  updatedPost: Post | null = null;
  error = '';
  saving = false;

  constructor(private updatePostTitleService: UpdatePostTitleService) {}

  updateTitle(): void {
    if (!Number.isInteger(this.id) || this.id < 1 || !this.title.trim()) {
      this.error = 'Enter a positive post ID and a non-empty title.';
      return;
    }

    this.error = '';
    this.saving = true;

    this.updatePostTitleService.updateTitle(this.id, this.title.trim()).subscribe({
      next: (post) => {
        this.updatedPost = post;
        this.saving = false;
      },
      error: () => {
        this.error = 'Failed to update the post title.';
        this.saving = false;
      },
    });
  }
}
