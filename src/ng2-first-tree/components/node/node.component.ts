import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { deepExtend } from '../../lib/helpers';

import { Ng2FirstTreeComponent } from '../../ng2-first-tree.component'

@Component({
    selector: 'tree-node',
    styleUrls: ['./node.component.scss'],
    templateUrl: './node.component.html',
})

export class TreeNodeComponent {
    newSettings:any;
    @Input() treeData: any;

    constructor(private elementRef: ElementRef,
        private tree:Ng2FirstTreeComponent) {
    }
    ngOnInit(): void {
        this.newSettings=this.tree.newSettings;
    }
    // 传过来点击者对象。
    onNodeClicked(e, obj) {
        this.tree.onNodeClicked(e,obj);
    }
    // 双击控制tree的展示隐藏
    onNodeDblClicked(e, obj) {
        this.tree.onNodeDblClicked(e,obj);
    }
    // 图标上的单击事件
    showTree(obj, event) {
        this.tree.showTree(obj,event);
    }
    // 右键点击事件
    rightClick(obj, event, htmlnode) {
        console.log(this.tree.menuShow);
        this.tree.rightClick(obj,event,htmlnode);
    }
    getTitle(obj){
        return obj[this.newSettings.displayName];
    }
    getText(obj){
        if(obj[this.newSettings.displayName].length>this.newSettings.displayLength)
        {
            return obj[this.newSettings.displayName].substring(0,this.newSettings.displayLength-1)+"...";
        }
        else
        {
            return obj[this.newSettings.displayName];
        }
    }
}