import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../../000_models/post';
import { GetPostsService } from '../../services/00_get-posts/get-posts.service';
import { UpdateAllPostTitlesService } from '../../services/04_update-all-post-titles/update-all-post-titles.service';

@Component({
  selector: 'app-update-all-titles',
  templateUrl: './update-all-titles.component.html',
  imports: [FormsModule],
})
export class UpdateAllTitlesComponent implements OnInit {
  posts: Post[] = [];
  loading = false;
  saving = false;
  error = '';
  statusMessage = '';

  constructor(
    private getPostsService: GetPostsService,
    private updateAllPostTitlesService: UpdateAllPostTitlesService,
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.error = '';
    this.statusMessage = '';
    this.loading = true;

    this.getPostsService.getPosts().subscribe({
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

  updateAllTitles(): void {
    if (this.posts.length === 0) {
      return;
    }

    this.error = '';
    this.statusMessage = '';
    this.saving = true;

    this.updateAllPostTitlesService.updateAllTitles(this.posts).subscribe({
      next: (updatedPosts) => {
        this.posts = updatedPosts;
        this.statusMessage = `${updatedPosts.length} posts updated.`;
        this.saving = false;
      },
      error: () => {
        this.error = 'One or more updates failed; some posts may already have been updated.';
        this.saving = false;
      },
    });
  }
}
