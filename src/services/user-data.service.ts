import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  baseURL:any = 'http://localhost:3000'

  tbl :any = "userCredentials"
  productTable :any = "Products"
  cartItems:any

  // getSpecificRecord(userId:any):Observable<any>{
  //   let userRecordURL = `${this.baseURL}/${userId}`
  //   return this.http.get<any>(userRecordURL)
  //                   .pipe(catchError(this.handleError))
  // }

  // handleError(error:any){
  //   return throwError(error.message || "Server Error")
  // }

  //get all user records here
  getRecords(tblName:any){
    let tblURL = `${this.baseURL}/${tblName}`
    return this.http.get(tblURL)
  }

  addRecords(tblName:any,empData:any){
    let tblURL = `${this.baseURL}/${tblName}`
    return this.http.post(tblURL,empData)
  }

  signIn(user:any){
    sessionStorage.setItem("userkey",user)
  }
  signOut(){
    sessionStorage.removeItem("userkey")
  }

  //getSpecificRecord
  getSpecificRecord(id:any){
    let userDataURL = `${this.baseURL}/${this.tbl}/${id}`
    return this.http.get(userDataURL)
  }

  //update records

  updateRecord(empData:any){
    let userDataURL = `${this.baseURL}/${this.tbl}/${empData.id}`
    console.log(userDataURL)
    return this.http.put(userDataURL,empData)
    
  }

  addToCart(cartItem:any){
    let tblURL = `${this.baseURL}/${this.productTable}`
    return this.http.post(tblURL,cartItem)
  }

  getItems(){
    let tblURL = `${this.baseURL}/${this.productTable}`
    return this.http.get(tblURL)
  }

  deleteItem(productId:any){
      let tableURL:string = `${this.baseURL}/${this.productTable}/${productId}`
      return this.http.delete(tableURL)
  
  }

  setCartItems(data:any){
    console.log("setting data",data)
    this.cartItems = data
    console.log("printing cartItmes",this.cartItems)
  }

  getCartItems(){
    console.log("retruning cartiems",this.cartItems)
    return this.cartItems
  }

  getCartItems2(){
    let tableURL :string = `${this.baseURL}/${this.productTable}`
    console.log(tableURL)
    return this.http.get(tableURL)
  }

}
