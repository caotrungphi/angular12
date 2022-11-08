import { Component, OnInit } from '@angular/core';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public size: number = 300;
  public listOfPosition: NzPlacementType[] = ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'];
  public options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
              isLeaf: true
            }
          ]
        },
        {
          value: 'ningbo',
          label: 'Ningbo',
          isLeaf: true
        }
      ]
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
              isLeaf: true
            }
          ]
        }
      ]
    }
  ];
  
  public otherOptions = [
    {
      value: 'fujian',
      label: 'Fujian',
      children: [
        {
          value: 'xiamen',
          label: 'Xiamen',
          children: [
            {
              value: 'Kulangsu',
              label: 'Kulangsu',
              isLeaf: true
            }
          ]
        }
      ]
    },
    {
      value: 'guangxi',
      label: 'Guangxi',
      children: [
        {
          value: 'guilin',
          label: 'Guilin',
          children: [
            {
              value: 'Lijiang',
              label: 'Li Jiang River',
              isLeaf: true
            }
          ]
        }
      ]
    }
  ];
  
  nzOptions: any[] | null = null;
  values: any[] | null = null;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.nzOptions = this.options;
    }, 100);
  }

  changeNzOptions(): void {
    if (this.nzOptions === this.options) {
      this.nzOptions = this.otherOptions;
    } else {
      this.nzOptions = this.options;
    }
  }
}
