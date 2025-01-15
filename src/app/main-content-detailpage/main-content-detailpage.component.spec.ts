import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentDetailpageComponent } from './main-content-detailpage.component';

describe('MainContentDetailpageComponent', () => {
  let component: MainContentDetailpageComponent;
  let fixture: ComponentFixture<MainContentDetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentDetailpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainContentDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
