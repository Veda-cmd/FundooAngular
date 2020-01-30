import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelmenuComponent } from './labelmenu.component';

describe('LabelmenuComponent', () => {
  let component: LabelmenuComponent;
  let fixture: ComponentFixture<LabelmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
