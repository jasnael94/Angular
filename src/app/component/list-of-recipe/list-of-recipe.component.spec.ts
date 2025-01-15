import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRecipeComponent } from './list-of-recipe.component';

describe('ListOfRecipeComponent', () => {
  let component: ListOfRecipeComponent;
  let fixture: ComponentFixture<ListOfRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfRecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
