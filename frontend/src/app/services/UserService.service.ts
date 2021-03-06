import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../components/registration/User.class';


@Injectable({providedIn: 'root'})

export class UserService {

    
    serverUrl: string = environment.serverUrl;

    constructor(private http: HttpClient) { }
    
    register(user: User){
        return this.http.post(this.serverUrl + "user/register", user);

    }

    login(user: User){
        return this.http.post(this.serverUrl + "user/login", user);
    }

    get loggedUser(): User{
        return JSON.parse(localStorage.getItem('loggedUser')) || new User();
    }

     get isAdminRole(): boolean {
        const user = this.loggedUser;
        return user.role === 'ADMIN' ? true : false;
    }

}