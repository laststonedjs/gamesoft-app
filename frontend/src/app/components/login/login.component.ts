import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/UserService.service';
import { User }  from '../registration/User.class';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private router:Router, private toastr: ToastrService,
  private userService: UserService) { }

  ngOnInit(): void {
  }

login(){
    if(this.user.username && this.user.password){
      this.userService.login(this.user).subscribe((response: User)=>{
        if(response) {
          this.user = response;
          delete this.user.password;
          localStorage.setItem('loggedUser', JSON.stringify(this.user));
          this.router.navigateByUrl('home');
        } else {
          this.toastr.warning('Incorrect username or password');
        }
      });
    } else {
      this.toastr.error('You need to enter Email and Password!!!');
    }
}

signUp(){
    this.router.navigateByUrl('registration');
}

}


