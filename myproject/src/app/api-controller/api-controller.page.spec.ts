import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiControllerPage } from './api-controller.page';

describe('ApiControllerPage', () => {
  let component: ApiControllerPage;
  let fixture: ComponentFixture<ApiControllerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiControllerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
