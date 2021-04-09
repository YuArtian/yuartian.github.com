(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{437:function(t,e,v){"use strict";v.r(e);var _=v(45),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"react的diff策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#react的diff策略"}},[t._v("#")]),t._v(" React的diff策略")]),t._v(" "),v("blockquote",[v("p",[t._v("[http://www.zhufengpeixun.cn/2020/html/62.8.react-source.html#t5110.%20diff%20%E7%AD%96%E7%95%A5](http://www.zhufengpeixun.cn/2020/html/62.8.react-source.html#t5110. diff 策略)")]),t._v(" "),v("p",[t._v("https://zh-hans.reactjs.org/docs/reconciliation.html")])]),t._v(" "),v("h2",{attrs:{id:"原因"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),v("p",[t._v("在某一时间节点调用 React 的 "),v("code",[t._v("render()")]),t._v(" 方法，会创建一棵由 React 元素组成的树")]),t._v(" "),v("p",[t._v("在下一次 state 或 props 更新时，相同的 "),v("code",[t._v("render()")]),t._v(" 方法会返回一棵不同的树")]),t._v(" "),v("p",[t._v("React 需要基于这两棵树之间的差别来判断如何有效率的更新 UI 以保证当前 UI 与最新的树保持同步")]),t._v(" "),v("h2",{attrs:{id:"策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#策略"}},[t._v("#")]),t._v(" 策略")]),t._v(" "),v("p",[t._v("正常的比对需要挨个对比虚拟节点，React 依据三个策略，对 diff 过程进行了优化")]),t._v(" "),v("ul",[v("li",[t._v("Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计")]),t._v(" "),v("li",[t._v("拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构")]),t._v(" "),v("li",[t._v("对于同一层级的一组子节点，它们可以通过唯一"),v("code",[t._v("key")]),t._v("进行区分")])]),t._v(" "),v("h2",{attrs:{id:"diffing算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#diffing算法"}},[t._v("#")]),t._v(" Diffing算法")]),t._v(" "),v("p",[t._v("React 中 state 或者 props 变化之后，触发 render 函数，重新生成了一棵新树。新树老树需要对比结果会存入 diffQueue，统一执行")]),t._v(" "),v("p",[t._v("当开始对比两颗树时，React 首先比较两棵树的根节点类型，当根节点为不同类型的元素时，React 会拆卸原有的树并且建立起新的树")]),t._v(" "),v("blockquote",[v("p",[t._v("当拆卸一棵树时，对应的 DOM 节点也会被销毁。组件实例将执行 "),v("code",[t._v("componentWillUnmount()")]),t._v(" 方法")]),t._v(" "),v("p",[t._v("当建立一棵新的树时，对应的 DOM 节点会被创建以及插入到 DOM 中。组件实例将执行 "),v("code",[t._v("componentWillMount()")]),t._v(" 方法，紧接着 "),v("code",[t._v("componentDidMount()")]),t._v(" 方法")]),t._v(" "),v("p",[t._v("所有跟之前的树所关联的 state 也会被销毁")])]),t._v(" "),v("p",[t._v("如果节点类型相同，则保留 DOM 节点，只更新属性 props")]),t._v(" "),v("p",[t._v("如果节点是 React 组件，会先触发组件更新时期的生命周期，然后递归 diff 子节点")]),t._v(" "),v("h3",{attrs:{id:"深度优先的递归-tree-diff"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#深度优先的递归-tree-diff"}},[t._v("#")]),t._v(" 深度优先的递归/Tree Diff")]),t._v(" "),v("p",[t._v("在递归子节点时，React 会采用深度优先的算法，并且记录递归深度 depth，并且只会对同一层级的节点进行比较")]),t._v(" "),v("p",[t._v("当出现节点跨层级移动时，并不会出现想象中的移动操作，而是整个重新创建")]),t._v(" "),v("h3",{attrs:{id:"component-diff"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#component-diff"}},[t._v("#")]),t._v(" Component Diff")]),t._v(" "),v("ul",[v("li",[t._v("如果是同一类型的组件，按照原策略继续比较 "),v("code",[t._v("virtual DOM tree")])]),t._v(" "),v("li",[t._v("如果不是，则将该组件判断为"),v("code",[t._v("dirty component")]),t._v(",从而替换整个组件下的所有子节点")])]),t._v(" "),v("h3",{attrs:{id:"element-diff"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#element-diff"}},[t._v("#")]),t._v(" Element Diff")]),t._v(" "),v("ul",[v("li",[t._v("当节点处于同一层级时，React diff 提供了三种节点操作,分别为：INSERT(插入)、MOVE(移动)和 REMOVE(删除)")]),t._v(" "),v("li",[t._v("INSERT 新的 component 类型不在老集合里， 即是全新的节点，需要对新节点执行插入操作")]),t._v(" "),v("li",[t._v("MOVE 在老集合有新 component 类型，就需要做移动操作，可以复用以前的 DOM 节点")]),t._v(" "),v("li",[t._v("REMOVE 老 component 不在新集合里的，也需要执行删除操作")])]),t._v(" "),v("p",[t._v("React 会利用 lastIndex（最近一个不需要移动的老节点的mountIndex）和 老节点的 mountIndex，移动可复用节点")]),t._v(" "),v("p",[t._v("遍历新节点时，查找老节点中可复用的节点，如果有可以复用的节点时，进行 index 的对比：")]),t._v(" "),v("ul",[v("li",[t._v("老节点的 mountIndex 大于 lastIndex 的，不需要移动，保持位置不变，更新 lastIndex 为老节点的 mountIndex")]),t._v(" "),v("li",[t._v("如果小于，则需要移动到新节点的位置，不用改变 lastIndex")])]),t._v(" "),v("h3",{attrs:{id:"key"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[t._v("#")]),t._v(" Key")]),t._v(" "),v("p",[t._v("提供 key 值，可以帮助 React 更好的复用节点")])])}),[],!1,null,null,null);e.default=a.exports}}]);