import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSideBarComponent } from './no-side-bar.component';

describe('NoSideBarComponent', () => {
  let component: NoSideBarComponent;
  let fixture: ComponentFixture<NoSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
