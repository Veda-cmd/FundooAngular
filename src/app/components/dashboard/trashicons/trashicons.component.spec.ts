import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashiconsComponent } from './trashicons.component';

describe('TrashiconsComponent', () => {
  let component: TrashiconsComponent;
  let fixture: ComponentFixture<TrashiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
