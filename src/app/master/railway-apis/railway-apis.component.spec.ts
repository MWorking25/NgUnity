import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailwayApisComponent } from './railway-apis.component';

describe('RailwayApisComponent', () => {
  let component: RailwayApisComponent;
  let fixture: ComponentFixture<RailwayApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailwayApisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailwayApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
