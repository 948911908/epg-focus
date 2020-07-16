
# 简介

 EPG聚焦逻辑，通过计算聚焦元素距离，判断距离最小值的元素，达到自动聚焦效果.
使用方法：

1. HTML要聚焦的元素父级元素中添加```group```属性,```group```属性值为JSON对象形式

 - 需要传递```{name:'groupName',focus:'className/focusFn'}```
 - name 组名称
 - focus 当前组聚焦className 或聚焦方法
 - 虚拟事件 ```"left", "right", "up", "down", "click"```以```@```开头的属性定义，方向的属性值为要移动组

2. HTML要聚焦的元素中添加```isfocus```属性，属性值为真为聚焦className
- ```default-focus```为默认聚焦元素
- 虚拟事件 ```"left", "right", "up", "down", "click"```以```@```开头的属性定义，方向的属性值为要移动的元素id

示例：

``` <div group="{name:'nav',focus:'string'}" @down="recommend" @click="navClick"> ```

```<div isfocus="1" id="recommend" class="nav_btn" @click="navRecommendClick">```

```var iptv = new iptvFocus({
    focusClassScale: 1.1, //聚焦class scale放大比例 其中聚焦class 有scale放大
    visualMargin: 30, //可视边距大小  px 
    viewEle: evm.$("viwe"), //可视移动元素 
});```

3. ```window.keyevent```为按键监听函数调用

4.  已知问题：
    - 未做焦点历史记录
    - 必须要设置group
    - 必须设置切换group 虚拟方向事件
    - xpath-dom暂未使用（焦点历史记录），兼容性考虑暂时不用
后续添加group更加灵活非必须设置，焦点历史记录
