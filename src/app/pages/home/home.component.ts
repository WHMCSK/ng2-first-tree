import { Component } from '@angular/core';
import { SimpleTreeService } from '../../local_data_services/simple.tree.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  treedata = [];
  // 右键菜单的数据
  MENU_DATA = [{
    text:"添加兄弟节点",
    clickFn:function(nodeobj){
      console.log(nodeobj);
        console.log("添加");
        
    }
  },{
    text:"添加子节点",
    clickFn:function(nodeobj){
      console.log(nodeobj);
        console.log("添加");
        
    }
  },{
    text:"删除",
    clickFn:function(nodeobj){
      console.log(nodeobj);
        console.log("删除");
    }
  },{
    text:"修改",
    clickFn:function(nodeobj){
      console.log(nodeobj);
        console.log("修改");
    }
  },];

  settings = {
    menu: this.MENU_DATA,
    nodeclick: this.onclick,
    showicon: "",
    hideicon: "",
  };
  
  constructor(private dp: SimpleTreeService){
      this.treedata = dp.getASimpleTree();
  }
  onclick(obj){
    console.log("node clicked");
    console.dir(obj);
  }

}
