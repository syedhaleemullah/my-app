import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/dataTypes';
import { ShopService } from '../../services/shop.service';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrl: './order.component.css',
    standalone: true,
    imports: [NgIf, NgFor, RouterLink]
})
export class OrderComponent implements OnInit{

  public orders: Order[] | undefined
  public orderPresent: boolean = false

  constructor(private shopService: ShopService){}

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.shopService.getUserOrders().subscribe((res:any)=>{
      if(res && res.length){
        this.orders = res[0]
        this.orderPresent = true
        // console.log(this.orderPresent, res.length, res);
      }
      if(res.msg==='No Orders Found'){
        this.orderPresent = false
      }
    })
  }

  cancelOrder(orderId: any){
    this.shopService.deleteOrder(orderId).subscribe((res)=>{
      if(res){
        console.log(res);
        this.getOrders()
      } 
    })
  }
}
