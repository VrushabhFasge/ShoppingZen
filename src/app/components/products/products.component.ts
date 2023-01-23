import { Component, Input, OnInit } from '@angular/core';
import { UserDataService } from 'src/services/user-data.service';
import { HomePageComponent } from '../home-page/home-page.component';
import { BehaviorSubject, catchError, Observable,throwError } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( private homepgComp : HomePageComponent, public dbService: UserDataService, private router:Router) { }

  p:number = 1
  term :any 

  @Input() pData: any
  

  ngOnInit(): void {
  }
  
  trendingProd : any = [
    {"img":"../../../assets/trendingProdImages/pexels-photo-788946.webp","name":"Iphone 12","price":20000,"Description":"this is dynamic description1"},
    {"img":"../../../assets/trendingProdImages/pexels-photo-1087180.webp","name":"Dji MINI Drone","price":45000,"Description":"this is dynamic description2"},
    {"img":"../../../assets/trendingProdImages/pexels-photo-2047905.webp","name":"Apple macbook air","price":100000,"Description":"this is dynamic description3"},
    {"img":"../../../assets/trendingProdImages/photo-camera-subject-photographer-51383.jpeg","name":"Canon DSLR","price":20000,"Description":"this is dynamic description5"},
    {"img":"../../../assets/trendingProdImages/pexels-photo-788946.webp","name":"iPhone 13","price":30000,"Description":"this is dynamic description4"},



  ]

  addToCart(item:any){
    console.log(item)
    const cartItem ={
      "Name":item.name,
      "Description" : item.Description,
      "Price" : item.price,
      "Img" : item.img
    }

    this.dbService.addToCart(cartItem).subscribe( ()=>{
      console.log("product added successfully !!")
      this.successNotification()
      // this.router.navigate(['../cart'])
    })
  }

  successNotification() {
    Swal.fire('Woosshhh', 'Product added to cart!', 'success');
  }
}
