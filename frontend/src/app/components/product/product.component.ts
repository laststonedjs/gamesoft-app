import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Product }  from './Product.class';
import { SearchProduct } from './SearchProduct.class';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = []; 
  selectedProduct!: Product;
  collapseTab:string = 'filter';
  searchProduct: SearchProduct;


  constructor(private restApi: RestApiService) { }

  ngOnInit(): void {
    this.searchProduct = new SearchProduct();
    this.getAll();
  }

  searchProducts(){
   
    this.restApi.searchForProducts(this.searchProduct).subscribe((response: Product []) => {
            this.products = response;
            
  });
    
  }

  clearSearchForm(){
    this.searchProduct = new SearchProduct();
    this.getAll();
  }


getAll(){
   this.restApi.getAllProducts().subscribe((response:Product[]) => {
            this.products = response;
            
  });
}

showMore(product: Product){
  this.selectedProduct = product;

}
  
collapseFilter(tab:string){
  this.collapseTab = tab;
  
}

}
