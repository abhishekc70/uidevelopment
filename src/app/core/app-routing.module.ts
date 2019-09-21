
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent } from '../components/home/home.component';

import {PortfolioComponent } from '../components/portfolio/portfolio.component';
import {ContactComponent } from '../components/contact/contact.component';
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [ 

    {path: 'home', component: HomeComponent },
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'contact', component: ContactComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home' }




 ]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule {}