import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvervaultCardDemo } from './evervault-card-demo';

describe('EvervaultCardDemo', () => {
  let component: EvervaultCardDemo;
  let fixture: ComponentFixture<EvervaultCardDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvervaultCardDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvervaultCardDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
