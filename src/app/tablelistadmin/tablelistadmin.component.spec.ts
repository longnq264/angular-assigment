import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablelistadminComponent } from './tablelistadmin.component';

describe('TablelistadminComponent', () => {
  let component: TablelistadminComponent;
  let fixture: ComponentFixture<TablelistadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablelistadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablelistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
