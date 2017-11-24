import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'ng2-tree-foldedExpansion',
    template: `
        <div class="tree-row" *ngIf="newSettings.foldedExpansionIsShow">
            <button class="btn btn-primary" (click)="onExpansion(data)">全部展开</button>
            <button class="btn btn-primary" (click)="onFolded(data)">全部收起</button>
        </div>
    `,
})

export class FoldedExpansionComponent {
    // 获取主配置
    @Input() newSettings: any;
    // 获取主数据
    @Input() data: any;

    // 发射展开折叠事件
    @Output() allFolded = new EventEmitter<any>();
    @Output() allExpansion = new EventEmitter<any>();
    
    // 折叠方法
    onFolded(e) {
        this.allFolded.emit(e);
        this.foldedExpansionFn('folde');
    }
    
    // 展开方法
    onExpansion(e) {
        this.allExpansion.emit(e);
        this.foldedExpansionFn('expansion');
    }

    
    // 共同调用
    foldedExpansionFn(str) {
        this.data.forEach(item => {
            this.recursiveFn(item, str);
        });
    }
    
    // 共同调用的递归方法
    recursiveFn(data, str) {
        // 1. 如果str为 folde 则全部折叠  else 全部展开
        // 2. 如果它存在 children 表示还有子节点，则使用递归。直到没有子节点
        if (str === 'folde') {
            data.co = false;
        } else {
            data.co = true;
        }
        if (data.children) {
            for (let i of data.children) {
                if (str === "folde") {
                    this.recursiveFn(i, 'folde');
                } else {
                    this.recursiveFn(i, 'expansion');
                }
            }
        }

    }
}