import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './UserService.service';


@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {
    
    constructor(private userService: UserService, private router:Router) { }
    
    canActivate(): boolean {
        const loggedUser = this.userService.loggedUser;
        if(!loggedUser.id){
            this.router.navigateByUrl('login');
            return false;
        } else {
            return true;
        }
    }

}