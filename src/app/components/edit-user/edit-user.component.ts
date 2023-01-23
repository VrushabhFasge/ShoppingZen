import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/services/user-data.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private activeRoute : ActivatedRoute, private dbService:UserDataService,private router : Router) { }

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe( (param)=>{
      this.id = param.get('id')
      console.log(this.id)
  })

  //getting the latest dta from db
  this.dbService.getSpecificRecord(this.id).subscribe( (res)=>{
    console.log(res)
    this.empObj = {...res}
  })

  }

  id:any
  empObj : any

  putData(empData:any){
    const emp = {
      id : this.id,
      Name : empData.name,
      Password : empData.Password,
      Address : empData.Address,
      Phone : empData.Phone
    }
    console.log("empObj is",emp)

    if (emp.Name != "" && emp.Password != ""){
      this.dbService.updateRecord(emp).subscribe(()=>{
        console.log("data updated")
        this.router.navigate(['../home'])
      })
    }
    else{
      alert("Please enter valid name/password")
    }


    

  }

}
