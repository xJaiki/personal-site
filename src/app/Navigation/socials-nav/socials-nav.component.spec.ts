import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsNavComponent } from './socials-nav.component';

describe('SocialsNavComponent', () => {
  let component: SocialsNavComponent;
  let fixture: ComponentFixture<SocialsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
