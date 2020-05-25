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

  email     : string;
  password  : string;

  constructor(public router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit()
  {
    this.afAuth.authState.subscribe(user =>
    {
      if (user)
      {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('');
      }
      else
        {
          localStorage.setItem('user', null);
        }
  });

  }

  login()
  {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then((data) => {

      console.log(`congratulation you're in ! ${data}`);
    }, (err) => {
      alert(err);
    })
  }

  toRegister()
  {
    this.router.navigateByUrl('register').then((data) => {
      console.log(data);
    });
  }
}
