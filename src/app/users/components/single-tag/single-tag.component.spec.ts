import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleTagComponent } from './single-tag.component';

describe('SingleTagComponent', () => {
  let component: SingleTagComponent;
  let fixture: ComponentFixture<SingleTagComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
