import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OptionsComponent } from './options/options.component';
import { PlaygroundComponent } from './playground/playground.component';

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "play", component: PlaygroundComponent },
  { path: "options", component: OptionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
