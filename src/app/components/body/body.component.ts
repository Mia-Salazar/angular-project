import { Component } from '@angular/core'

@Component({
    selector: 'body',
    templateUrl:'./body.component.html'
})

export class Body{
    show:boolean = true
    text:string = 'This is a text'
    technologies:string[] = ['Html', 'Css', 'Javascript', 'Angular']

}