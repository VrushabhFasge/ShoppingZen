import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/services/user-data.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private dbService:UserDataService,private router:Router) { }

  ngOnInit(): void {
  }

 userDbId : any = sessionStorage.getItem("dbId")
 data:any

  logOut = ()=>{
    console.log('removed userkey')
    this.dbService.signOut()
    this.router.navigate(['/login'])
  }

  myFunc(id:any){
    console.log(id)
  }

  getMessage(value:any){
    console.log(value)
    this.data = value
  }

  goToCart(){
    this.router.navigate(['../cart'])
  }

}
