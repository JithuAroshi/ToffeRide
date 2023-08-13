import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsChartTableComponent } from './flights-chart-table.component';

describe('FlightsChartTableComponent', () => {
  let component: FlightsChartTableComponent;
  let fixture: ComponentFixture<FlightsChartTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsChartTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsChartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
