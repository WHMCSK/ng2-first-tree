import { Component, OnInit } from '@angular/core';

import { SimpleTreeService } from '../../local_data_services/simple.tree.service';

@Component({
  selector: 'demo',
  styleUrls: ['./document.component.scss'],
  templateUrl: './document.component.html',
})
export class DocumentComponent {
  treedata = [];
  left: string = '{';
  right: string = '}';
  peizhiDatas: any;

  settings = {
    menuDatas: [
      {title: 'add', text: '新增'},
      {title: 'edit', text: '修改'},
      {title: 'delete', text: '删除'},
    ],
    filter: {
      isShow: false,
    },
    foldedExpansionIsShow: false,

    selectBgc: {            // 选中行背景色
      open: true,           // 是否开启
      bgc: '#00abff',        // 配置背景色
      lv1: false,            // 第一级是否开启选中背景色 
    },
  };

  constructor(private dp: SimpleTreeService) {
    this.treedata = dp.getASimpleTree();
  }



  ngOnInit(): void {


  }

  nodeClick(e){
    console.log(e);
    
  }

  nodeMenuClick(e){
    
    if(e.title == 'add'){
      console.log(e.title,e.data);
    }else if(e.title == 'delete'){
      console.log(e.title,e.data);
    }else{
      console.log(e.title,e.data);
    }
    
  }
}