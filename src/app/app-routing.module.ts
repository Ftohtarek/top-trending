import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { DetailsComponent } from './component/details/details.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MoviesComponent } from './component/movies/movies.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { RegisterComponent } from './component/register/register.component';
import { TvComponent } from './component/tv/tv.component';
import { AuthguardService } from './servies/authguard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , canActivate :[AuthguardService]},
  { path: 'movies', component: MoviesComponent ,canActivate :[AuthguardService]},
  { path: 'tv', component: TvComponent ,canActivate :[AuthguardService]},
  { path: 'about', component: AboutComponent },
  { path: 'details/:mediaType/:id', component: DetailsComponent ,canActivate :[AuthguardService]},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
