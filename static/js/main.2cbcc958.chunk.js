(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,a,n){e.exports=n(601)},168:function(e,a,n){},170:function(e,a,n){},172:function(e,a,n){},174:function(e,a,n){},599:function(e,a,n){},601:function(e,a,n){"use strict";n.r(a);var t=n(5),l=n.n(t),i=n(156),s=n.n(i),o=(n(168),n(157)),d=n(158),r=n(161),c=n(159),h=n(162),u=(n(170),function(e){var a,n=e.handleClick,t=e.handleKeyDown,i=e.value,s=e.label;return l.a.createElement("button",{className:"button ".concat((a=s,isNaN(a)&&"."!==a&&"="!==a?"operator":null)),onClick:function(){return n(i)},onKeyUp:function(e){return t(e.key)},"data-value":i},s)}),y=(n(172),function(e){var a=e.input;return l.a.createElement("div",{className:"display"},a)}),p=(n(174),function(e){var a=e.handleClick,n=e.label,t=e.value;return l.a.createElement("button",{className:"clear-btn",onClick:function(){return a(t)}},n)}),w=n(160),D=n.n(w),m=(n(599),function(e){function a(e){var n;return Object(o.a)(this,a),(n=Object(r.a)(this,Object(c.a)(a).call(this,e))).onKeyDownHandler=function(e){(Number(e)||["-","+","*","/",".","Backspace","Enter","="].includes(e))&&("Backspace"===e?n.handleClear():"Enter"===e||"="===e?n.handleEqual():n.setState(n.handleInput(e)))},n.addToDisplay=function(e){switch(e){case"clear":n.setState({input:""});break;case"equal":n.handleEqual();break;default:n.setState(n.handleInput(e))}},n.handleInput=function(e){var a=n.state.input;if(a.startsWith("+")||a.startsWith("-")||a.startsWith("*")||a.startsWith("/"))return{input:(n.state.input+e).substr(1)};if((a.endsWith("+")||a.endsWith("-")||a.endsWith("*")||a.endsWith(".")||a.endsWith("/"))&&["-","+","*","/","."].includes(e)){var t=n.state.input[n.state.input.length-1];return{input:n.state.input.replace(t,e)}}return{input:n.state.input+e}},n.handleEqual=function(){var e=n.state.input;if(e.endsWith("+")||e.endsWith("-")||e.endsWith("*")||e.endsWith("/"))n.setState({input:"0"});else if(e.endsWith("0")&&"/"===e[e.length-2]||e.startsWith("0")&&"/"===e[1])n.setState({input:"Can't divide by 0"});else{var a=D.a.eval(n.state.input)||0;n.setState({input:a.toString()})}},n.state={input:""},n}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"wrapper"},l.a.createElement(y,{input:this.state.input}),l.a.createElement("div",{className:"row"},l.a.createElement(u,{handleClick:this.addToDisplay,handleKeyDown:this.onKeyDownHandler,label:"7",value:"7"}),l.a.createElement(u,{handleClick:this.addToDisplay,handleKeyDown:this.onKeyDownHandler,label:"8",value:"8"}),l.a.createElement(u,{handleClick:this.addToDisplay,handleKeyDown:this.onKeyDownHandler,label:"9",value:"9"}),l.a.createElement(u,{handleClick:this.addToDisplay,handleKeyDown:this.onKeyDownHandler,label:"/",value:"/"})),l.a.createElement("div",{className:"row"},l.a.createElement(u,{handleClick:this.addToDisplay,handleKeyDown:this.onKeyDownHandler,label:"4",value:"4"}),l.a.createElement(u,{handleClick:this.addToDisplay,handleKeyDown:this.onKeyDownHandler,label:"5",value:"5"}),l.a.createElement(u,{handleClick:this.addToDisplay,handleKeyDown:this.onKeyDownHandler,label:"6",value:"6"}),l.a.createElement(u,{handleClick:this.addToDisplay,handleKeyDown:this.onKeyDownHandler,label:"X",value:"*"})),l.a.createElement("div",{className:"row"},l.a.createElement(u,{handleClick:this.addToDisplay,handleKeyDown:this.onKeyDownHandler,label:"1",value:"1"}),l.a.createElement(u,{handleClick:this.addToDisplay,handleKeyDown:this.onKeyDownHandler,label:"2",value:"2"}),l.a.createElement(u,{handleClick:this.addToDisplay,handleKeyDown:this.onKeyDownHandler,label:"3",value:"3"}),l.a.createElement(u,{handleClick:this.addToDisplay,handleKeyDown:this.onKeyDownHandler,label:"+",value:"+"})),l.a.createElement("div",{className:"row"},l.a.createElement(u,{handleClick:this.addToDisplay,handleKeyDown:this.onKeyDownHandler,label:".",value:"."}),l.a.createElement(u,{handleClick:this.addToDisplay,handleKeyDown:this.onKeyDownHandler,label:"0",value:"0"}),l.a.createElement(u,{handleClick:this.handleEqual,handleKeyDown:this.onKeyDownHandler,label:"=",value:"equal"}),l.a.createElement(u,{handleClick:this.addToDisplay,handleKeyDown:this.onKeyDownHandler,label:"-",value:"-"})),l.a.createElement("div",{className:"row"},l.a.createElement(p,{handleClick:this.addToDisplay,label:"Clear",value:"clear"},"Clear"))))}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[163,2,1]]]);
//# sourceMappingURL=main.2cbcc958.chunk.js.map