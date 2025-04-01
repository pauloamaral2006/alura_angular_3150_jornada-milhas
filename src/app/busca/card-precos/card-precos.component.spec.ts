import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrecosComponent } from './card-precos.component';

describe('CardPrecosComponent', () => {
  let component: CardPrecosComponent;
  let fixture: ComponentFixture<CardPrecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPrecosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPrecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
