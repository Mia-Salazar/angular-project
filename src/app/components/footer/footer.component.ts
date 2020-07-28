import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  show:boolean = false
  encrypt:boolean = false
  me = {
    author:'mia salazar',
    description: 'Front end developer junior',
    url: 'http://www.miasalazar.com'
  }
  technologies:string[] = ['Html', 'Css', 'Javascript', 'Angular']

}
