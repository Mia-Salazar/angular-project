
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DictionaryService } from '../services/dictionary.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  joke: string
  jokeAnimals: string

  constructor(private http: HttpClient, private dictionaryService: DictionaryService) {
    console.log('constructor')
    this.http.get('https://api.jokes.one/jod')
    .subscribe((el:any) =>{
      this.joke = el.contents.jokes[0].joke.text
      console.log(el)
    })

    this.http.get('https://api.jokes.one/jod?category=animal')
    .subscribe((el:any) =>{
      this.jokeAnimals = el.contents.jokes[0].joke.text
      console.log(el)
    })
  }

  ngOnInit() {
    this.dictionaryService.getConfig()
      .subscribe((r:any) => {
        console.log(r)
      });
  }



}
