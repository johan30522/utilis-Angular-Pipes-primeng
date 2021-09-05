import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenadoComponent } from './ordenado.component';

describe('OrdenadoComponent', () => {
  let component: OrdenadoComponent;
  let fixture: ComponentFixture<OrdenadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
