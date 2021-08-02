import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string): void {
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Produto removido com sucesso!');
      this.readProducts();
    })
  }

}
