import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'header',
    templateUrl: './header.component.html'

})

export class Header {
    constructor( private router:Router){
    }
    
    seachElement(element:string){
        this.router.navigate(['/result', element])
    }

}