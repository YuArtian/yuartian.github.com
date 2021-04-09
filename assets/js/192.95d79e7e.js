(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{555:function(a,t,s){"use strict";s.r(t);var r=s(45),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"语法分析-parser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法分析-parser"}},[a._v("#")]),a._v(" 语法分析（Parser）")]),a._v(" "),s("p",[a._v("词法分析完后，接下来的阶段就是使用 Parser 进行语法分析")]),a._v(" "),s("p",[a._v("语法分析的输入就是词法分析的输出")]),a._v(" "),s("p",[a._v("Parser 接收 "),s("strong",[a._v("词法单元流")]),a._v(" 输出 "),s("strong",[a._v("AST（抽象语法树）")])]),a._v(" "),s("p",[a._v("词法分析和语法分析不是完全独立的，而是交错进行的")]),a._v(" "),s("p",[a._v("也就是说，词法分析器不会在读取所有的词法记号后再使用语法分析器来处理")]),a._v(" "),s("p",[a._v("在通常情况下，每取得一个词法记号，就将其送入语法分析器进行分析")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/YuArtian/yuartian.github.io/blob/master/.gitbook/assets/yu-fa-fen-xi.png?raw=true",alt:"词法分析和语法分析流程"}})]),a._v(" "),s("h2",{attrs:{id:"语法检查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法检查"}},[a._v("#")]),a._v(" "),s("strong",[a._v("语法检查")])]),a._v(" "),s("p",[a._v("如果 JavaScript 解释器在构造语法树的时候发现有语法错误，就会抛出异常并结束整个代码块的解析")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" <script>\n function func() {\n   let a = 10;\n   var a = 1; //Uncaught SyntaxError: Identifier 'a' has already been declared\n }\n <\/script>\n")])])]),s("p",[a._v("虽然函数 "),s("code",[a._v("func")]),a._v(" 没有执行，但是在语法分析阶段就已经检查出错误，并报错了")]),a._v(" "),s("h2",{attrs:{id:"生成-ast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成-ast"}},[a._v("#")]),a._v(" "),s("strong",[a._v("生成 AST")])]),a._v(" "),s("p",[a._v("AST（抽象语法树）指是 "),s("strong",[a._v("源代码语法对应的树状结构")])]),a._v(" "),s("p",[s("a",{attrs:{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://astexplorer.net/"),s("OutboundLink")],1),a._v(" 在线生成 AST")]),a._v(" "),s("p",[a._v("例如，var sum = 30；会对应生成如下的 AST")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(' {\n   "type": "Program",\n   "start": 0,\n   "end": 13,\n   "body": [\n     {\n       "type": "VariableDeclaration",\n       "start": 0,\n       "end": 13,\n       "declarations": [\n         {\n           "type": "VariableDeclarator",\n           "start": 4,\n           "end": 12,\n           "id": {\n             "type": "Identifier",\n             "start": 4,\n             "end": 7,\n             "name": "sum"\n           },\n           "init": {\n             "type": "Literal",\n             "start": 10,\n             "end": 12,\n             "value": 30,\n             "raw": "30"\n           }\n         }\n       ],\n       "kind": "var"\n     }\n   ],\n   "sourceType": "module"\n }\n')])])]),s("h3",{attrs:{id:"语法检查-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法检查-2"}},[a._v("#")]),a._v(" 语法检查")]),a._v(" "),s("p",[a._v("生成 AST 的同时会进行语法检查，如果源码中有语法错误，在这里就会终止")]),a._v(" "),s("p",[a._v("并抛出 语法错误")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//Uncaught SyntaxError: Identifier 'a' has already been declared")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("p",[a._v("在上面的代码中，虽然函数 "),s("code",[a._v("func")]),a._v(" 没有执行，但是在语法分析阶段就已经检查出错误，并报错了")]),a._v(" "),s("p",[a._v("这是在 预编译 阶段就检查出的错误，关于预编译阶段还有更多的例子")]),a._v(" "),s("h2",{attrs:{id:"生成执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成执行上下文"}},[a._v("#")]),a._v(" 生成执行上下文")]),a._v(" "),s("p",[a._v("生成 AST 的同时也会生成该段代码的 执行上下文")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/YuArtian/yuartian.github.io/blob/master/.gitbook/assets/yu-fa-fen-xi-que-ding-ci-fa-zuo-yong-yu.png?raw=true",alt:"语法分析确定执行上下文"}})]),a._v(" "),s("p",[a._v("关于执行上下文 和 其中包含的内容，详见 执行上下文")]),a._v(" "),s("h2",{attrs:{id:"eager-parse-全量解析-和-lazy-parse-惰性解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eager-parse-全量解析-和-lazy-parse-惰性解析"}},[a._v("#")]),a._v(" "),s("strong",[a._v("eager parse(全量解析) 和 lazy parse（惰性解析）")])]),a._v(" "),s("p",[a._v("然而并不是所有 JS 都需要在初始化时就被执行，因此也不需要在初始化时就解析所有的 JS")]),a._v(" "),s("p",[a._v("因为编译 JS 会带来三个成本问题：")]),a._v(" "),s("ol",[s("li",[a._v("****编译不必要的代码会占用 CPU 资源")]),a._v(" "),s("li",[a._v("在 GC 前会占用不必要的内存空间")]),a._v(" "),s("li",[a._v("编译后的代码会缓存在磁盘，占用磁盘空间")])]),a._v(" "),s("p",[a._v("因此所有主流浏览器都实现了 Lazy Parse（延迟解析）")]),a._v(" "),s("h3",{attrs:{id:"区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[a._v("#")]),a._v(" 区别")]),a._v(" "),s("p",[a._v("Lazy Parse 会将不必要的函数（没有立即执行的函数）进行预解析")]),a._v(" "),s("p",[a._v("预解析只验证它跳过函数是语法有效的，并产生正确编译外部函数所需的所有信息")]),a._v(" "),s("p",[a._v("而 eager parse（全量解析）则在调用这个函数时才发生")]),a._v(" "),s("p",[a._v("所以，有如下两种解析器")]),a._v(" "),s("h4",{attrs:{id:"eager-parse-全面解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eager-parse-全面解析"}},[a._v("#")]),a._v(" eager parse（全面解析）：")]),a._v(" "),s("ul",[s("li",[a._v("用于解析立即执行的内容（包括立即执行的函数 和 顶层代码） 跳过没有立即执行的函数")]),a._v(" "),s("li",[a._v("构建语法树")]),a._v(" "),s("li",[a._v("构建函数作用域 (Scopes)")]),a._v(" "),s("li",[a._v("找出所有语法错误")])]),a._v(" "),s("h4",{attrs:{id:"lazy-parse-惰性解析-预解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lazy-parse-惰性解析-预解析"}},[a._v("#")]),a._v(" lazy parse（惰性解析/预解析）：")]),a._v(" "),s("ul",[s("li",[a._v("用于快速扫描没有立即执行的函数")]),a._v(" "),s("li",[s("strong",[a._v("不构建语法树，会构建函数词法环境")]),a._v(" 但不设置词法环境中的变量引用（variable references）和变量申明（variable declarations）")]),a._v(" "),s("li",[a._v("解析速度，大约比 eager解析器 快2倍")]),a._v(" "),s("li",[a._v("找出限定的几种错误（没有遵守 JavaScript 的规范）")])]),a._v(" "),s("h3",{attrs:{id:"解析过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析过程"}},[a._v("#")]),a._v(" 解析过程")]),a._v(" "),s("p",[a._v("这两种解析器在解析的过程中是交替进行解析的")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" let a = 0; //顶层代码 全量解析\n //IIFE\n (function eager() {...})() //立即执行的函数 全量解析\n //顶层函数 但没有立即执行\n function lazy() {...} // 预解析\n ...\n ...\n lazy(); // -> 调用的时候 全量解析\n")])])]),s("p",[a._v("所有的最外层代码 和 IIFE（立即执行函数）直接使用 eager 解析")]),a._v(" "),s("p",[a._v("其他函数，会先进行预解析，在调用的时候才进行全面解析")]),a._v(" "),s("p",[a._v("下面看看一些复杂的解析情况：")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" let f1 = function lazy() {...};//使用lazy-parsing,没有问题\n ​\n let  f2 = function lazy() {...}()\n //糟糕的情况，在看到最后的括号之前已经使用了lazy parse\n //但遇到括号后，不得不里面又转向 eager parse，重新parse\n")])])]),s("p",[a._v("对于嵌套函数对于解析会带来很不好的影响")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" function lazy_outer(){          //没有立即执行 预解析\n     function inner(){....}      //嵌套函数 预解析\n }\n ​\n ...lazy_outer(); //执行的时候 全量解析 lazy_outer\n //V8 会再次解析 inner，即使 inner 已经被解析了一次\n")])])]),s("p",[a._v("嵌套函数 inner 会被预解析两次")]),a._v(" "),s("h3",{attrs:{id:"预解析与闭包问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预解析与闭包问题"}},[a._v("#")]),a._v(" 预解析与闭包问题")]),a._v(" "),s("p",[a._v("除了检查语法错误之外，预解析器另外的一个重要的功能就是检查函数内部是否引用了外部变量")]),a._v(" "),s("p",[a._v("如果引用了外部的变量，预解析器会将栈中的变量复制到堆中，在下次执行到该函数的时候，直接使用堆中的引用，这样就解决了闭包所带来的问题")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("inner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("第一个函数： 变量 a 在栈上，当解析 foo函数的时候，预解析没有发现内部函数，变量 a 就只会在栈上，当foo函数的执行上下文销毁的时候 a变量也会销毁")]),a._v(" "),s("p",[a._v("第二个函数：变量a同时在栈和堆上，当解析 foo函数的时候，预解析发现内部函数引用外部变量 a ， 这时候就会把 a 复制 到堆上，当父函数执行到 a 的赋值语句时，会同时修改 栈和堆上的变量 a 的值, 父函数销毁的时候也只会销毁栈上的变量 a，堆上的变量 a 保留。 最后当内部函数执行完后，堆上的变量a就没有再被引用，就会被垃圾回收掉")]),a._v(" "),s("h3",{attrs:{id:"预解析与字节码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预解析与字节码"}},[a._v("#")]),a._v(" 预解析与字节码")]),a._v(" "),s("p",[a._v("之前 V8 没有字节码，直接将 源码 编译成 二进制的机器码")]),a._v(" "),s("p",[a._v("但是，依然有预解析 和 全量解析 的机制在")])])}),[],!1,null,null,null);t.default=e.exports}}]);