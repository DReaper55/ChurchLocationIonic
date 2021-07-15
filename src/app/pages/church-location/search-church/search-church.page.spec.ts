import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchChurchPage } from './search-church.page';

describe('SearchChurchPage', () => {
  let component: SearchChurchPage;
  let fixture: ComponentFixture<SearchChurchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchChurchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchChurchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
