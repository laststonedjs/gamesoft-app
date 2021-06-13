import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { UserService } from 'src/app/services/UserService.service';
import { Product } from '../product/Product.class';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

allProducts: Product[];

  constructor(private userService: UserService, private restApi: RestApiService) { }

  ngOnInit(): void {
    this.restApi.getBasketForUser(this.userService.loggedUser.id).subscribe((response: Product[])=>{
     this.allProducts = response;
      
    });
  }

}
