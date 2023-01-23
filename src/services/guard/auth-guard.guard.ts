import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean{

    if(sessionStorage.getItem("userkey") != null ){return true}
    return false;
  }
  
}
