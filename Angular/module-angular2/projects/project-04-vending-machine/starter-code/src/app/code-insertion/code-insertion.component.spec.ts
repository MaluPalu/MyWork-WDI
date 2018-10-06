import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeInsertionComponent } from './code-insertion.component';

describe('CodeInsertionComponent', () => {
  let component: CodeInsertionComponent;
  let fixture: ComponentFixture<CodeInsertionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeInsertionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeInsertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
