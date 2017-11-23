import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

const SIMPLE_TREE = [
    {
        id: 1,
        text: "学校",
        treeheight: 1,
        enableclick: true,
        collapse: true,
        visiable: true,
        children: [
            {
                id: 2,
                text: "计算机系",
                treeheight: 2,
                enableclick: true,
                collapse: false,
                visiable: true,
                children: [
                    {
                        id: 6,
                        text: "一班",
                        treeheight: 3,
                        enableclick: true,
                        collapse: false,
                        visiable: true,
                        children: [
                            {
                                id: 6,
                                text: "一班(2)",
                                treeheight: 4,
                                enableclick: true,
                                collapse: false,
                                visiable: true,
                            }
                        ]
                    }, {
                        id: 7,
                        text: "二班",
                        treeheight: 3,
                        enableclick: true,
                        collapse: false,
                        visiable: true,
                    }, {
                        id: 8,
                        text: "三班",
                        treeheight: 3,
                        enableclick: true,
                        collapse: false,
                        visiable: true,
                    }
                ]
            }, {
                id: 4,
                text: "经济系",
                treeheight: 2,
                collapse: false,
                enableclick: true,
                visiable: true,
            }
        ]
    }, {
        id: 3,
        text: "医院",
        treeheight: 1,
        enableclick: true,
        co: true,
        visiable: true,
        children: [
            {
                id: 5,
                text: "呼吸科",
                treeheight: 2,
                enableclick: true,
                collapse: false,
                visiable: true,
            }
        ]
    }
];
// 右键菜单的数据
const MENU_DATA = [{
    text: "添加",
    clickFn: function () {
        console.log("添加");

    }
}, {
    text: "删除",
    clickFn: function () {
        console.log("删除");
    }
}, {
    text: "修改",
    clickFn: function () {
        console.log("修改");
    }
},];
// 新添加进来的一组数据
const OLD_DATA = [{
    id: 1,
    text: "学校",
    treeheight: 1,
    enableclick: true,
    collapse: false,
    visiable: true,
    pid: 0,
}, {
    id: 2,
    text: "计算机系",
    treeheight: 2,
    enableclick: true,
    collapse: false,
    visiable: true,
    pid: 1,
}, {
    id: 7,
    text: "二班",
    treeheight: 3,
    enableclick: true,
    collapse: false,
    visiable: true,
    pid: 2,
}, {
    id: 6,
    text: "一班",
    treeheight: 3,
    enableclick: true,
    collapse: false,
    visiable: true,
    pid: 2,
}, {
    id: 8,
    text: "三班",
    treeheight: 3,
    enableclick: true,
    collapse: false,
    visiable: true,
    pid: 2,
}, {
    id: 4,
    text: "经济系",
    treeheight: 2,
    collapse: false,
    enableclick: true,
    visiable: true,
    pid: 1
}, {
    id: 3,
    text: "医院",
    treeheight: 1,
    enableclick: true,
    collapse: true,
    visiable: true,
    pid: 0,
}, {
    id: 5,
    text: "呼吸科",
    treeheight: 2,
    enableclick: true,
    collapse: false,
    visiable: true,
    pid: 3,
}];

@Injectable()
export class SimpleTreeService {

    getASimpleTree() {
        return SIMPLE_TREE;
    }
    getMenuData() {
        return MENU_DATA;
    }
    // 异步promise
    getTreeData(): Promise<any> {
        return Promise.resolve(SIMPLE_TREE);
    }
    // 把新数据转换进真正的数据里
    transitionData(new_data) {
        let pid = new_data.pid;
        let tree_data = this.getASimpleTree();
        tree_data.forEach((item) => {
            this.checkId(item, pid, new_data);
        });
        return tree_data;
    }
    checkId(obj, pid, new_data) {
        if (obj.id = pid) {
            let new_obj = {};
            new_obj["id"] = new_data.id;
            new_obj["text"] = new_data.text;
            new_obj["treeheight"] = new_data.treeheight;
            new_obj["enableclick"] = true;
            new_obj["co"] = true;
            obj.children.push(new_obj);
        };
        if (obj.children) {
            for (let i of obj.children) {
                this.checkId(i, i.id, new_data);
            }
        }
    }
} 
