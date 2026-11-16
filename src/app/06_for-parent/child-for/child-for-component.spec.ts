import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildForComponent } from './child-for-component';
import { AppModule } from '../../app.module';

describe('ChildForComponent', () => {
  let component: ChildForComponent;
  let fixture: ComponentFixture<ChildForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
