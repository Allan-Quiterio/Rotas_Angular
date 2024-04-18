import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Routing } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, CursosComponent, HomeComponent, LoginComponent],
  imports: [BrowserModule, Routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
