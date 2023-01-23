import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  categories : any = ['Electronics','Fashion','Healthcare','Home Decor','Pet Care','Books and Education', 'Music,Video Gaming', 'Deals and Savings','Groceries','Office and Professional','Gifting','Sell on ShoppingZen']

  ngOnInit(): void {
  }

}
