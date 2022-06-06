import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersregComponent } from './usersreg.component';

describe('UsersregComponent', () => {
  let component: UsersregComponent;
  let fixture: ComponentFixture<UsersregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
