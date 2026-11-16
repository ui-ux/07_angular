import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgRxMainComponent } from './ng-rx-main.component';
import { AppModule } from '../app.module';

describe('NgRxMainComponent', () => {
  let component: NgRxMainComponent;
  let fixture: ComponentFixture<NgRxMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgRxMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
