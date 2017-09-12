![Build Status](https://travis-ci.org/akveo/ng2-first-table.svg?branch=master)

# Angular2 first tree 组件

### Demo

<a target="_blank" href="http://192.168.2.244:4200">查看演示</a>

![alt tag](src/assets/img/demo.gif)

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

现在，我们需要配置表并将其添加到模板中。 组件开始工作的唯一必需设置是列配置。 我们在组件中注册设置属性，我们想要具有表并配置一些列[设置文档](http://192.168.2.244:4200/#/documentation)：
    
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
settings = {
  nodeclick: function(){
    console.log("单击事件的处理函数");
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
 
## 进一步的文档
安装，定制等有用的文档: https://ascode.github.io/ng2-first-table/

## How can I support developers?

- 可以关注我们的：[Github](https://github.com/wangraoji/ng2-first-table)
- 创建拉请求，提交错误，建议新功能


## 功能特征（详情请看本项目文档）
* 本地数据源（Server / API DataSource正在进行中）



ok