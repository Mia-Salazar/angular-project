import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroes } from '../services/heroes.services'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes:Heroes[]= []

  constructor(private _heroesService:HeroesServices ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.accessHeroes()
    console.log(this.heroes)
  }

}
