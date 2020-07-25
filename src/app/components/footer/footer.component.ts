import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  show:boolean = false
  me = {
    author:'Mia Salazar',
    description: 'Front end developer junior',
    url: 'www.miasalazar.com'
  }
  technologies:string[] = ['Html', 'Css', 'Javascript', 'Angular']

}
