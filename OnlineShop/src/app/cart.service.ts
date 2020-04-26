import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsUrl = 'api/iteams';
  items = [];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  deleteItem (item: CartComponent | number): Observable<CartComponent> {
    const id = typeof item === 'number' ? item : item;
    const url = `${this.itemsUrl}/${id}`;

    return this.http.delete<CartComponent>(url, this.httpOptions).pipe(
      catchError(this.handleError<CartComponent>('delete'))
    );
  }
  handleError<T>(arg0: string): (err: any, caught: Observable<any>) => import("rxjs").ObservableInput<any> {
    throw new Error("Method not implemented.");
  }



  constructor(
    private http: HttpClient
  ) { }
}
