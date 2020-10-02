(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{13:function(e,n,r){e.exports=r(26)},18:function(e,n,r){},19:function(e,n,r){},26:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(4),i=r.n(o),l=(r(18),r(19),r(12)),c=(r(3),r(2)),s=r(5),d=r(11),m=r.n(d),u=Object(s.b)({name:"markdown",initialState:{text:""},reducers:{convertMarkdown:function(e,n){e.text=m()(n.payload,{sanitize:!0,headerIds:!1})}}}),f=u.actions,h=f.convertMarkdown,w=(f.setText,function(e){return e.markdown.text}),b=u.reducer,g=function(){var e=Object(c.b)(),n="# Welcome to my React Markdown Previewer!\r\n\r\n## This is a sub-heading...\r\n### And here's some other cool stuff:\r\n\r\nHeres some code, `<div></div>`, between 2 backticks.\r\n\r\n```\r\n// this is multi-line code:\r\n\r\nfunction anotherExample(firstLine, lastLine) {\r\n  if (firstLine == '```' && lastLine == '```') {\r\n    return multiLineCode;\r\n  }\r\n}\r\n```\r\n\r\nYou can also make text **bold**... whoa!\r\nOr _italic_.\r\nOr... wait for it... **_both!_**\r\nAnd feel free to go crazy ~~crossing stuff out~~.\r\n\r\nThere's also [links](https://www.freecodecamp.com), and\r\n> Block Quotes!\r\n\r\nAnd if you want to get really crazy, even tables:\r\n\r\nWild Header | Crazy Header | Another Header?\r\n------------ | ------------- | -------------\r\nYour content can | be here, and it | can be here....\r\nAnd here. | Okay. | I think we get it.\r\n\r\n- And of course there are lists.\r\n  - Some are bulleted.\r\n     - With different indentation levels.\r\n        - That look like this.\r\n\r\n\r\n1. And there are numbererd lists too.\r\n1. Use just 1s if you want!\r\n1. And last but not least, let's not forget embedded images:\r\n\r\n![React Logo w/ Text](https://miro.medium.com/max/256/1*gGh9I9ju9w4lXhmWoG2fXA.png)",r=Object(t.useState)(n),o=Object(l.a)(r,2),i=o[0],s=o[1];return Object(t.useEffect)((function(){e(h(n))}),[e]),a.a.createElement("div",{className:"bg-white m-1 mb-3 flex flex-1"},a.a.createElement("textarea",{id:"editor",value:i,onChange:function(n){s(n.target.value),e(h(n.target.value))},resize:"0",className:"p-1 w-full border-solid border-2 border-gray-600 resize-none bg-white"}))},v=function(){var e=Object(c.c)(w);return a.a.createElement("div",{className:"bg-green-200 m-1 mb-3 flex flex-1 flex-grow-50 max-w-50"},a.a.createElement("div",{id:"previewer",className:"p-1 w-full border-solid border-2 border-gray-600 bg-white text-left break-words resize-none",dangerouslySetInnerHTML:{__html:e}}))},x=function(){return a.a.createElement("div",{className:"bg-indigo-200 h-10 flex-shrink-0 flex items-center"},a.a.createElement("div",{className:"flex-1"},"Input"),a.a.createElement("div",{className:"flex-1"},"Preview"))};var k=function(){return a.a.createElement("div",{className:"App h-full bg-indigo-200 flex flex-col"},a.a.createElement(x,null),a.a.createElement("div",{className:"flex justify-around flex-1"},a.a.createElement(g,null),a.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=Object(s.a)({reducer:{markdown:b}});i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,{store:p},a.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,n,r){}},[[13,1,2]]]);
//# sourceMappingURL=main.e9e5277a.chunk.js.map