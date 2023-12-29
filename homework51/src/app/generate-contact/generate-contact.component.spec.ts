import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateContactComponent } from './generate-contact.component';

describe('GenerateContactComponent', () => {
  let component: GenerateContactComponent;
  let fixture: ComponentFixture<GenerateContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
