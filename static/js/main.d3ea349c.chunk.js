(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),i=(n(14),n(3)),s=n(4),u=n(6),l=n(5),d=n(7),m=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={items:[],isLoaded:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,items:t})})}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.items;return t?o.a.createElement("div",{className:"App"},o.a.createElement("table",{border:"1"},o.a.createElement("td",null,n.map(function(e){return o.a.createElement("tr",{key:e.id},"Name: ",e.name," | Email: ",e.email)}),";"))):o.a.createElement("div",null,"Loading")}}]),t}(o.a.Component);c.a.render(o.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.d3ea349c.chunk.js.map