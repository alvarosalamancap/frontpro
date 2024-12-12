import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentbooksandmovieComponent } from './rentbooksandmovie.component';

describe('RentbooksandmovieComponent', () => {
  let component: RentbooksandmovieComponent;
  let fixture: ComponentFixture<RentbooksandmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentbooksandmovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentbooksandmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
