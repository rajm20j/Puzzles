import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EquationService } from './playground/equation.service';
import { PlaygroundComponent } from './playground/playground.component';
import { OptionsComponent } from './options/options.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PlaygroundComponent,
    OptionsComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EquationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
