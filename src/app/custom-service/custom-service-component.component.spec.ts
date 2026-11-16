import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomServiceComponent } from './custom-service-component.component';
import { AppModule } from '../app.module';

describe('CustomServiceComponent', () => {
  let component: CustomServiceComponent;
  let fixture: ComponentFixture<CustomServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
