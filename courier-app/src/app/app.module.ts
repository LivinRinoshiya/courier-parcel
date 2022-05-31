import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { SignupComponent } from './signup/signup.component';
import { PickupComponent } from './pickup/pickup.component';
import { ReactiveFormsModule } from '@angular/forms';
import {enableProdMode} from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServiceComponent } from './service/service.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreviousComponent } from './previous/previous.component'

const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'about', component: AboutComponent},
  {path: 'pickup', component: PickupComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'dashboard', component: DashboardComponent},


  

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    FeedbackComponent,
    SignupComponent,
    PickupComponent,
    LoginPageComponent,
    ContactUsComponent,
    ServiceComponent,
    AdminComponent,
    DashboardComponent,
    PreviousComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
enableProdMode()