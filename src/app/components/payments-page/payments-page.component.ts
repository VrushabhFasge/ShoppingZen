import { Component, OnInit, ViewChild,AfterViewInit, Inject, ElementRef } from '@angular/core';
import { UserDataService } from 'src/services/user-data.service';
import { CartPageComponent } from '../cart-page/cart-page.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-payments-page',
  templateUrl: './payments-page.component.html',
  styleUrls: ['./payments-page.component.css']
})
export class PaymentsPageComponent implements OnInit,AfterViewInit {

  @ViewChild('preload') prelod!:ElementRef
  @ViewChild('ccrd') ccrd !: ElementRef
  constructor(private gblService : UserDataService) { }


  ngOnInit(): void {
    this.gblService.getCartItems2().subscribe((res)=>{
      this.cartitm = res
      console.log(res)
      for (let index = 0; index < Object.keys(this.cartitm).length; index++) {
        console.log(this.cartitm[index].Price)
        this.cartSum+=this.cartitm[index].Price
        
      }
    })

   

    this.cardName = document.getElementById('svgname')
    this.cardNumber = document.getElementById('svgnumber')
    this.expDate = document.getElementById('svgexpire')
    this.preld = document.querySelector('.preload')
    this.ccDiv =  document.querySelector('.creditcard')

  }

  ngAfterViewInit(): void {
    this.prelod.nativeElement.classList.remove('preload');
    this.ccrd.nativeElement.addEventListener('click',  () => {
        if (this.ccrd.nativeElement.classList.contains('flipped')) {
            this.ccrd.nativeElement.classList.remove('flipped');
        } else {
            this.ccrd.nativeElement.classList.add('flipped');
        }
    })

  }

  cartSum : number = 0
  cartitm : any
  cardName:any
  cardNumber : any
  expDate :any
  securitycode:any

  preld : any
  ccDiv : any

  cardDetails : any = {}
  

  

  nameInput(name:any) {
    console.log(this.cardName)
    this.cardName.innerHTML = name
    this.cardDetails['cardName'] = name
    // console.log(this.cardDetails)
   
  }

  cdNumber(number:any){
    this.cardNumber.innerHTML = number
    this.cardDetails['cardNumber'] = number

  }

  expiryDate(date:any){
    this.expDate.innerHTML = date
    this.cardDetails['expiryDate'] = date

  }

      //define the color swap function
  swapColor(basecolor:any) {
      document.querySelectorAll('.lightcolor')
          .forEach(function (input) {
              input.setAttribute('class', '');
              input.setAttribute('class', 'lightcolor ' + basecolor);
          });
      document.querySelectorAll('.darkcolor')
          .forEach(function (input) {
              input.setAttribute('class', '');
              input.setAttribute('class', 'darkcolor ' + basecolor + 'dark');
          });

      this.cardDetails['cardType'] = basecolor
  };
    

  onchg($event:any,val:any){
    this.swapColor(val)
  }

  checkCardDetails(){
    console.log(this.cardDetails)
    if ( Object.keys(this.cardDetails).length == 0){
      Swal.fire('OOPS!', 'Please complete the card details.', 'warning');
    }
    else{
      if (this.cardDetails.cardType != "" && this.cardDetails.expiryDate != "" && this.cardDetails.cardName !="" && this.cardDetails.cardNumber !=""){
        Swal.fire({
          title: 'Are you sure?',
          text: 'Do you want to make payment.',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes.',
          cancelButtonText: 'No',
        }).then((result) => {
          if (result.value) {
            Swal.fire('Order Confirmed!', 'Stay tuned for dispatch mails.', 'success');
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Cancelled', 'Could not process your payment', 'error');
          }
        });
      }
      else(
        Swal.fire('Card Error','You missed the card details','error')
      )
    }
  }

  

  

}
