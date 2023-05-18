/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomePizzasComponent } from './homePizzas.component';

describe('HomePizzasComponent', () => {
  let component: HomePizzasComponent;
  let fixture: ComponentFixture<HomePizzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePizzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
