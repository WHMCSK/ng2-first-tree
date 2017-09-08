import { Component } from '@angular/core';
import { SimpleTreeService } from '../../local_data_services/simple.tree.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  treedata = [];
  settings = {
    nodeclick: function(obj){
      console.log("node clicked");
      console.dir(obj);
    }
  };
  constructor(private dp: SimpleTreeService){
      this.treedata = dp.getASimpleTree();
  }

}
