import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  serverUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(this.serverUrl + "product/all");
  }

  searchForProducts(searchCriteria: any){
    return this.http.post(this.serverUrl + "product/search", searchCriteria);
  }

  insertToBasket(request){
     return this.http.post(this.serverUrl + "product/add-to-basket", request);
  }

  getBasketForUser(userId: number){
     return this.http.get(this.serverUrl+ "basket/products?userId="+ userId);
  }

}
