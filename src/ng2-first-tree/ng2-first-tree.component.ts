import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { HttpUrlEncodingCodec } from '@angular/common/http';

@Component({
  selector: 'ng2-first-tree',
  styleUrls: ['./ng2-first-tree.component.scss'],
  templateUrl: './ng2-first-tree.component.html',
})
export class Ng2FirstTreeComponent {

  // 双击事件的控制
  temp: any;
  tempTime: any;
  timeout: any;
  // 记录右键被选中的对象
  clickedNode: any;
  // 右键菜单的展示控制
  menuShow: boolean = false;
  // 右键菜单的定位位置
  top: any;
  left: any;
  // 搜索框的值
  searchValue: any;

  @Input() data: any;
  @Input() settings: any;

  @Output() onSubmited = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    // 点击body关闭右键菜单
    document.body.onclick = (event) => {
      if (this.menuShow == true) {
        this.menuShow = false;
        event.stopPropagation();
      }
    }
    
  }

  onNodeClicked(obj) {

    // 在菜单展开的时候，阻止单击事件
    if (this.menuShow == true) {
      this.menuShow = false;
      event.stopPropagation();
      return;
    }

    clearTimeout(this.timeout);
    if (!this.temp) {
      this.temp = new Date();
    } else {
      this.tempTime = this.temp;
      this.temp = new Date();
    }

    // 单击事件倒计时
    this.timeout = setTimeout(() => {
      this.settings.nodeclick(obj);
      console.log("单击");
    }, 300);

    // 两次点击时间差
    let clickBuffer = this.temp - this.tempTime;
    // 如果双击 立即执行双击函数 并且清除单击事件倒计时
    if (clickBuffer && clickBuffer < 300) {
      this.onToggle(obj);
      clearTimeout(this.timeout);
    }

  }
  // 双击控制tree的展示隐藏
  onToggle(obj) {
    obj.collapse = !obj.collapse;
    console.log(obj);
    console.log("双击");
  }
  // 菜单上的各种自定义事件   
  nodeMenuClick(item) {
    item.clickFn(this.clickedNode);
    this.menuShow = !this.menuShow;


  }

  // 右键点击事件
  rightClick(obj, event, htmlnode) {
    event.preventDefault();

    this.menuShow = !this.menuShow;
    // 把被点击的对象存储
    this.clickedNode = obj;
    // 获取点击div距离父节点的距离
    let left = htmlnode.offsetLeft;
    let top = htmlnode.offsetTop + htmlnode.clientHeight;
    // 把当前点击点的坐标赋值给菜单div的top left

    this.top = top;
    this.left = left;

    console.log(this.left + "============" + this.top);
    console.log(obj, "点击了右键");
  }
  // 图标上的单击事件
  showTree(obj,event){
    obj.collapse = !obj.collapse;
    event.stopPropagation();
  }
  // 全部显示隐藏控制方法---开始
  allShow(){
    this.data.forEach(item => {
      this.open(item);
    });
  }
  open(obj) {
    obj.collapse = false;
    if(obj.children) {
        for(let i of obj.children) {
            this.open(i)
        }
    }
  }
  allHide(){
    this.data.forEach(item => {
      this.close(item);
    });
  }
  close(obj) {
    obj.collapse = true;
    if(obj.children) {
        for(let i of obj.children) {
            this.close(i)
        }
    }
  }
  // 全部显示隐藏方法---结束111
  onSubmit(searchValue){
    this.onSubmited.emit(searchValue)
    this.searchValue = "";
  }

  // insertTreeNode(currentNode,newNode,relationType){
    
  // }
}
