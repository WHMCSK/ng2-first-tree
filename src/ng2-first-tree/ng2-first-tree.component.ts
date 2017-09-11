import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges, ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { HttpUrlEncodingCodec } from '@angular/common/http';

@Component({
    selector: 'ng2-first-tree',
    styleUrls: ['./ng2-first-tree.component.scss'],
    templateUrl: './ng2-first-tree.component.html',
})
export class Ng2FirstTreeComponent implements OnChanges {

    // 双击事件的控制
    temp: any;
    tempTime: any;
    timeout: any;
    // 选中的对象
    clickedNode: any;
    // 右键菜单的展示控制
    menuShow: boolean = false;
    // 右键菜单的定位位置
    top: any;
    left: any;
    

    @Input() data: any;
    @Input() settings: any;

    //@Output() nodeClicked = new EventEmitter<any>();

    constructor(private elementRef: ElementRef){

    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {

    }

    onNodeClicked(obj){
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

    onToggle(obj){
        obj.co = !obj.co;
        console.log(obj);
        console.log("双击");
    }
    // 菜单上的添加，修改，删除事件
    onAddClick(){
      this.menuShow = !this.menuShow;
      
      console.log("add");
    }

    onRemoveClick(){
      this.menuShow = !this.menuShow;
      
      console.log("remove");
      console.log(this.clickedNode);
    }

    onUpdateClick(){
      console.log("update");
      this.menuShow = !this.menuShow;
      
    }
    
    // 右键点击事件
    rightClick(obj, event){
      event.preventDefault();
      // 把当前点击点的坐标赋值给菜单div的top left
      this.top = event.pageY;
      this.left = event.pageX;
      this.menuShow = !this.menuShow;
      // 把被点击的对象存储
      this.clickedNode = obj;
  
      console.log(obj,"点击了右键");
      console.log(event.pageX, event.pageY);      
    }
    

}
