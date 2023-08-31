import { Component,OnInit } from '@angular/core';
import { WarehouseService } from './warehouse.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'car-inventory-management';
  constructor(private service:  WarehouseService){
     
  }
  ngOnInit(): void {
    this.service.getAllWarehouses().subscribe(warehouses =>console.log(warehouses));
  }
  
}

