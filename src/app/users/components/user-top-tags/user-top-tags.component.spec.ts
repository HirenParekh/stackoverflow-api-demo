import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserTopTagsComponent } from './user-top-tags.component';

describe('UserTopTagsComponent', () => {
  let component: UserTopTagsComponent;
  let fixture: ComponentFixture<UserTopTagsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTopTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
