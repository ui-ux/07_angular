import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildTestTwoComponent } from './child-test-two.component';
import { AppModule } from '../../app.module';

describe('ChildTestTwoComponent', () => {
  let component: ChildTestTwoComponent;
  let fixture: ComponentFixture<ChildTestTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildTestTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
