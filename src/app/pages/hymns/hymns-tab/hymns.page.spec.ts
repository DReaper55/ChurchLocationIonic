import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HymnsPage } from './hymns.page';

describe('HymnsPage', () => {
  let component: HymnsPage;
  let fixture: ComponentFixture<HymnsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HymnsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HymnsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
