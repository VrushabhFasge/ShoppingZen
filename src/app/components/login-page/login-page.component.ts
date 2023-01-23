import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/services/user-data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private dbService : UserDataService,private router : Router) { }

  ngOnInit(): void {
  }

  createAcount(userData:any){
    console.log(userData)
    const emp = {
      "Name" :userData.name !="" ? userData.name: null,
      "Password" : userData.pass !="" ? userData.pass : null
    }

    
    if (emp.Name != null && emp.Password != null){
      this.dbService.addRecords("userCredentials",emp).subscribe( (res) => {
      alert("user record added successfully !!!")
      this.router.navigate(['/login'])
    } )
    }
    else{
      alert("please enter the username password and email.")
    }
    
  }

}
