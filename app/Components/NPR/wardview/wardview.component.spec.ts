import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WardviewComponent } from './wardview.component';

describe('WardviewComponent', () => {
  let component: WardviewComponent;
  let fixture: ComponentFixture<WardviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WardviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
