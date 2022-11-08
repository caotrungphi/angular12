import { Component, OnInit } from '@angular/core';
import { NzImageService } from 'ng-zorro-antd/image';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';

import { NzTreeFlatDataSource, NzTreeFlattener } from 'ng-zorro-antd/tree-view';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UntypedFormBuilder } from '@angular/forms';




interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

interface TreeNode {
  name: string;
  disabled?: boolean;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    name: 'parent 1',
    children: [
      {
        name: 'parent 1-0',
        disabled: true,
        children: [{ name: 'leaf' }, { name: 'leaf' }]
      },
      {
        name: 'parent 1-1',
        children: [{ name: 'leaf' }]
      }
    ]
  }
];

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  disabled: boolean;
}

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})



export class IconComponent implements OnInit {
  checked = true;
  date = null;
  demoValue = 3;
  inputValue?: string;
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
  radioValue = 'A';
  tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  value = 3;
  listOfOption: string[] = [];
  listOfSelectedValue = ['a10', 'c12'];
  value1 = 1;
  time: Date | null = null;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);
  list: TransferItem[] = [];
  disabled = false;
  show = true;
  array = [1, 2, 3, 4];

  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 3'
    }
  ];

  expandKeys = ['100', '1001'];
  value2?: string;
  nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];

  private transformer = (node: TreeNode, level: number): FlatNode => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level,
    disabled: !!node.disabled
  });
  selectListSelection = new SelectionModel<FlatNode>(true);

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new NzTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new NzTreeFlatDataSource(this.treeControl, this.treeFlattener);
  

  constructor(
    private nzImageService: NzImageService, 
    private message: NzMessageService, 
    private notification: NzNotificationService,
    private nzMessageService: NzMessageService,
    ) { 
    this.dataSource.setData(TREE_DATA);
    this.treeControl.expandAll();
  }

  hasChild = (_: number, node: FlatNode): boolean => node.expandable;


  ngOnInit(): void {
    const children: string[] = [];
    for (let i = 10; i < 36; i++) {
      children.push(`${i.toString(36)}${i}`);
    }
    this.listOfOption = children;
  

    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        direction: Math.random() * 2 > 1 ? 'right' : undefined
      });
    }
  }


  filterOption(inputValue: string, item: any): boolean {
    return item.description.indexOf(inputValue) > -1;
  }

  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue1 = '';

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue1;
    this.inputValue1 = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: formatDistance(new Date(), new Date())
        }
      ].map(e => ({
        ...e,
        displayTime: formatDistance(new Date(), e.datetime)
      }));
    }, 800);
  }
  
  onClick(): void {
    const images = [
      {
        src: 'https://img.alicdn.com/tfs/TB1g.mWZAL0gK0jSZFtXXXQCXXa-200-200.svg',
        width: '200px',
        height: '200px',
        alt: 'ng-zorro'
      },
      {
        src: 'https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg',
        width: '200px',
        height: '200px',
        alt: 'angular'
      }
    ];
    this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
  }

  loading = false;
  data1 = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];

  change(): void {
    this.loading = true;
    if (this.data.length > 0) {
      setTimeout(() => {
        this.data = [];
        this.loading = false;
      }, 1000);
    } else {
      setTimeout(() => {
        this.data = [
          {
            title: 'Ant Design Title 1'
          },
          {
            title: 'Ant Design Title 2'
          },
          {
            title: 'Ant Design Title 3'
          },
          {
            title: 'Ant Design Title 4'
          }
        ];
        this.loading = false;
      }, 1000);
    }
  }
  
  visible: boolean = false;

  clickMe(): void {
    this.visible = false;
  }

  options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];
  
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  defaultCheckedKeys = ['0-0-0'];
  defaultSelectedKeys = ['0-0-0'];
  defaultExpandedKeys = ['0-0', '0-0-0', '0-0-1'];

    nodes1 = [
    {
      title: '0-0',
      key: '0-0',
      expanded: true,
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
            { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
            { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
          ]
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
            { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
            { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
          ]
        },
        {
          title: '0-0-2',
          key: '0-0-2',
          isLeaf: true
        }
      ]
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
        { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
        { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
      ]
    },
    {
      title: '0-2',
      key: '0-2',
      isLeaf: true
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  visible1 = false;

  open(): void {
    this.visible1 = true;
  }

  close(): void {
    this.visible1 = false;
  }

  createMessage(type: string): void {
    this.message.create(type, `This is a message of ${type}`);
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  createBasicNotification(): void {
    this.notification
      .blank(
        'Notification Title',
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }

  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }

}  
function formatDistance(arg0: Date, datetime: any) {
  throw new Error('Function not implemented.');
}

