import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgrxEntityComponent } from './ngrx-entity.component';
import { AppModule } from '../app.module';

describe('NgrxEntityComponent', () => {
  let component: NgrxEntityComponent;
  let fixture: ComponentFixture<NgrxEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
