# 箭头函数

 ES6 允许使用“箭头”（`=>`）定义函数

箭头函数有几个使用注意点

* 函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象 `this`对象的指向是可变的，但是在箭头函数中没有 this， 导致内部的`this`就是外层代码块的`this`
* 不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误 也是因为没有 this
* 不能使用 call，apply，bind。还是因为没有 this
* 不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替
* 不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数

## 箭头函数和this指向

箭头函数中是没有 this 的，这导致它内部的 this 就是 定义时所在的对象

### setTimeout 中的 this

setTimeout 中的回调函数是在全局环境下执行的，所以 this 的值，指向全局对象 window

可以用箭头函数修复这个问题

```text
let obj = {
	a: 'a',
	getThis: function(){
		setTimeout(() => {
			console.log('getThis', this)
		},0)
	}
}

obj.getThis() // obj
```

### 封装回调函数

 箭头函数可以让`this`指向固定化，这种特性很有利于封装回调函数

```text
var handler = {
  id: '123456',

  init: function() {
    document.addEventListener('click',
      event => this.doSomething(event.type), false);
  },

  doSomething: function(type) {
    console.log('Handling ' + type  + ' for ' + this.id);
  }
};
```

上面代码的`init`方法中，使用了箭头函数，这导致这个箭头函数里面的`this`，总是指向`handler`对象

否则，回调函数运行时，`this.doSomething`这一行会报错，因为此时`this`指向`document`对象

### 不适用的情况

#### 定义对象的方法

```text
const cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}
```





