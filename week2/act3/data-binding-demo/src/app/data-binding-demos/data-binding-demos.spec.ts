import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingDemos } from './data-binding-demos';

describe('DataBindingDemos', () => {
  let component: DataBindingDemos;
  let fixture: ComponentFixture<DataBindingDemos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingDemos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingDemos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
