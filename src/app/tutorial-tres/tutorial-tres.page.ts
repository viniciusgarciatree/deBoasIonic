import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-tres',
  templateUrl: './tutorial-tres.page.html',
  styleUrls: ['./tutorial-tres.page.scss'],
})
export class TutorialTresPage implements OnInit {

  constructor(private router:Router) { }

  goObjetivos(){
    this.router.navigate(['/objetivos'])
  }

  ngOnInit() {
  }

}
