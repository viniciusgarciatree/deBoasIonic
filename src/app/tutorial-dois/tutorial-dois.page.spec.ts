import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialDoisPage } from './tutorial-dois.page';

describe('TutorialDoisPage', () => {
  let component: TutorialDoisPage;
  let fixture: ComponentFixture<TutorialDoisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialDoisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialDoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
