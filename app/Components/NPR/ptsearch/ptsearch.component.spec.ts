import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtsearchComponent } from './ptsearch.component';

describe('PtsearchComponent', () => {
  let component: PtsearchComponent;
  let fixture: ComponentFixture<PtsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
