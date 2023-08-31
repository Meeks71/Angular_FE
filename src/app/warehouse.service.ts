import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http: HttpClient) {
       
   }
   getAllWarehouses(){
    return this.http.get("http://localhost:8080/warehouses")
   }
}
