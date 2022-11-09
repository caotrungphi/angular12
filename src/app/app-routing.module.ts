import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home',      component: HomeComponent },
  { path: '',      component: PageNotFoundComponent },
  { path: '**',      component: PageNotFoundComponent },
  { path: '**',      component: TemplatedrivenformComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
