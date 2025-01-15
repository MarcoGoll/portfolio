import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektOverviewComponent } from './projekt-overview.component';

describe('ProjektOverviewComponent', () => {
  let component: ProjektOverviewComponent;
  let fixture: ComponentFixture<ProjektOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjektOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjektOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
