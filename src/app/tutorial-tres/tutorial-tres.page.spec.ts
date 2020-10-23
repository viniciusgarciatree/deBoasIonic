import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialTresPage } from './tutorial-tres.page';

describe('TutorialTresPage', () => {
  let component: TutorialTresPage;
  let fixture: ComponentFixture<TutorialTresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialTresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialTresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
