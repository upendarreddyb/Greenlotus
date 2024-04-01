import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items: any;
  constructor(private apiService: ApiService) { }
   IMG_URL = "http://localhost:3000/";
  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.apiService.getItems().subscribe(items => {
      this.items=items.message;
    })
  }

}
