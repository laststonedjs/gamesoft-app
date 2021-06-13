import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/UserService.service';
import { User }  from './User.class';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();

  constructor(private router:Router, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  saveUser(){
    
    if(this.user.username && this.user.password){
      this.userService.register(this.user).subscribe((response:number) =>{
        this.user.id = response;
        this.toastr.success('Successful registration');
        this.router.navigateByUrl('login');

      });
    }
  }

  backToLogin(){
    this.router.navigateByUrl('login');
  }
}
