import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  milo:string;
  miloArray: string[] = [] ;

  constructor(public router: Router) { }

  ngOnInit() {}

 addToArray()
  {
    this.miloArray.push(this.milo);
    this.milo='';
    


  }

  remove(i) {
    this.miloArray.splice(i, 1);
  }
  
  goToDetails()
  {
  this.router.navigateByUrl('details');

  }
}
