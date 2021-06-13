import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BasketComponent } from './components/basket/basket.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotfoundComponent } from './components/notfound/notfound.component'; 
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './services/AuthGuard.service';

const routes: Routes = [
    { path:'home', component:HomeComponent, canActivate: [AuthGuard] },
    { path:'products', component:ProductComponent, canActivate: [AuthGuard] },
    { path:'basket', component:BasketComponent, canActivate: [AuthGuard] },
    { path:'profile', component:ProfileComponent, canActivate: [AuthGuard] },
    { path:'admin', component:AdminComponent, canActivate: [AuthGuard] },
    { path:'login', component:LoginComponent },
    { path:'registration', component:RegistrationComponent },
    { path:'', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
