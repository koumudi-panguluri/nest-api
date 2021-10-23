import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LauncherPageComponent } from './launcher-page.component';

describe('LauncherPageComponent', () => {
  let component: LauncherPageComponent;
  let fixture: ComponentFixture<LauncherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LauncherPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LauncherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
