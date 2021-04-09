(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{466:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"loader-的执行顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader-的执行顺序"}},[t._v("#")]),t._v(" loader 的执行顺序")]),t._v(" "),s("blockquote",[s("p",[t._v("https://imweb.io/topic/5d4a94a08db073cf44ca8cd0")]),t._v(" "),s("p",[t._v("https://webpack.docschina.org/api/loaders/")])]),t._v(" "),s("p",[t._v("Loader 会从右到左，从下到上的依次执行")]),t._v(" "),s("ul",[s("li",[t._v("最后的 loader 最早调用，将会传入原始资源内容")]),t._v(" "),s("li",[t._v("第一个 loader 最后调用，期望值是传出 JavaScript和 source map（可选）")]),t._v(" "),s("li",[t._v("中间的 loader 执行时，会传入前一个 loader 传出的结果")])]),t._v(" "),s("h2",{attrs:{id:"控制loader执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制loader执行"}},[t._v("#")]),t._v(" 控制loader执行")]),t._v(" "),s("p",[t._v("loader "),s("strong",[t._v("总是")]),t._v("从右到左地被调用。有些情况下，loader 只关心 request 后面的"),s("strong",[t._v("元数据(metadata)")]),t._v("，并且忽略前一个 loader 的结果")]),t._v(" "),s("p",[t._v("在实际（从右到左）执行 loader 之前，会先"),s("strong",[t._v("从左到右")]),t._v("调用 loader 上的 "),s("code",[t._v("pitch")]),t._v(" 方法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n        use"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c-loader'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[t._v("|- a-loader `pitch`\n"),s("span",{pre:!0,attrs:{class:"token unchanged"}},[s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[t._v(" |- b-loader `pitch`\n")]),s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[t._v("   |- c-loader `pitch`\n")]),s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[t._v("     |- requested module is picked up as a dependency\n")]),s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[t._v("   |- c-loader normal execution\n")]),s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[t._v(" |- b-loader normal execution\n")])]),t._v("|- a-loader normal execution\n")])])]),s("p",[t._v("如果 pitch 方法有返回值则会跳过 loader，如果 "),s("code",[t._v("b-loader")]),t._v(" 的 "),s("code",[t._v("pitch")]),t._v(" 方法返回了一些东西：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("someSyncOperation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("pitch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("remainingRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" precedingRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("someCondition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module.exports = require('")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-!'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" remainingRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("');'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[t._v("|- a-loader `pitch`\n"),s("span",{pre:!0,attrs:{class:"token unchanged"}},[s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[t._v(" |- b-loader `pitch` returns a module\n")])]),t._v("|- a-loader normal execution\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);