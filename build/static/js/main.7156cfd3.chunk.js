(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){e.exports=a(302)},302:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(21),s=a(24),l=a(22),i=a(23),o=a(0),c=a.n(o),u=a(26),m=a.n(u),p=a(304),h=a(305),d=a(53),y=a(39),b=a(306),v={div:{width:"100vw",height:"72px",backgroundColor:"#31BDF8",display:"flex",flexDirection:"column",justifyContent:"center"},h1:{textAlign:"center",margin:"0"},blinkayles:{color:"#FC2D28",fontWeight:"900"},byBZ:{color:"#fff",fontWeight:"200",fontStyle:"italic"}},f=Object(b.a)(function(e){return c.a.createElement("div",{style:v.div},c.a.createElement("div",{onClick:function(){e.history.push("/")}},c.a.createElement("h1",{style:v.h1},c.a.createElement("span",{style:v.blinkayles},"Blinkayles"),c.a.createElement("span",{style:v.byBZ}," ","by Ben Zurkow"))))}),E=a(8),g=a(303),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={onElement:!1},a.onMouseOver=a.onMouseOver.bind(Object(E.a)(Object(E.a)(a))),a.onMouseLeave=a.onMouseLeave.bind(Object(E.a)(Object(E.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.ready||be.push("/")}},{key:"onMouseOver",value:function(e){e.preventDefault(),this.setState({onElement:e.target.innerText})}},{key:"onMouseLeave",value:function(e){e.preventDefault(),this.setState({onElement:!1})}},{key:"render",value:function(){var e=this,t=document.location.pathname.slice(1);return c.a.createElement("div",{style:O.div},this.props.ready?[{label:"Simulate Game",link:"sim-game"},{label:"Simulate Games",link:"sim-games"},{label:"Simulate Tournament",link:"sim-tourney"}].map(function(a,n){return c.a.createElement(g.a,{style:t===a.link?O.onLink:e.state.onElement===a.label?O.onElDiv:O.elDiv,key:n,onMouseOver:e.onMouseOver,onMouseLeave:e.onMouseLeave,value:a.label,to:e.props.ready?"/"+a.link:"/"},a.label)}):null)}}]),t}(o.Component),O={div:{width:"100vw",height:"48px",backgroundColor:"#CAC8C8",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},elDiv:{width:"20%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"#000",textDecoration:"none",backgroundColor:"#CAC8C8",maxWidth:"200px"},onElDiv:{width:"20%",height:"100%",backgroundColor:"#FFE135",display:"flex",justifyContent:"center",alignItems:"center",color:"#000",textDecoration:"none",maxWidth:"200px"},onLink:{width:"20%",height:"100%",backgroundColor:"#FC2D28",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff",textDecoration:"none",maxWidth:"200px"}},x=Object(y.b)(function(e){return{ready:e.auth}})(j),k=a(29),C=a(28),S=a.n(C),w=a(19),D=a.n(w),P=a(32),N=a.n(P),G=a(18),M=a.n(G),B=a(27),I=a.n(B),L=a(116),W=a.n(L),T=a(118),F=a.n(T),A=a(117),R=a.n(A),Z=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={activeStep:0,resultsComponent:null,cards:null},a.handleStep=a.handleStep.bind(Object(E.a)(Object(E.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;if(e.results!==this.props.results){var a=this.props.results.map(function(e,a,n){var r=[];if(0===a)e.pins.forEach(function(e,t){e||r.push(t+1)});else{var s=n[a-1].pins;e.pins.forEach(function(t,a){s[a]!==e.pins[a]&&r.push(a+1)})}return c.a.createElement("div",{key:a+1},c.a.createElement("h1",{style:z.h1},"Turn: ",a+1," ",c.a.createElement("br",null),"Player: ",e.player?t.props.player1:t.props.player2," ",c.a.createElement("br",null),"Pin(s) Hit: ",r.join(", "),c.a.createElement("br",null),"Pins: ",e.pins.map(function(e){return e?"!":"x"}).join(" ")))}),n=c.a.createElement("h1",{key:0,style:z.h1},0===this.props.results[this.props.results.length-1].player?this.props.player2:this.props.player1," Wins in ",c.a.createElement("br",null),this.props.results.length," ",c.a.createElement("br",null),"Moves");a.unshift(n),this.setState({activeStep:0,cards:a})}}},{key:"handleStep",value:function(e){this.setState({activeStep:this.state.activeStep+e})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,0!==this.props.results.length?c.a.createElement("div",null,this.state.cards?this.state.cards[this.state.activeStep]:null,c.a.createElement(W.a,{variant:"progress",steps:this.props.results.length+1,position:"static",activeStep:this.state.activeStep,nextButton:c.a.createElement(I.a,{size:"small",onClick:function(){return e.handleStep(1)},disabled:this.state.activeStep===this.props.results.length},"Next",c.a.createElement(R.a,null)),backButton:c.a.createElement(I.a,{size:"small",onClick:function(){return e.handleStep(-1)},disabled:0===this.state.activeStep},c.a.createElement(F.a,null),"Back")})):null)}}]),t}(o.Component),z={h1:{textAlign:"center"}},J=Z,U=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={p1:"Player 1",p2:"Player 2",pins:10,results:[],error:!1},a.setName=a.setName.bind(Object(E.a)(Object(E.a)(a))),a.playGame=a.playGame.bind(Object(E.a)(Object(E.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"setName",value:function(e){var t,a;(e.preventDefault(),"pins"===e.target.id&&Number(e.target.value)>1e3)?this.setState((t={},Object(k.a)(t,e.target.id,e.target.value),Object(k.a)(t,"error",!0),t)):this.setState((a={},Object(k.a)(a,e.target.id,e.target.value),Object(k.a)(a,"error",!1),a))}},{key:"playGame",value:function(e){var t=this;e.preventDefault();var a={p1:this.state.p1,p2:this.state.p2,pins:this.state.pins};S.a.post("/sim-game",a).then(function(e){return t.setState({results:e.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return c.a.createElement(N.a,{style:V.div},c.a.createElement(D.a,{container:!0,spacing:24},c.a.createElement(D.a,{item:!0,xs:4,style:V.grid},c.a.createElement(M.a,{id:"p1",label:"Player 1",value:this.state.p1||"Player 1",onChange:this.setName})),c.a.createElement(D.a,{item:!0,xs:4,style:V.grid},c.a.createElement("h1",null,"VS.")),c.a.createElement(D.a,{item:!0,xs:4,style:V.grid},c.a.createElement(M.a,{id:"p2",label:"Player 2",value:this.state.p2||"Player 2",onChange:this.setName}))),c.a.createElement("div",{style:V.buttonDiv},c.a.createElement(M.a,{id:"pins",label:this.state.error?"Less Pins, Please!":"Number of Pins",value:this.state.pins,onChange:this.setName,error:this.state.error})),c.a.createElement("div",{style:V.buttonDiv},c.a.createElement(I.a,{variant:"contained",color:"primary",style:V.button,onClick:this.playGame,disabled:this.state.error},"Go!")),c.a.createElement("div",{style:V.buttonDiv},c.a.createElement(J,{results:this.state.results,player1:this.state.p1,player2:this.state.p2})))}}]),t}(o.Component),V={div:{border:"5px solid #000",width:"80%",margin:"50px auto",padding:"50px 10px"},grid:{display:"flex",justifyContent:"center"},buttonDiv:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"},button:{margin:"10px auto"}},H=U,Q=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={pins:10,players:64,names:"",results:[]},a.set=a.set.bind(Object(E.a)(Object(E.a)(a))),a.playGame=a.playGame.bind(Object(E.a)(Object(E.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"set",value:function(e){e.preventDefault(),this.setState(Object(k.a)({},e.target.id,e.target.value))}},{key:"playGame",value:function(e){var t=this;e.preventDefault(),this.state.names.length?S.a.post("/tourney",{names:this.state.names,pins:this.state.pins}).then(function(e){return t.setState({results:e.data})}).catch(function(e){return console.log(e)}):S.a.post("/tourney",{players:Number(this.state.players),pins:Number(this.state.pins)}).then(function(e){return t.setState({results:e.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return c.a.createElement(N.a,{style:q.div},c.a.createElement(D.a,{container:!0,spacing:24},c.a.createElement(D.a,{item:!0,xs:4,style:q.grid},c.a.createElement("h1",null,"Select Number of Players"),c.a.createElement("p",{style:q.p},"Enter a number of players"),c.a.createElement(M.a,{style:q.tf,id:"players",label:"Number of Players",value:this.state.players,onChange:this.set})),c.a.createElement(D.a,{item:!0,xs:4,style:q.grid},c.a.createElement("h1",null,"OR")),c.a.createElement(D.a,{item:!0,xs:4,style:q.grid},c.a.createElement("h1",null,"Enter a List of Names"),c.a.createElement("p",{style:q.p},"Seperate names with commas"),c.a.createElement(M.a,{style:q.tf,id:"names",label:"Enter Names",value:this.state.names,onChange:this.set}))),c.a.createElement("div",{style:q.buttonDiv},c.a.createElement(M.a,{id:"pins",label:"Number of Pins",value:this.state.pins,onChange:this.set})),c.a.createElement("div",{style:q.buttonDiv},c.a.createElement(I.a,{variant:"contained",color:"primary",style:q.button,onClick:this.playGame},"Go!")),this.state.results.length?c.a.createElement("div",null,c.a.createElement("h1",null,"Winner: ",this.state.results[this.state.results.length-1][0]),c.a.createElement("h2",null,"Runner Up: ",this.state.results[this.state.results.length-2].find(function(t){return t!==e.state.results[e.state.results.length-1][0]})),c.a.createElement("h3",null,"Round by Round"),c.a.createElement("div",{style:q.rounds},this.state.results.map(function(e,t,a){var n="Round "+(t+1).toString();return 0===t&&(n="Start"),t===a.length-1&&(n="Winner"),c.a.createElement("div",{key:t},c.a.createElement("h4",null,n),e.map(function(e,t){return c.a.createElement("p",{key:t},e)}))}))):null)}}]),t}(o.Component),q={div:{border:"5px solid #000",width:"80%",margin:"50px auto",padding:"50px 10px"},grid:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},tf:{marginTop:"10px"},p:{margin:"0"},buttonDiv:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"},button:{margin:"10px auto"},rounds:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-around"}},K=Q,X=a(119),Y=a.n(X),$=a(121),_=a.n($),ee=a(34),te=a.n(ee),ae=a(120),ne=a.n(ae),re=a(55),se=a.n(re),le=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={p1:"Player 1",p2:"Player 2",pins:10,games:3,results:[],pinsError:!1},a.setName=a.setName.bind(Object(E.a)(Object(E.a)(a))),a.playGame=a.playGame.bind(Object(E.a)(Object(E.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"setName",value:function(e){e.preventDefault(),this.setState(Object(k.a)({pinsError:!1,gamesError:!1},e.target.id,e.target.value)),"pins"===e.target.id&&Number(e.target.value)>1e4&&this.setState({pinsError:!0}),"games"===e.target.id&&Number(e.target.value)>1e6&&this.setState({gamesError:!0})}},{key:"playGame",value:function(e){var t=this;e.preventDefault();var a={p1:this.state.p1,p2:this.state.p2,pins:this.state.pins,games:this.state.games};S.a.post("/sim-games",a).then(function(e){return t.setState({results:e.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return c.a.createElement(N.a,{style:ie.div},c.a.createElement(D.a,{container:!0,spacing:24},c.a.createElement(D.a,{item:!0,xs:4,style:ie.grid},c.a.createElement(M.a,{id:"p1",label:"Player 1",value:this.state.p1||"Player 1",onChange:this.setName})),c.a.createElement(D.a,{item:!0,xs:4,style:ie.grid},c.a.createElement("h1",null,"VS.")),c.a.createElement(D.a,{item:!0,xs:4,style:ie.grid},c.a.createElement(M.a,{id:"p2",label:"Player 2",value:this.state.p2||"Player 2",onChange:this.setName}))),c.a.createElement("div",{style:ie.buttonDiv},c.a.createElement(M.a,{id:"pins",label:this.state.pinsError?"Less Pins, Please!":"Number of Pins",error:this.state.pinsError,value:this.state.pins,onChange:this.setName})),c.a.createElement("div",{style:ie.buttonDiv},c.a.createElement(M.a,{id:"games",label:this.state.gamesError?"Less Games, Please!":"Number of Games",value:this.state.games,onChange:this.setName,error:this.state.gamesError})),c.a.createElement("div",{style:ie.buttonDiv},c.a.createElement(I.a,{variant:"contained",color:"primary",style:ie.button,onClick:this.playGame,disabled:this.state.pinsError||this.state.gamesError},"Go!")),c.a.createElement("div",{style:ie.buttonDiv},c.a.createElement(Y.a,null,c.a.createElement(ne.a,null,c.a.createElement(se.a,null,c.a.createElement(te.a,null,"Name"),c.a.createElement(te.a,null,"Games Won"))),c.a.createElement(_.a,null,c.a.createElement(se.a,null,c.a.createElement(te.a,null,this.state.p1),c.a.createElement(te.a,null,this.state.results[this.state.p1]||"-")),c.a.createElement(se.a,null,c.a.createElement(te.a,null,this.state.p2),c.a.createElement(te.a,null,this.state.results[this.state.p2]||"-"))))))}}]),t}(o.Component),ie={div:{border:"5px solid #000",width:"80%",margin:"50px auto",padding:"50px 10px"},grid:{display:"flex",justifyContent:"center"},buttonDiv:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"},button:{margin:"10px auto"}},oe=le,ce=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={password:""},a.updatePass=a.updatePass.bind(Object(E.a)(Object(E.a)(a))),a.checkPassword=a.checkPassword.bind(Object(E.a)(Object(E.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"checkPassword",value:function(e){e.preventDefault(),this.props.confirmPassword(this.state.password)}},{key:"updatePass",value:function(e){e.preventDefault(),this.setState({password:e.target.value})}},{key:"render",value:function(){return c.a.createElement("div",null,this.props.ready?c.a.createElement("h1",{style:ue.h1},"Welcome to my version of Blinkayles!",c.a.createElement("br",null),c.a.createElement("br",null),"Select a game type from the navigation bar above to get started",c.a.createElement("br",null),c.a.createElement("br",null),"I look forward to discussing my solution in person!",c.a.createElement("br",null),c.a.createElement("br",null),"- Ben"):c.a.createElement("div",{style:ue.div},c.a.createElement(M.a,{id:"password",label:"Password",value:this.state.password,onChange:this.updatePass}),c.a.createElement(I.a,{variant:"contained",color:"primary",onClick:this.checkPassword,style:ue.btn},"Enter")))}}]),t}(o.Component),ue={h1:{textAlign:"center",marginTop:"100px"},div:{width:"100vw",marginTop:"50px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},btn:{marginTop:"50px"}},me=Object(y.b)(function(e){return{ready:e.auth}},function(e){return{confirmPassword:function(t){return e((a=t,function(e){return S.a.post("/auth",{password:a}).then(function(e){return e.data}).then(function(t){return t?e({type:"SET"}):null}).catch(function(e){return console.log(e)})}));var a}}})(ce),pe=a(33),he=a(122),de=Object(pe.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"SET":return!0;default:return e}}}),ye=Object(pe.d)(de,Object(pe.a)(he.a));a.d(t,"history",function(){return be});var be=Object(d.a)(),ve=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(y.a,{store:ye},c.a.createElement("div",{style:fe.all},c.a.createElement(f,null),c.a.createElement(x,null),c.a.createElement(p.a,{exact:!0,path:"/",component:me}),c.a.createElement(p.a,{path:"/home",component:me}),c.a.createElement(p.a,{path:"/sim-game",component:H}),c.a.createElement(p.a,{path:"/sim-games",component:oe}),c.a.createElement(p.a,{path:"/sim-tourney",component:K})))}}]),t}(o.Component),fe={all:{fontFamily:"Questrial, sans-serif"}};m.a.render(c.a.createElement(h.a,{history:be},c.a.createElement(p.a,{path:"/",component:ve})),document.getElementById("root"))}},[[123,2,1]]]);
//# sourceMappingURL=main.7156cfd3.chunk.js.map