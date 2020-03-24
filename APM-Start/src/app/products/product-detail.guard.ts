import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {


  //as navigation requires a router, we must inject Router
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,//allows us to read the param from the url
    // provides router state information. Can return observable | promise | bool
    state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = +next.url[1].path
      if (isNaN(id) || id < 1) {
        //Normally we woudl re-direct to a 404
        alert('HELP! I\'m stuck in here');
        this.router.navigate(['/products']);
        return false 
      }
      console.log(id)
    return true;
  }
  
}
