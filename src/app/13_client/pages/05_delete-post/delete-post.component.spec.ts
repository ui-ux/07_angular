import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { DeletePostService } from '../../services/05_delete-post/delete-post.service';
import { DeletePostComponent } from './delete-post.component';

describe('DeletePostComponent', () => {
  let component: DeletePostComponent;
  let fixture: ComponentFixture<DeletePostComponent>;
  let deletePost: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    deletePost = vi.fn().mockReturnValue(of(undefined));
    await TestBed.configureTestingModule({
      imports: [DeletePostComponent],
      providers: [{ provide: DeletePostService, useValue: { deletePost } }],
    }).compileComponents();

    fixture = TestBed.createComponent(DeletePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sends a valid post ID and displays success', () => {
    component.id = 7;
    component.deletePost();

    expect(deletePost).toHaveBeenCalledWith(7);
    expect(component.statusMessage).toContain('post 7 succeeded');
    expect(component.error).toBe('');
  });

  it('does not send a request for an invalid ID', () => {
    component.id = 0;
    component.deletePost();

    expect(deletePost).not.toHaveBeenCalled();
    expect(component.error).toContain('positive integer');
  });

  it('displays an error when the request fails', () => {
    deletePost.mockReturnValue(throwError(() => new Error('Request failed')));
    component.deletePost();

    expect(component.error).toBe('Failed to delete the post.');
    expect(component.deleting).toBe(false);
  });
});
