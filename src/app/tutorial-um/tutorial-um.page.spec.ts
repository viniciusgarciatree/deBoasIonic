import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialUmPage } from './tutorial-um.page';

describe('TutorialUmPage', () => {
  let component: TutorialUmPage;
  let fixture: ComponentFixture<TutorialUmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialUmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialUmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
