import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeviewComponent } from './aeview.component';

describe('AeviewComponent', () => {
  let component: AeviewComponent;
  let fixture: ComponentFixture<AeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
