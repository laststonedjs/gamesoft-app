import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../product/Product.class';
import { RestApiService } from 'src/app/services/rest-api.service';
import { UserService } from '../../services/UserService.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  @Input() product!: Product;
 @Output() backToProductEmit = new EventEmitter();
  constructor(private restApi:RestApiService, private userService: UserService,
  private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  backToProducts(){
    this.backToProductEmit.emit();
  }

addToBasket(product: Product) {
  this.restApi.insertToBasket({ userId: this.userService.loggedUser.id, productId: product.id}).subscribe(response =>{
    this.toastr.success('You have successfully added to Cart');
    this.router.navigateByUrl('basket');
    
  });
}
}
