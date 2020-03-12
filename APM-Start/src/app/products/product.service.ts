import {Injectable} from '@angular/core'
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs'
import {catchError, tap} from 'rxjs/operators'

@Injectable(
    {
        providedIn: 'root'
    }
)

//unless marked private, any property is accessible to any component that uses
// this service
export class ProductService {
    private productUrl = 'api/products/products.json'

    constructor(private http: HttpClient) {}

    //this functon now returns an OBSERVABLE
    //so any class that now needs product data
    //can call our service, and subscribe to the returned Observable
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError) //CATCH <<<-----

        )
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = ' ';
        if (err.error instanceof ErrorEvent) { //is A an instance of class B
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is:
            ${err.message}`
        }
        console.error(errorMessage);
        return throwError(errorMessage)  //THROW -->>>>>
    }


}