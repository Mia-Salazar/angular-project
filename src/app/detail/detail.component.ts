import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesServices } from '../services/heroes.services'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent {

  detailElement:any = {}

  constructor(
    private activatedRoute:ActivatedRoute,
    private service:HeroesServices
  ) { 
    this.activatedRoute.params.subscribe(
      params =>{
        console.log(params, 'params')
        this.detailElement = this.service.getDetailId(params['id'])
        console.log(this.detailElement, 'details')
      }
    )

  }

}
