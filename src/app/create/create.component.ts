import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectApiService } from '../projectApi.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  constructor(private service: ProjectApiService, private router: Router) {}

  private isValidData(data: any): boolean {
    const name = data.name.trim();
    return name.length >= 3 && name.length <= 10;
  }

  onCreate(data: any): void {
    if (this.isValidData(data)) {
      this.service.create(data).subscribe(
        (res) => {
          alert('Thêm mới thành công');
          this.router.navigate(['dashboard/list']);
        },
        (error) => {
          console.error('Có lỗi xảy ra khi thêm mới:', error);
          alert('Có lỗi xảy ra khi thêm mới.');
        }
      );
    } else {
      alert('Tên sản phẩm phải có độ dài từ 3 đến 10 ký tự.');
    }
  }
}
