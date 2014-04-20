// 继承

/* 原型链
 * 问题：子类继承父类的属性是挂在子类prototype上的
 * 每次new一个子类，该父属性是共享的
 * 无法通过参数来创建实例
 */
function Parent() {
   this.name = 'parentName';
}

Parent.prototype.fun = function () {
   console.info('parentFun');
}

function Child() {
   child.name = 'childName';
}

Child.prototype = new Parent();

Child.prototype.childFun = function () {
   console.info('childFun');
}

/* 构造函数模式
 * 问题：方法无法复用
 *
 */
function Parent(age) {
   this.friend = ['a','b','c'];
   this.age = age;
}

function Child(age, name) {
   Parent.call(this, age);
   this.name = name;
}

/* 组合继承
 *
 */
function Parent(age) {
    this.age = age;
}

Parent.prototype.fun = function () {
    console.info('parentFun');
}

function Child(age, name) {
    Parent.call(this, age);
    this.name = name;
}

Child.prototype = new Parent();

Child.prototype.childFun = function () {
    console.info('childFun');
}