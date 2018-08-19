import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanLoad {

  constructor() { }

  /**
   * True when user is authenticated
   * @method canActivate
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    return false;
  }

  /**
   * True when user is authenticated
   * @method canLoad
   */
  canLoad(route: Route): Observable<boolean> | Promise<boolean> {

    return of(false);
  }
}
