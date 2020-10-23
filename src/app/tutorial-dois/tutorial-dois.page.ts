import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-dois',
  templateUrl: './tutorial-dois.page.html',
  styleUrls: ['./tutorial-dois.page.scss'],
})
export class TutorialDoisPage implements OnInit {

  constructor(private router: Router) { }

  goTutoriaTres(){
    this.router.navigate(['/tutorial-tres'])
  }

  ngOnInit() {
  }

}
