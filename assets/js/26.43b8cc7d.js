(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{225:function(e,t,n){"use strict";n.r(t);var s=n(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"sql雜記"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sql雜記"}},[e._v("#")]),e._v(" Sql雜記")]),e._v(" "),n("h2",{attrs:{id:"optional-condition-in-where-clause"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#optional-condition-in-where-clause"}},[e._v("#")]),e._v(" Optional Condition In Where Clause")]),e._v(" "),n("p",[e._v("情境：當輸入某個參數值才要針對該參數值過濾出資料，否則全取。")]),e._v(" "),n("p",[e._v("剛開始寫 "),n("strong",[e._v("Mysql")]),e._v("，我用三元運算子"),n("code",[e._v("if()")]),e._v("來處理這種條件過濾：")]),e._v(" "),n("pre",[n("code",[e._v("WHERE if(gameType IS NULL , 1 ,if(gameType=gid,1,0) )\n")])]),e._v(" "),n("p",[e._v("不過遇到了"),n("strong",[e._v("Mssql")]),e._v("，雖然它有"),n("code",[e._v("iif()")]),e._v("可以用，不過不像"),n("strong",[e._v("Mysql")]),e._v("可以直接回傳1，它需要以這種形式使用"),n("code",[e._v("1=iif(expression,1,0)")]),e._v("\n不過也因此，我才想到一個更簡單的方法來處理條件過濾：")]),e._v(" "),n("pre",[n("code",[e._v("WHERE (gameType IS NULL OR (gameType=gid) )\n")])]),e._v(" "),n("p",[e._v("理論上第一式為真，就不會再判斷下去，也就是沒輸入參數值時便不作過濾；當有輸入，則根據第二式作判斷。")])])}),[],!1,null,null,null);t.default=o.exports}}]);