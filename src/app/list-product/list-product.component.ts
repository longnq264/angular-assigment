import { Component } from '@angular/core';
import { ProjectApiService } from '../projectApi.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css',
})
export class ListProductComponent {
  listProducts: any;

  constructor(private service: ProjectApiService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((res) => {
      this.listProducts = res;
    });
  }
}
