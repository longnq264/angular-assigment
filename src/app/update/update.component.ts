import { Component } from '@angular/core';
import { ProjectApiService } from '../projectApi.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  dataEdit: any;
  id = 0;
  constructor(
    private service: ProjectApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getDetail(this.id).subscribe((res) => {
      this.dataEdit = res;
    });
  }
  onUpdate(data: any): void {
    this.service.update(this.id, data).subscribe((res) => {
      alert('Success!');
      this.router.navigate(['dashboard/list']);
      console.log(data);
    });
  }
}
