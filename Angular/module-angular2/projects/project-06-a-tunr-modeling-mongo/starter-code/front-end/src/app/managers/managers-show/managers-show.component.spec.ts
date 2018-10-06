import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersShowComponent } from './managers-show.component';

describe('ManagersShowComponent', () => {
  let component: ManagersShowComponent;
  let fixture: ComponentFixture<ManagersShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagersShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
