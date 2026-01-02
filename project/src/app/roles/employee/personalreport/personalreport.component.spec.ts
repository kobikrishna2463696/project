import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalreportComponent } from './personalreport.component';

describe('PersonalreportComponent', () => {
  let component: PersonalreportComponent;
  let fixture: ComponentFixture<PersonalreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
