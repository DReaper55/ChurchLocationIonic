import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HymnSongPage } from './hymn-song.page';

describe('HymnSongPage', () => {
  let component: HymnSongPage;
  let fixture: ComponentFixture<HymnSongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HymnSongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HymnSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
