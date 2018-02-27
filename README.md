
# Angular2 first tree 组件


## 安装

该库可用作npm软件包，因此您只需运行以下命令即可：（如果不是新手，建议先装淘宝镜像端，因为cnpm更快）

```
npm install --save ng2-first-tree
```

该命令将在您的`package.json`文件中创建一个记录，并将该包安装到npm modules文件夹中。

## 最简单的设置示例

首先需要将ng2-first-tree指令导入到组件中。

```

import { Ng2FirstTreeModule } from 'ng2-first-tree';

```

然后通过添加到您的模块的指令列表来注册它：

```
// ...

@NgModule({
  imports: [
    // ...
    
    Ng2FirstTreeModule,
    
    // ...
  ],
  declarations: [ ... ]
})
// ...
```

现在，我们需要配置数据并将其添加到模板中。 组件开始工作的唯一必需设置是数据配置，我们在组件中注册设置数据属性。
```
data = [
    {
        id: 1,
        text: "学校",
        nodeDeep: 1,
        IsShow: true,
        co: true,
        children: [
            {
                id: 2,
                text: "计算机系",
                nodeDeep: 2,
                IsShow: true,
                co:true,
                children: [
                    {
                        id: 6,
                        text: "一班",
                        nodeDeep: 3,
                        IsShow: true,
                    }
                ]
            },{
                id: 4,
                text: "经济系",
                nodeDeep: 2,
                co:true,
                IsShow: true,
            }
        ]
    },{
        id: 3,
        text: "医院",
        nodeDeep: 1,
        IsShow: true,
        co: false,
        children: [
            {
                id: 5,
                text: "计算机系",
                nodeDeep: 2,
                IsShow: true,
            }
        ]
    }
];
```
我们还需要配置一些其他的属性，如右键菜单展示的结构，单击时触发的事件，展示隐藏时候的图标class名

```
settings = {
	display: {
      displayLength: 10,                        //  节点文本显示长度
      displayName: "text",                      //  节点显示字段
      displayNode: 5,                           //  显示多少个节点
      nodeHeight: 30,                           //  每个节点高度
      nodeWidth: 100,                           //  每个节点宽度
      yScroll: "auto",                          //  垂直滚动条显示样式
      xScroll: "auto",                          //  横向滚动条显示样式
      treeClass: "tree-container",              //  树样式
    },
    menu: [{
        text:"添加兄弟节点",
        title:"add",
        nodeDeeps:[1]							// 菜单显示层级，全显示无需设置
    },{
        text:"添加子节点",
        title:"add"
    },{
        text:"删除",
        title:"delete"
    },{
        text:"修改",
        title:"delete",
        nodeDeeps:[1]
    },],
    enableclick:[1,3],                          //  可点击层级
    treeHeight:0,                            //  树高
    filter: {                                //  搜索配置  暂时没有
      type: '',                              //  客户端过滤|服务端过滤   serverfilter|clientfilter
      class: '',                             //  搜索框的 类名
      isShow: false,                         //  搜索框是否
    },
    foldedExpansionIsShow: false,           // 折叠展开是否显示
    drag: {
      isDrag: false,                         // 是否可拖动
      dragTreeHeight: []                  // 可拖动的节点层级
    }
     showicon: `icon ion-filing`,             //  子节点展开时的图标， 
    hideicon: `icon ion-folder`,             //  子节点隐藏时的图标， 
    noChildicon: `icon ion-document-text`,   //  没有子节点时的图标， 
    selectBgc: {            // 选中行背景色   此项不填写，默认为open: false
      open: true,           // 是否开启
      bgc:'#00abff',        // 配置背景色
      lv1: false,            // 第一级是否开启选中背景色 
    },
}
```

最后，我们将ng2-first-tree组件放在模板中：

```
// ...

@Component({
  template: `
    <ng2-first-tree [data]="data" [settings]="settings"></ng2-first-tree>
  `
})
// ...
```


现在你有一些数据在树中。



## How can I support developers?

- 可以关注我们的：[Github](https://github.com/wang-cola/ng2-first-tree)
- 创建拉请求，提交错误，建议新功能


## 功能特征（详情请看本项目文档）
* 本地数据源（Server / API DataSource正在进行中）



ok