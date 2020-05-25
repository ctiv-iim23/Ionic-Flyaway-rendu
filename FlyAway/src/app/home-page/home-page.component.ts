import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit
{

  

  constructor(public router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit()
  {}
    login()
    {
        this.router.navigateByUrl('login');
     
    }
  
      signin()
      {
        this.router.navigateByUrl('register');
      }
  }

