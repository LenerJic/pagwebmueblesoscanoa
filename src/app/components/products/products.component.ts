import { Component, OnInit } from '@angular/core';
import { PagwebinfoService } from 'src/app/services/pagwebinfo.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  responsiveOptions: any;
  lstcategorias: any;
  lstproductos: any;

  constructor(private pagwebService: PagwebinfoService) {}

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
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
