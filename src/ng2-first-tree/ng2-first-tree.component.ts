import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';

import { deepExtend } from './lib/helpers';

@Component({
  selector: 'ng2-first-tree',
  styleUrls: ['./ng2-first-tree.component.scss'],
  templateUrl: './ng2-first-tree.component.html',
})
export class Ng2FirstTreeComponent {
  // 1124更新

  // 默认和取的数据的合并
  newSettings: any;
  // 子组件定义的值传个父组件。可以方在子组件的标签上用、
  @Input() data: any;
  @Input() settings: any;

  // 发射展开折叠事件
  @Output() allFolded = new EventEmitter<any>();
  @Output() allExpansion = new EventEmitter<any>();
  // 发射搜索事件
  @Output() searchEvent = new EventEmitter<any>();
  // 发射节点点击事件 单击/双击/右键
  @Output() nodeClick = new EventEmitter<any>();
  @Output() nodeDblClick = new EventEmitter<any>();
  @Output() nodeMenuClick = new EventEmitter<any>();
  // 判断是不是单击
  isClick: boolean;


  /*
    
  ** 右键菜单部分

  */
  // 右键菜单的显示隐藏
  menuShow: boolean = false;
  // 右键菜单的定位位置
  top: any;
  left: any;
  // 右键的节点数据
  tempMenuData: any;

  // 1124更新结束


  // 默认配置
  defaultSettings = {
    display:{
      displayLength:10,                        //  节点文本显示长度
      displayName:"text",                      //  节点显示字段
      displayNode:5,                           //  显示多少个节点
      nodeHeight:30,                           //  每个节点高度
      yScroll:"auto",                          //  垂直滚动条显示样式
      treeClass:"tree-container",              //  树样式
    },
    menuDatas: [],
    showicon: `icon ion-filing`,             //  子节点展开时的图标， showicon：`icon ion-filing`
    hideicon: `icon ion-folder`,             //  子节点隐藏时的图标， hideicon：`icon ion-folder`
    noChildicon: `icon ion-document-text`,   //  没有子节点时的图标， wenjicon：`icon ion-document-text`
    filter: {                                //  搜索配置  暂时没有
      type: '',                              //  客户端过滤|服务端过滤   serverfilter|clientfilter
      class: '',                             //  搜索框的 类名
      isShow: false,                         //  搜索框是否
    },
    selectBgc: {                             // 选中行背景色
      open: false,                           // 默认关闭
      bgc: '',                               // 配置背景色
      lv1: false,                            // 第一级是否开启选中背景色 
    },
    foldedExpansionIsShow: false,           // 折叠展开是否显示

  }

  constructor(private elementRef: ElementRef) {
    // 点击body关闭右键菜单
    document.body.onclick = (event) => {
      if (this.menuShow === true) {
        this.menuShow = false;
        event.stopPropagation();
      }
    };
  }
  ngOnInit(): void {
    this.newSettings = deepExtend({}, this.defaultSettings, this.settings);
  }

  ngOnChanges(changes: SimpleChange):void {
    if(changes['data'] && changes['data'].currentValue) {
      this.showNode("");
    }
  }

  // 传过来点击者对象。
  onNodeClicked(e, obj) {
    this.isClick = false;
    setTimeout(() => {
      if (this.isClick) {
        return;
      }
      if (this.newSettings.selectBgc.open) {
        this.clearBgc();
        obj.isSelect = true;
      }

      this.nodeClick.emit(obj);

      // 在菜单展开的时候，阻止单击事件
      if (this.menuShow === true) {
        this.menuShow = false;
        e.stopPropagation();
        return;
      }
    }, 300);

    // // 单击事件倒计时
    // this.timeout = setTimeout(() => {
    //   this.settings.nodeclick(obj);
    //   // console.info(`单击`);
    // }, 300);

    // // 两次点击时间差
    // const clickBuffer = this.temp - this.tempTime;
    // // 如果双击 立即执行双击函数 并且清除单击事件倒计时
    // if (clickBuffer && clickBuffer < 300) {
    //   this.onToggle(obj);
    //   clearTimeout(this.timeout);
    // }


  }


  // 双击控制tree的展示隐藏
  onNodeDblClicked(e, obj) {
    this.isClick = true;
    obj.co = !obj.co;

    this.nodeDblClick.emit(obj);
  }
  // 菜单上的各种自定义事件   
  nodeMenuClickFn(item) {
    // item.clickFn(this.clickedNode);
    // console.log(item);
    this.nodeMenuClick.emit({
      title: item,
      data: this.tempMenuData,
    });
    this.menuShow = !this.menuShow;
  }

  // 右键点击事件
  rightClick(obj, event, htmlnode) {
    // 1. 阻止右键默认事件
    // 2. 显示右键菜单
    // 3. 设置菜单显示的位置
    // 4. 保存当前点击的数据
    // 5. 给当前点击的数据添加背景色
    event.preventDefault();
    if(this.tempMenuData==null
      ||(this.tempMenuData.treeheight==obj.treeheight
      &&this.tempMenuData.text==obj.text))
      {
        this.menuShow = !this.menuShow;
      }
      else
      {
        this.menuShow=true;
      }
      this.left = 55;
      if(htmlnode.offsetParent&&htmlnode.offsetParent.offsetTop<htmlnode.offsetTop)
      {
        this.top = event.layerY-htmlnode.offsetTop + 30;
      }
      else
      {
        this.top = htmlnode.offsetTop + 30;
      }
      this.left = htmlnode.offsetLeft + 80;
    // 把被点击的对象存储
    this.tempMenuData = obj;

    this.clearBgc();
    obj.isSelect = true; 

    // 添加背景色
    // this.onNodeClicked(event, obj);
    // 
    // this.menuShow = !this.menuShow;

    // 获取点击div距离父节点的距离
    // 把当前点击点的坐标赋值给菜单div的top left
    // this.top = htmlnode.offsetTop + 30;
    // this.left = 55;
    // this.left = htmlnode.offsetLeft + 80;
    // 用margin值会影响右键
    // console.info(`${this.left}============ ${this.top}`);
    // console.info(obj, `点击了右键`);
  }
  // 图标上的单击事件
  showTree(obj, event) {
    event.stopPropagation();
    obj.co = !obj.co;
  }

  // 清空所有点击样式
  clearBgc() {
    this.data.forEach(item => {
      this.clear(item);
    })
  }
  clear(obj) {
    obj.isSelect = false;
    if (obj.children) {
      for (let i of obj.children) {
        this.clear(i);
      }
    }
  }

  search(obj){
    this.showNode(obj);
    this.searchEvent.emit(obj);
  }
  showNode(searchObj){
    this.data.forEach(item=>{
      this.showNodeRecursive(item,searchObj);
    });
  }
  showNodeRecursive(obj,searchObj){
    if(searchObj==""||obj.text.indexOf(searchObj)>=0){
      obj.IsShow=true;
      if(obj.parent){
        this.showParentNode(obj.parent);
      }
    }else{
      obj.IsShow=false;
    }
    if (obj.children) {
      for (let i of obj.children) {
        i.parent=obj;
        this.showNodeRecursive(i,searchObj);
      }
    }
  }
  showParentNode(obj){
    obj.IsShow=true;
    if(obj.parent){
      this.showParentNode(obj.parent);
    }
  }
}
