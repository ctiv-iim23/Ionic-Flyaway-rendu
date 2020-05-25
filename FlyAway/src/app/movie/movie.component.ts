import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import {Movie} from "../model/movie";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit
{

  movies: Movie[] = [];
  constructor(public router: Router, public afAuth: AngularFireAuth, public firestore: AngularFirestore) { }

  ngOnInit()
  {
    let user = localStorage.getItem('user');
    console.log(user);
    if (!user)
    {
      this.router.navigateByUrl('login');
    }
    this.getMovies();
  }

  async getMovies()
  {
      this.firestore.collection('film').snapshotChanges().subscribe(data => {
        this.movies = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as unknown as Movie;
        });
      });


  }

  logOut()
  {
    this.afAuth.auth.signOut().then((user) => {
      localStorage.clear();
      this.router.navigateByUrl('login');
    })
  }
}
