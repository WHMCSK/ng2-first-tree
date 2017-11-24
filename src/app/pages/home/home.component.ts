import { Component } from '@angular/core';
import { SimpleTreeService } from '../../local_data_services/simple.tree.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  treedata = [];
  treedata1 = [];

  addBroFn(nodeobj){
    console.log(nodeobj);
      console.log("添加兄弟节点");
      let new_tree;
      //new_tree = this.dp.transitionData(this.NEW_DATA);
      console.log(this.dp);
}

  // 右键菜单的数据
  MENU_DATA = 
  [{
    text:"添加兄弟节点",
    clickFn: this.addBroFn,
  },{
    text:"添加子节点",
    clickFn:function(nodeobj){
      console.log(nodeobj);
        console.log("添加子节点");     
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
  // 新添加进来的一组数据
  NEW_DATA = {
    id: 10,
    pid: 3,
    text: "消化科",
    treeheight: 2,
    
  };

  settings = {
    menu: this.MENU_DATA,
    nodeclick: this.onclick,
  
    filter:{
      isShow:true
    },
    foldedExpansionIsShow: true,

    selectBgc: {            // 选中行背景色
      open: true,           // 是否开启
      bgc:'#00abff',        // 配置背景色
      lv1: false,            // 第一级是否开启选中背景色 
    },
  };
  
  constructor(private dp: SimpleTreeService){
      this.treedata = dp.getASimpleTree();
      // 异步promise
      dp.getTreeData().then((tree) => {
        this.treedata1 = tree;
      });
  }
  onclick(obj){
    console.info(`node clicked`);
    console.log(obj);
  }
  search(value){
    console.info(`搜索值`, value);
    this.treedata.forEach(item => {
      this.checkdata(item,value);
    });

    this.treedata.forEach(item => {
      this.checkdata1(item, item,value);
    });

    console.info(this.treedata);
  }

  checkdata(obj,value) {
    if(obj.text !== value){
      obj.visiable = false;
    }
    if(obj.children) {
        for(let i of obj.children) {
            this.checkdata(i,value);
        }
    }
  }

  checkdata1(obj,parentobj,value) {
    if(obj.children) {
        for(let i of obj.children) {
            this.checkdata1(i, obj , value);
        }
    }else{
      if(obj.visiable === true){
        parentobj["visiable"] = true;
      }
    }
  }

  ondel(){
    
  }


  onFolded(e){
    console.log(e);
    console.log(`折叠`);
    
  }
  
  onExpansion(e){
    console.log(e);
    console.log(`展开`);
  }
}
