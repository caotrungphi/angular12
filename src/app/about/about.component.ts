import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public name = 'cao trung phi';
  public age = 12;
  public distric: string[] = [];
  public dataVietnam = [
    {
      city: 'Tỉnh/Tp',
      distric: []
    },
    {
      city: 'Thành phố Hồ Chí Minh',
      distric: [
        "Quận 1",
        "Quận 2",
        "Quận 3",
        "Quận 4",
        "Quận 5",
        "Quận 6",
        "Quận 7",
        "Quận 8",
        "Quận 9",
        "Quận 10",
        "Quận 11",
        "Quận 12",
        "Quận Bình Tân",
        "Quận Bình Thạnh",
        "Quận Gò Vấp",
        "Quận Phú Nhuận",
        "Quận Tân Bình",
        "Quận Tân Phú",
        "Quận Thủ Đức",
        "Huyện Bình Chánh",
        "Huyện Cần Giờ",
        "Huyện Củ Chi",
        "Huyện Hóc Môn",
        "Huyện Nhà Bè"
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  change(e: any): void {
    let result  = this.dataVietnam.find(data => data.city === e.target.value)?.distric;
    if(result)
    this.distric = result;
  }
}
