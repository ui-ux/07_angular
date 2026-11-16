import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouteParametersDetailsComponent } from './route-parameters-details.component';
import { AppModule } from '../../app.module';

describe('RouteParametersDetailsComponent', () => {
  let component: RouteParametersDetailsComponent;
  let fixture: ComponentFixture<RouteParametersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteParametersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
