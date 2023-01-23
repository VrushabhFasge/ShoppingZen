import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/services/user-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(private gblService : UserDataService,private router : Router) { }

  ngOnInit(): void {
    this.gblService.getItems().subscribe( (res)=>{
      this.cartItems = res
      this.gblService.setCartItems(res)
      console.log(res)
    } )
  }

  cartItems :any =[]

  ct :string = "hello"


  // deleteItem(id:any){
  //   if(confirm("Are you sure you want to delete item ?") == true){
  //     this.gblService.deleteItem(id).subscribe(()=>{
  //       console.log("item deleted successfully")
  //       this.ngOnInit()
  //     })
  //   }
    
  // }

  returnHome(){
    this.router.navigate(['/','home'])
  }

  checkOut(){
    this.router.navigate(['/','checkout'])
  }

  deleteConfirmation(id:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This product will be removed.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.gblService.deleteItem(id).subscribe( ()=>{
          this.ngOnInit()
        })
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }
}
