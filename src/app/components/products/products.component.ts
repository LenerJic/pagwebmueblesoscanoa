import { Component, OnInit } from '@angular/core';
import { PagwebinfoService } from 'src/app/services/pagwebinfo.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  lstcategorias: any;
  lstproductos: any;

  constructor(private pagwebService: PagwebinfoService) {}

  ngOnInit(): void {
    this.pagwebService.getCategorias().subscribe((data:any)=>{
      this.lstcategorias = data.result;
      console.log(this.lstcategorias);
    });
    this.pagwebService.getProductos().subscribe((data:any)=>{
      this.lstproductos = data.result;
      console.log(this.lstproductos);
    });
  }
}
