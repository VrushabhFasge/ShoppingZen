import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/services/user-data.service';

@Component({
  selector: 'app-existing-login',
  templateUrl: './existing-login.component.html',
  styleUrls: ['./existing-login.component.css']
})
export class ExistingLoginComponent implements OnInit {

  constructor(private dbService : UserDataService, private router : Router) { }

  ngOnInit(): void {
  }

  userId :any
  userPass : any
  userRecords : any 

  userDbId : any

  userlogin(loginData:any){
    console.log(loginData)
    this.userId = loginData.name
    this.userPass = loginData.pass

    //get the list of records here
    this.dbService.getRecords("userCredentials").subscribe( (results) =>{
      this.userRecords = results

      const data = this.userRecords.filter( (item:any)=>{
        return item.Name == this.userId && item.Password == this.userPass
      })
      if(data.length > 0){
        this.userDbId = data[0].id
        this.dbService.signIn(this.userId)
        this.router.navigate(['/home'])
        sessionStorage.setItem("dbId",this.userDbId)
      }
      else{
        alert('invalid login')
      }
  })
  }
}
