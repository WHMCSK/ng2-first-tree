import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'ng2-first-tree',
  styleUrls: ['./ng2-first-tree.component.scss'],
  templateUrl: './ng2-first-tree.component.html',
})
export class Ng2FirstTreeComponent {
  // 双击事件的控制
  temp: any;
  tempTime: any;
  timeout: any;
  // 记录右键被选中的对象
  clickedNode: any;
  // 右键菜单的展示控制
  menuShow: boolean = false;
  // 右键菜单的定位位置
  top: any;
  left: any;
  // 搜索框的值
  searchValue: any;
  parentUl: any;
  // 子组件定义的值传个父组件。可以方在子组件的标签上用、
  @Input() data: any;
  @Input() settings: any;
  // 子传父，点击者。
  // @Output() mouseEnter = new EventEmitter<any>();
  // @Output() toggleSubMenu = new EventEmitter<any>();

  // 是否开启选中背景色
  selectBgc: any;

  constructor(private elementRef: ElementRef) {
    // 点击body关闭右键菜单
    document.body.onclick = (event) => {
      if (this.menuShow === true) {
        this.menuShow = false;
        event.stopPropagation();
      }
    };
  }
  ngOnInit(): void {
    this.selectBgc = this.settings.selectBgc ? this.settings.selectBgc : {open:false};
   }

   

  // 清除同级类名
  clearFn() {
    const uls = this.elementRef.nativeElement.querySelectorAll(`.select ul`);
    uls.forEach(ele => {
      ele.setAttribute('class', 'a');
    });
  }
  // 鼠标进入
  // onMouseEnter(e, a) {
  //   // console.info(a);
  //   // console.info(e);
  //   this.mouseEnter.emit(a);
  // }
  

  // 传过来点击者对象。
  onNodeClicked(e, obj) {

    if(this.selectBgc.open){
      this.clearBgc();
      obj.isSelect = true;
    }
  

    this.clearFn();
    // e.target.localName 表示当前点击的元素
    // this.parentUl = 当前父元素UL
    // 1 如果点击的是 i 或者 span 时候，他的父元素一定是 li
    // 1.1 如果他的父元素是li 的时候，那么找li 的父元素 ul
    // 2 如果点击的 li 标签，那么他的父元素是 ul
    // 2.1 那么就取li得父元素
    // 3 如果点击的是ul 那么直接去当前元素
    // 4 找到UL之后，给当前 .className = "div3 zidingyi";
    // 4.1 它的兄弟元素 .className = "div3";
    // console.info(e.target.parentNode);
    // if (e.target.localName === `li`) {
    //   this.parentUl = e.target.parentNode;
      // this.parentUl.setAttribute('class', 'selected');
    // }
    // if (e.target.localName === `ul`) {
    //   this.parentUl = e.target;
      // this.parentUl.setAttribute('class', 'selected');
    // }
    // if (e.target.localName === `span` || e.target.localName === `i`) {
      // this.parentUl = e.target.parentNode.parentNode;
      // this.parentUl.setAttribute('class', 'selected');
    // }
    // 在菜单展开的时候，阻止单击事件
    if (this.menuShow === true) {
      this.menuShow = false;
      event.stopPropagation();
      return;
    }
    clearTimeout(this.timeout);
    if (!this.temp) {
      this.temp = new Date();
    } else {
      this.tempTime = this.temp;
      this.temp = new Date();
    }
    // 单击事件倒计时
    this.timeout = setTimeout(() => {
      this.settings.nodeclick(obj);
      // console.info(`单击`);
    }, 300);

    // 两次点击时间差
    const clickBuffer = this.temp - this.tempTime;
    // 如果双击 立即执行双击函数 并且清除单击事件倒计时
    if (clickBuffer && clickBuffer < 300) {
      this.onToggle(obj);
      clearTimeout(this.timeout);
    }
  }
  // 双击控制tree的展示隐藏
  onToggle(obj) {
    obj.co = !obj.co;
    // console.info(`双击`);
  }
  // 菜单上的各种自定义事件   
  nodeMenuClick(item) {
    item.clickFn(this.clickedNode);
    this.menuShow = !this.menuShow;
  }

  // 右键点击事件
  rightClick(obj, event, htmlnode) {
    // 添加背景色
    this.onNodeClicked(event, obj);
    event.preventDefault();
    this.menuShow = !this.menuShow;
    // 把被点击的对象存储
    this.clickedNode = obj;
    // 获取点击div距离父节点的距离
    // 把当前点击点的坐标赋值给菜单div的top left
    this.top = htmlnode.offsetTop + 30;
    this.left = 55; 
    // this.left = htmlnode.offsetLeft + 80;
    // 用margin值会影响右键
    // console.info(`${this.left}============ ${this.top}`);
    console.info(obj, `点击了右键`);
  }
  // 图标上的单击事件
  showTree(obj, event) {
    obj.co = !obj.co;
    event.stopPropagation();
  }
  // 全部显示隐藏控制方法---开始
  allShow() {
    this.data.forEach(item => {
      this.open(item);
    });
  }
  open(obj) {
    obj.co = true;
    if (obj.children) {
      for (let i of obj.children) {
        this.open(i);
      }
    }
  }
  allHide() {
    this.data.forEach(item => {
      this.close(item);
    });
  }
  close(obj) {
    obj.co = false;
    if (obj.children) {
      for (let i of obj.children) {
        this.close(i);
      }
    }
  }
  // 全部显示隐藏方法---结束111


  // 清空所有点击样式
  clearBgc(){
    this.data.forEach( item => {

      this.clear(item);

    })
  }
  clear(obj){
    obj.isSelect = false;
    if (obj.children) {
      for (let i of obj.children) {
        this.clear(i);
      }
    }
  }
}
