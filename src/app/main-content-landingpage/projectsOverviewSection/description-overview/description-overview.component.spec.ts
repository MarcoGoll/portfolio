import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionOverviewComponent } from './description-overview.component';

describe('DescriptionOverviewComponent', () => {
  let component: DescriptionOverviewComponent;
  let fixture: ComponentFixture<DescriptionOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
