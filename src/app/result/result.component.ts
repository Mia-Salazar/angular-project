import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesServices } from '../services/heroes.services'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  term:string
  resultElements:any = {}

  constructor(
    private activatedRoute:ActivatedRoute,
    private service:HeroesServices
  ) { 
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(
      params =>{
        this.term = params['element']
        console.log(params['element'], 'params')
        this.resultElements = this.service.seachElement(params['element'])
        console.log(this.resultElements, 'details')
      }
    )
  }

}
