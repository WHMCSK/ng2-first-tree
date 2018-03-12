import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { deepExtend } from '../../lib/helpers';

import { Ng2FirstTreeComponent } from '../../ng2-first-tree.component'

@Component({
    selector: 'tree-node',
    styleUrls: ['./node.component.scss'],
    templateUrl: './node.component.html',
})

export class TreeNodeComponent {
    newSettings: any;
    @Input() treeData: any;

    @Output() rightClickFn = new EventEmitter<any>();

    constructor(private elementRef: ElementRef,
        private tree: Ng2FirstTreeComponent) {
    }
    ngOnInit(): void {
        this.newSettings = this.tree.newSettings;
    }
    // 传过来点击者对象。
    onNodeClicked(e, obj) {
        if(this.newSettings.enableclick.length!=0
            &&this.newSettings.enableclick.indexOf(obj.nodeDeep)<0){
                return;
        }
        this.tree.onNodeClicked(e, obj);
    }
    // 双击控制tree的展示隐藏
    onNodeDblClicked(e, obj) {
        this.tree.onNodeDblClicked(e, obj);
    }
    // 图标上的单击事件
    showTree(obj, event) {
        this.tree.showTree(obj, event);
    }
    // 右键点击事件
    rightClick(obj, event, htmlnode) {
        if(this.newSettings.enableclick.length!=0
            &&this.newSettings.enableclick.indexOf(obj.nodeDeep)<0){
                return;
        }
        this.rightClickFn.emit([obj, event, htmlnode]);
    }
    //子节点传出的右键事件
    ChildRightClickFn(event) {
        this.rightClickFn.emit(event);
    }
    existsChildren(obj){
        if(obj.children==undefined){
            return false;
        }
        if(obj.children.length==0){
            return false;
        }
        return true;
    }
    getTitle(obj) {
        return obj[this.newSettings.display.displayName];
    }
    getText(obj) {
        // if (obj[this.newSettings.display.displayName].length > this.newSettings.display.displayLength) {
        //     return obj[this.newSettings.display.displayName].substring(0, this.newSettings.display.displayLength - 1) + "...";
        // }
        // else {
        //     return obj[this.newSettings.display.displayName];
        // }
        return obj[this.newSettings.display.displayName];
    }
    //拖动
    dragstartFn(obj, ev) {
        ev.dataTransfer.effectAllowed = "move";
        ev.dataTransfer.setData("text", ev.target.innerHTML);
        ev.dataTransfer.setDragImage(ev.target, 0, 0);
        this.tree.dragStart(obj,ev);
        return true;
    }
    dragenterFn(obj,ev) {
        if (obj.isDrag) {
            this.tree.dragEnter(obj,ev);
        }
        return true;
    }
    dragoverFn(obj,ev) {
        if (obj.isDrag) {
            ev.dataTransfer.dropEffect = "all";
            ev.dataTransfer.effectAllowed = "all";
        }else{
            ev.dataTransfer.dropEffect = "none";
            ev.dataTransfer.effectAllowed = "none";
        }
        ev.preventDefault();
        return true;
    }
    dropFn(obj,ev) {
        if (obj.isDrag) {
            this.tree.dragDrop(obj,ev);
        }
        return false;
    }
    dragendFn(obj, ev) {
        ev.dataTransfer.clearData("text");
        if (obj.isDrag) {
            this.tree.dragEnd(obj,ev);
        }
        return false;
    }
}