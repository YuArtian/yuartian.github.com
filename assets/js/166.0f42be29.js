(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{531:function(e,t,a){"use strict";a.r(t);var v=a(45),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"set-和-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-和-map"}},[e._v("#")]),e._v(" Set 和 Map")]),e._v(" "),a("h2",{attrs:{id:"set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[e._v("#")]),e._v(" Set")]),e._v(" "),a("p",[e._v("类似于数组，但是成员的值都是唯一的，没有重复的值")]),e._v(" "),a("p",[e._v("Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化")]),e._v(" "),a("h3",{attrs:{id:"去重"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去重"}},[e._v("#")]),e._v(" 去重")]),e._v(" "),a("h4",{attrs:{id:"数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[e._v("#")]),e._v(" 数组")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[...new Set(array)]\n")])])]),a("h4",{attrs:{id:"字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[e._v("#")]),e._v(" 字符串")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[...new Set[string]].join('')\n")])])]),a("h3",{attrs:{id:"判定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判定"}},[e._v("#")]),e._v(" 判定")]),e._v(" "),a("p",[e._v("向 Set 加入值的时候，不会发生类型转换，所以"),a("code",[e._v("5")]),e._v("和"),a("code",[e._v('"5"')]),e._v("是两个不同的值")]),e._v(" "),a("p",[e._v("Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”")]),e._v(" "),a("p",[e._v("它类似于精确相等运算符（"),a("code",[e._v("===")]),e._v("），主要的区别是向 Set 加入值时认为"),a("code",[e._v("NaN")]),e._v("等于自身，而精确相等运算符认为"),a("code",[e._v("NaN")]),e._v("不等于自身")]),e._v(" "),a("h3",{attrs:{id:"属性和方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性和方法"}},[e._v("#")]),e._v(" 属性和方法")]),e._v(" "),a("p",[e._v("Set 结构的实例有以下属性")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Set.prototype.constructor")]),e._v("：构造函数，默认就是"),a("code",[e._v("Set")]),e._v("函数")]),e._v(" "),a("li",[a("code",[e._v("Set.prototype.size")]),e._v("：返回"),a("code",[e._v("Set")]),e._v("实例的成员总数")])]),e._v(" "),a("p",[e._v("Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）")]),e._v(" "),a("h4",{attrs:{id:"四个操作方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四个操作方法"}},[e._v("#")]),e._v(" 四个操作方法")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Set.prototype.add(value)")]),e._v("：添加某个值，返回 Set 结构本身")]),e._v(" "),a("li",[a("code",[e._v("Set.prototype.delete(value)")]),e._v("：删除某个值，返回一个布尔值，表示删除是否成功")]),e._v(" "),a("li",[a("code",[e._v("Set.prototype.has(value)")]),e._v("：返回一个布尔值，表示该值是否为"),a("code",[e._v("Set")]),e._v("的成员")]),e._v(" "),a("li",[a("code",[e._v("Set.prototype.clear()")]),e._v("：清除所有成员，没有返回值")])]),e._v(" "),a("h4",{attrs:{id:"四个遍历方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四个遍历方法"}},[e._v("#")]),e._v(" 四个遍历方法")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Set.prototype.keys()")]),e._v("：返回键名的遍历器")]),e._v(" "),a("li",[a("code",[e._v("Set.prototype.values()")]),e._v("：返回键值的遍历器")]),e._v(" "),a("li",[a("code",[e._v("Set.prototype.entries()")]),e._v("：返回键值对的遍历器")]),e._v(" "),a("li",[a("code",[e._v("Set.prototype.forEach()")]),e._v("：使用回调函数遍历每个成员")])]),e._v(" "),a("p",[a("code",[e._v("keys")]),e._v("方法、"),a("code",[e._v("values")]),e._v("方法、"),a("code",[e._v("entries")]),e._v("方法返回的都是遍历器对象，取值需要用 for...of 遍历")]),e._v(" "),a("p",[e._v("由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以"),a("code",[e._v("keys")]),e._v("方法和"),a("code",[e._v("values")]),e._v("方法的行为完全一致")]),e._v(" "),a("h3",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[e._v("#")]),e._v(" 应用")]),e._v(" "),a("p",[e._v("可以直接用for...of循环遍历 Set")]),e._v(" "),a("p",[e._v("扩展运算符（"),a("code",[e._v("...")]),e._v("）内部使用"),a("code",[e._v("for...of")]),e._v("循环，所以也可以用于 Set 结构")]),e._v(" "),a("p",[e._v("Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let a = new Set([1, 2, 3]);\nlet b = new Set([4, 3, 2]);\n\n// 并集\nlet union = new Set([...a, ...b]);\n// Set {1, 2, 3, 4}\n\n// 交集\nlet intersect = new Set([...a].filter(x => b.has(x)));\n// set {2, 3}\n\n// 差集\nlet difference = new Set([...a].filter(x => !b.has(x)));\n// Set {1}\n")])])]),a("h2",{attrs:{id:"weakset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weakset"}},[e._v("#")]),e._v(" WeakSet")]),e._v(" "),a("ul",[a("li",[e._v("WeakSet 的成员只能是对象，而不能是其他类型的值")]),e._v(" "),a("li",[e._v("WeakSet 中的对象都是弱引用")]),e._v(" "),a("li",[e._v("WeakSet 没有"),a("code",[e._v("size")]),e._v("属性，没有办法遍历它的成员 WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了")]),e._v(" "),a("li",[e._v("WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏")])]),e._v(" "),a("h2",{attrs:{id:"map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[e._v("#")]),e._v(" Map")]),e._v(" "),a("p",[e._v("JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。为了解决这个问题，ES6 提供了 Map 数据结构")]),e._v(" "),a("h2",{attrs:{id:"weakmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weakmap"}},[e._v("#")]),e._v(" WeakMap")])])}),[],!1,null,null,null);t.default=_.exports}}]);