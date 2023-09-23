import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesBuilderComponent } from './tables-builder.component';

describe('TablesBuilderComponent', () => {
  let component: TablesBuilderComponent;
  let fixture: ComponentFixture<TablesBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
