import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeletePostService } from '../../00_services/05_delete-post/delete-post.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  imports: [FormsModule],
})
export class DeletePostComponent {
  id = 1;
  error = '';
  statusMessage = '';
  deleting = false;

  constructor(private deletePostService: DeletePostService) {}

  deletePost(): void {
    if (!Number.isInteger(this.id) || this.id < 1) {
      this.error = 'Enter a positive integer post ID.';
      this.statusMessage = '';
      return;
    }

    this.error = '';
    this.statusMessage = '';
    this.deleting = true;

    this.deletePostService.deletePost(this.id).subscribe({
      next: () => {
        this.statusMessage = `DELETE request for post ${this.id} succeeded.`;
        this.deleting = false;
      },
      error: () => {
        this.error = 'Failed to delete the post.';
        this.deleting = false;
      },
    });
  }
}
