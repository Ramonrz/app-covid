import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderModule } from 'ngx-order-pipe';
import { ListFilterPipe } from 'src/app/pipes/list-filter.pipe';
import { CountryListComponent } from './country-list.component';

describe('CountryListComponent', () => {

  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryListComponent, ListFilterPipe],
      imports: [RouterTestingModule, OrderModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClick test', () => {
    component.onClick({ ISO2: 'BR' });
    expect(component).toBeTruthy();
  });

});
