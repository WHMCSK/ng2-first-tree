
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
        treeheight: 1,
        enableclick: true,
        co: true,
        children: [
            {
                id: 2,
                text: "计算机系",
                treeheight: 2,
                enableclick: true,
                co:true,
                children: [
                    {
                        id: 6,
                        text: "一班",
                        treeheight: 3,
                        enableclick: true,
                    }
                ]
            },{
                id: 4,
                text: "经济系",
                treeheight: 2,
                co:true,
                enableclick: true,
            }
        ]
    },{
        id: 3,
        text: "医院",
        treeheight: 1,
        enableclick: true,
        co: false,
        children: [
            {
                id: 5,
                text: "计算机系",
                treeheight: 2,
                enableclick: true,
            }
        ]
    }
];

```
我们还需要配置一些其他的属性，如右键菜单展示的结构，单击时触发的事件，展示隐藏时候的图标class名

```
settings = {
    menu: [{
        text:"添加兄弟节点",
        clickFn:function(nodeobj){
        console.log(nodeobj);
            console.log("添加兄弟节点");          
        }
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
    },],
    nodeclick: () => {

    },
    showicon: `icon ion-filing`,
    hideicon: `icon ion-folder`,
    wenjicon: `icon ion-document-text`,
    filterstyle: `isshow`,//isshow|mark
    filtertype: `clientfilter`,//serverfilter|clientfilter
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