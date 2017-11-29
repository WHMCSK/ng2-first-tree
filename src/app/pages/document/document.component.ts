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
    menu: [],
    nodeclick: () => { },

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
}