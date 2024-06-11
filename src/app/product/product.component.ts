import { Component } from '@angular/core';
import { ProjectApiService } from '../projectApi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  id = 0;
  data: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: ProjectApiService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.getDetail(this.id).subscribe((res) => {
      this.data = res;
    });
  }
}
