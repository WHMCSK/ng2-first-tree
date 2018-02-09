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
        // this.tree.rightClick(obj, event, htmlnode);
        this.rightClickFn.emit([obj, event, htmlnode]);
    }
    //子节点传出的右键事件
    ChildRightClickFn(event) {
        this.rightClickFn.emit(event);
    }
    getTitle(obj) {
        return obj[this.newSettings.display.displayName];
    }
    getText(obj) {
        if (obj[this.newSettings.display.displayName].length > this.newSettings.display.displayLength) {
            return obj[this.newSettings.display.displayName].substring(0, this.newSettings.display.displayLength - 1) + "...";
        }
        else {
            return obj[this.newSettings.display.displayName];
        }
    }
    //拖动
    dragstartFn(obj, ev) {
        ev.dataTransfer.effectAllowed = "move";
        ev.dataTransfer.setData("text", ev.target.innerHTML);
        ev.dataTransfer.setDragImage(ev.target, 0, 0);
        this.tree.dragStart(obj);
        return true;
    }
    dragenterFn(obj) {
        this.tree.dragEnter(obj);
        return true;
    }
    dragoverFn(ev) {
        ev.preventDefault();
        return true;
    }
    dropFn(obj) {
        this.tree.dragDrop(obj);
        return false;
    }
    dragendFn(obj,ev) {
        ev.dataTransfer.clearData("text");
        this.tree.dragEnd(obj);
        return false;
    }
}