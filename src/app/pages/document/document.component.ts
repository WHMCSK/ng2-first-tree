import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'demo',
  styleUrls: ['./document.component.scss'],
  templateUrl: './document.component.html',
})
export class DocumentComponent {
    left: string = '{';
    right: string = '}';
    peizhiDatas: any;
    constructor() {

    }
    
   

    ngOnInit(): void {

      
    }
}