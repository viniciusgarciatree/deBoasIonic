import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-um',
  templateUrl: './tutorial-um.page.html',
  styleUrls: ['./tutorial-um.page.scss'],
})
export class TutorialUmPage implements OnInit {

  constructor(private router: Router) { }
  
  goTutoriaDois(){
    this.router.navigate(['/tutorial-dois'])
  }

  ngOnInit() {
  }

}
