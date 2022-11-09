import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public traicay = [
    {ten: 'cam', gia: 20, giamgia: true},
    {ten: 'nho', gia: 12, giamgia: false},
    {ten: 'quýt', gia: 34, giamgia: true},
    {ten: 'sài', gia: 21, giamgia: false},
    {ten:  'mận', gia: 25, giamgia: true},
    {ten: 'ổi', gia: 112, giamgia: true},
    {ten: 'lê', gia: 12, giamgia: false},
    {ten: 'nhản', gia: 111, giamgia: true}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
