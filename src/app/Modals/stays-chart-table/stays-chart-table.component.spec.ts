import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaysChartTableComponent } from './stays-chart-table.component';

describe('StaysChartTableComponent', () => {
  let component: StaysChartTableComponent;
  let fixture: ComponentFixture<StaysChartTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaysChartTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaysChartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
