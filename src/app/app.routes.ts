import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TransferComponent } from './pages/home/transfer/transfer.component';
import { ProfileComponent } from './pages/home/profile/profile.component';
import { UsrComponent } from './pages/login/usr/usr.component';
import { SignupComponent } from './pages/login/signup/signup.component';
import { ChangepasswordComponent } from './pages/login/changepassword/changepassword.component';
import { loginGuard } from './guard/login.guard';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent, canActivate: [loginGuard], children: [
            {
                path: 'transfer', component: TransferComponent
            },

            {
                path: 'profile', component: ProfileComponent
            }
        ]
    },
    {
        path: 'login', component: LoginComponent, children: [
            {
                path: '', component: UsrComponent
            },
            {
                path: 'signup', component: SignupComponent
            },
            {
                path: 'changepassword', component: ChangepasswordComponent
            }
        ]
    },
    {
        path: '', pathMatch: 'full', redirectTo: 'login'
    },
    {
        path: '**', pathMatch: 'full', redirectTo: 'login'
    }

];
