import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() heroe:any = {}
  @Input() index:number

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  moreDetails(){
    console.log(this.index)
    this.router.navigate(['/detail', this.index])
  }

}
