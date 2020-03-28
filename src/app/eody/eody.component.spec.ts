import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EodyComponent } from './eody.component';

describe('EodyComponent', () => {
  let component: EodyComponent;
  let fixture: ComponentFixture<EodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
