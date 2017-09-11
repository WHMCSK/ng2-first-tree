import { Injectable } from '@angular/core';

const SIMPLE_TREE = [
    {
        id: 1,
        text: "学校",
        treeheight: 1,
        enableclick: true,
        co: true,
        addChild: false,
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
                    },{
                        id: 7,
                        text: "二班",
                        treeheight: 3,
                        enableclick: true,
                    },{
                        id: 8,
                        text: "三班",
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
// 右键菜单的数据
const MENU_DATA = [{
    text:"添加",
    clickFn:function(){

    }
},{
    text:"删除",
    clickFn:function(){

    }
},{
    text:"修改",
    clickFn:function(){

    }
},];


@Injectable()
export class SimpleTreeService {

    getASimpleTree(){
        return SIMPLE_TREE;
    }
} 
