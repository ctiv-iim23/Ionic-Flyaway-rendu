import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
          this.router.navigateByUrl('home');
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