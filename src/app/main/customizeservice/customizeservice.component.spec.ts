import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeserviceComponent } from './customizeservice.component';

describe('CustomizeserviceComponent', () => {
  let component: CustomizeserviceComponent;
  let fixture: ComponentFixture<CustomizeserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
