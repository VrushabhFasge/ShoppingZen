import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ExistingLoginComponent } from './components/existing-login/existing-login.component';
import { HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsComponent } from './components/products/products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PriceFormatterPipe } from './pipes/price-formatter.pipe';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import Swal from 'sweetalert2';
import { PaymentsPageComponent } from './components/payments-page/payments-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ExistingLoginComponent,
    HomePageComponent,
    ProductsComponent,
    PriceFormatterPipe,
    CategoriesComponent,
    FooterComponent,
    EditUserComponent,
    CartPageComponent,
    PaymentsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
