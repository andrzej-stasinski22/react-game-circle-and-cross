(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/win.5b88b303.wav"},,,,function(e,t,a){e.exports=a.p+"static/media/plum.5baac27f.mp3"},function(e,t,a){e.exports=a.p+"static/media/plam.ebda6c04.wav"},function(e,t,a){e.exports=a.p+"static/media/bum.7205563c.mp3"},,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),i=a.n(s),l=(a(19),a(1)),c=a(2),o=a(4),u=a(3),d=a(5),h=a(13),p=a(9),m=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",Object(p.a)({onClick:this.props.onHandleClick,className:"Square",style:{color:"blue"}},"style","X"===this.props.value?{color:"red"}:{color:"blue"}),this.props.value)}}]),t}(r.a.Component),f=a(10),v=a.n(f),b=a(11),y=a.n(b),O=a(12),k=a.n(O),j=a(6),q=a.n(j),x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){var t=this,a=this.state.squares.slice();if(console.log(a),console.log(a[e]),!this.findWinner(a))if(null===a[e]){var n=new Audio(v.a),r=new Audio(y.a);this.state.xIsNext?n.play():r.play(),a[e]=this.state.xIsNext?"X":"O",this.setState({squares:a,xIsNext:!this.state.xIsNext},(function(){t.findWinner(t.state.squares)&&new Audio(q.a).play()}))}else{console.log("Cant click here"),new Audio(k.a).play()}}},{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(m,{onHandleClick:function(){return t.handleClick(e)},value:this.state.squares[e]})}},{key:"findWinner",value:function(e){new Audio(q.a);for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(h.a)(t[a],3),r=n[0],s=n[1],i=n[2];if(e[r]===e[s]&&e[r]===e[i])return console.log(e[r]),e[r]}return null}},{key:"render",value:function(){var e=this,t=this.findWinner(this.state.squares);t?console.log("Winner player: "+t):console.log("no won");var a=t?"Winner is player: "+t:"Player movement: "+(this.state.xIsNext?"X":"O");return r.a.createElement("div",null,r.a.createElement("h3",null,a),r.a.createElement("div",{className:"board-row"},r.a.createElement(m,{onHandleClick:function(){return e.handleClick(0)},value:this.state.squares[0]}),r.a.createElement(m,{onHandleClick:function(){return e.handleClick(1)},value:this.state.squares[1]}),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(r.a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"game"},r.a.createElement("h2",{className:"header"},"Game circle & cross"),r.a.createElement(x,null))}}]),t}(r.a.Component);i.a.render(r.a.createElement(w,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.7fbff5c1.chunk.js.map