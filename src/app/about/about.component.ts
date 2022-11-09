import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public name = 'cao trung phi';
  public age = 12;
  constructor() { }

  ngOnInit(): void {
  }

}
