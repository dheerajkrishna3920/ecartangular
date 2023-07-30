import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class   DataService {


  //object to store incoming data
  searchInput=new BehaviorSubject('')

  constructor(private http:HttpClient) { }

  //api call to acess all products datas
  viewAllProducts(){
    return this.http.get('http://localhost:3001/products')
  }

  //api to acesss ingle product data
  viewProduct(id:any){
    return this.http.get('http://localhost:3001/products/'+id)
  }

  //api to add new product
  addNewProduct(productObject:any){
    return this.http.post('http://localhost:3001/products',productObject)
  }

 // api to delete product
 deleteProduct(id:any){
  return this.http.delete('http://localhost:3001/products/'+id)
}

 // api to edit product
 updateProduct(id:any,pdata:any){
  return this.http.patch('http://localhost:3001/products/'+id,pdata)
}

}
