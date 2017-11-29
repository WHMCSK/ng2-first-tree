import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'ng2-tree-filter',
    template: `
    <div class="tree-row " *ngIf="newSettings.filter.isShow">
        <input type="text" placeholder="搜索" name="searchValue" [(ngModel)]="searchValue">
        <button class="btn btn-primary" (click)="onSearch()">搜索</button>
    </div>
    `,
})

export class FilterComponent {

    // 获取主配置
    @Input() newSettings: any;
    // 获取主数据
    @Input() data: any;

    @Output() searchEvent = new EventEmitter<any>();

    // 搜索框的值
    searchValue: any;

    onSearch() {
        this.searchEvent.emit(this.searchValue);
    }

}