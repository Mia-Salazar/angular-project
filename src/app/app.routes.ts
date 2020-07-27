import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { HeroesComponent } from './heroes/heroes.component'
import { DetailComponent } from './detail/detail.component'
import { ResultComponent } from './result/result.component'

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'detail/:id', component: DetailComponent},
    {path: 'result/:element', component: ResultComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)