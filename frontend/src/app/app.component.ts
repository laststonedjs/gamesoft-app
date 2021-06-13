import { Component } from '@angular/core';
import { UserService } from './services/UserService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gamesoft';

  constructor(public userService: UserService){}
}
