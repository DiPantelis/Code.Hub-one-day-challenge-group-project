import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchmoviesComponent } from './searchmovies/searchmovies.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'searchMovies', component:SearchmoviesComponent},
  {path: 'movie', component:MovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
