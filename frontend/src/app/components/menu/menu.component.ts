import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/UserService.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('login');
  }

}
