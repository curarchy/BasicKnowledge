//创建对象

/* 工厂模式
 * 问题： 无法识别对象类型。
 * 即 instanceof 无效
 */
function createPerson (name, age) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.fun = function () {
        console.info(this.name);
    }
    return o;
}

var person1 = createPerson('Tom', 10);
var person2 = createPerson('Jack', 20);

/* 构造函数模式
 * 问题：方法无法共用
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.fun = function () {
        console.info(this.name);
    }
}

var person1 = new Person('Tom', 10);
var person2 = new Person('Jack', 20);

// 能够识别对象类型
person1.constructor === Person      // true
person2.constructor === Person      // true
person1 instanceof Person           // true
person1.instanceof Object           // true

/* 原型链模式
 * 问题：属性共享。当为引用类型时，会出问题。
 */
function Person() {

}

Person.prototype.name = 'Tom';
Person.prototype.age = 20;
Person.prototype.fun = function() {
    console.info(this.name);
}

var person1 = new Person();
person1.sayName();

var person2 = new Person();
person2.sayName();

person2.name = 'hello';     //=>hello
delete person2.name;        //=>Tom
'name' in person2;          //=>true 找到了原型链上的name
person2.hasOwnProperty('name'); //=>false 自己的属性已被删除

/* 构造函数+原型链
 *
 */
function Person(name, age) {
   this.name = name;
   this.age = age;
   this.friend = [];
}

Person.prototype.fun = function () {
   console.info(this.name);
}

var person1 = new Person('Tom', 10);
var person2 = new Person('Jack', 20);