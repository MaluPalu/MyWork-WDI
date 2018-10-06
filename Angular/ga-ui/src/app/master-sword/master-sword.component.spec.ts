import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSwordComponent } from './master-sword.component';

describe('MasterSwordComponent', () => {
  let component: MasterSwordComponent;
  let fixture: ComponentFixture<MasterSwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterSwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterSwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
