import { Component } from '@angular/core';
import { ProjectApiService } from '../projectApi.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tablelistadmin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tablelistadmin.component.html',
  styleUrl: './tablelistadmin.component.css',
})
export class TablelistadminComponent {
  listProducts: any;

  constructor(private service: ProjectApiService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((res) => {
      this.listProducts = res;
    });
  }

  onDelete(id: any) {
    if (confirm('Are you sure?')) {
      this.service.delete(id).subscribe((res) => {
        alert('Success!');
        this.ngOnInit();
      });
    }
  }
}
