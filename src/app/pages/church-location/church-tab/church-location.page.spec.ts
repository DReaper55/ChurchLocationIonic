import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChurchLocationPage } from './church-location.page';

describe('ChurchLocationPage', () => {
  let component: ChurchLocationPage;
  let fixture: ComponentFixture<ChurchLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChurchLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChurchLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
