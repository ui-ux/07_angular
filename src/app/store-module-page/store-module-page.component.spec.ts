import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModulePageComponent } from './store-module-page.component';
import { AppModule } from '../app.module';

describe('StoreModulePageComponent', () => {
  let component: StoreModulePageComponent;
  let fixture: ComponentFixture<StoreModulePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreModulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
