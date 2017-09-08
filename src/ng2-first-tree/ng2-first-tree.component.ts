import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges, ElementRef } from '@angular/core';

import { HttpUrlEncodingCodec } from '@angular/common/http';

@Component({
    selector: 'ng2-first-tree',
    styleUrls: ['./ng2-first-tree.component.scss'],
    templateUrl: './ng2-first-tree.component.html',
})
export class Ng2FirstTreeComponent implements OnChanges {

    temp: any;
    tempTime: any;
    timeout: any;

    @Input() data: any;
    @Input() settings: any;

    //@Output() nodeClicked = new EventEmitter<any>();

    constructor(){

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

}
