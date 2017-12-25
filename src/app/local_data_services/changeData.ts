const SIMPLE_TREE = [
    {
        id: 1,
        pid: "",
        text: "学校"
    },
    {
        id: 2,
        pid: "",
        text: "医院"
    },
    {
        id: 3,
        pid: "",
        text: "公司"
    },
    {
        id: 4,
        pid: 1,
        text: "计算机系"
    },
    {
        id: 5,
        pid: 1,
        text: "经济系"
    },
    {
        id: 7,
        pid: 4,
        text: "一班"
    },
    {
        id: 8,
        pid: 4,
        text: "二班"
    },
    {
        id: 9,
        pid: 4,
        text: "三班"
    }, {
        id: 10,
        pid: 2,
        text: "骨科"
    }, {
        id: 11,
        pid: 2,
        text: "神经科"
    },
];


const treeData = [];

function changeData(data) {
    let treeData = [],
        node1 = [],
        hasPid = [],
        node2 = [];
    let flag = true;

    data.forEach(el => {
        if (el.pid === '') {
            node1.push(el);
        } else {
            hasPid.push(el);
        }
    });

    node1.forEach(element => {

        hasPid.forEach(el => {
            if(el.pid === element.id){
                node2.push(el);
            }else{
                if(flag === true){
                    hasPid = [];
                    flag = false;
                }
                hasPid.push(el);
            }
        });
    });

    console.log(node1,node2,hasPid);
    

}

changeData(SIMPLE_TREE);
