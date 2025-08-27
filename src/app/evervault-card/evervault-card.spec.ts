import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvervaultCard } from './evervault-card';

describe('EvervaultCard', () => {
  let component: EvervaultCard;
  let fixture: ComponentFixture<EvervaultCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvervaultCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvervaultCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
