import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterjobComponent } from './registerjob/registerjob.component';
import { RegisterbesionComponent } from './registerbesion/registerbesion.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'  },
{path:'home', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'registerjob',component:RegisterjobComponent},
{path:'registerbesion',component:RegisterjobComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterjobComponent,
    RegisterbesionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
