import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsListComponent } from './commits-list.component';

describe('CommitsListComponent', () => {
  let component: CommitsListComponent;
  let fixture: ComponentFixture<CommitsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommitsListComponent]
    });
    fixture = TestBed.createComponent(CommitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
