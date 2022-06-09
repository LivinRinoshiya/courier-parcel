import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { PickupComponent } from './pickup/pickup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServiceComponent } from './service/service.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpCallInterceptor } from './interceptor';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserComponent } from './user/user.component';
import { PreviousordersComponent } from './previousorders/previousorders.component';
import { PricePipe } from './price.pipe';
import { ContactdashboardComponent } from './contactdashboard/contactdashboard.component';

const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'pickup', component: PickupComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'userdashboard', component: UserdashboardComponent},
  {path: 'admindashboard',component:AdmindashboardComponent},
  {path: 'user',component:UserComponent},
  {path: 'previousorder',component:PreviousordersComponent},
  {path: 'contactboard',component:ContactdashboardComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    PickupComponent,
    LoginPageComponent,
    ContactUsComponent,
    ServiceComponent,
    AdminComponent,
    DashboardComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    UserComponent,
    PreviousordersComponent,
    PricePipe,
    ContactdashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpCallInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
enableProdMode()