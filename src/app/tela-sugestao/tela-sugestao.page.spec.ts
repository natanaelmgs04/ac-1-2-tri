import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaSugestaoPage } from './tela-sugestao.page';

describe('TelaSugestaoPage', () => {
  let component: TelaSugestaoPage;
  let fixture: ComponentFixture<TelaSugestaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSugestaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
