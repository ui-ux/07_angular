import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouteParametersComponent } from './route-parameters.component';
import { AppModule } from '../app.module';

describe('RouteParametersComponent', () => {
  let component: RouteParametersComponent;
  let fixture: ComponentFixture<RouteParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
