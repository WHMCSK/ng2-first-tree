import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges, ElementRef } from '@angular/core';

import { HttpUrlEncodingCodec } from '@angular/common/http';

@Component({
    selector: 'ng2-first-tree',
    styleUrls: ['./ng2-first-tree.component.scss'],
    templateUrl: './ng2-first-tree.component.html',
})
export class Ng2FirstTreeComponent implements OnChanges {

    @Input() data: any;
    @Input() settings: any;

    //@Output() nodeClicked = new EventEmitter<any>();

    constructor(){

    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {

    }

    onNodeClicked(obj){
        this.settings.nodeclick(obj);
    }

    onToggle(obj){
        obj.co = !obj.co;
    }

}
