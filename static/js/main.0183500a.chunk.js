(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e){e.exports=[{id:"Any",title:"All Genres"},{id:1365,title:"Action and Adventure"},{id:7424,title:"Anime"},{id:783,title:"Children and Family Movies"},{id:6548,title:"Comedy"},{id:5763,title:"Documentary"},{id:26835,title:"Drama"},{id:8711,title:"Horror"},{id:7077,title:"Independent"},{id:1701,title:"Music"},{id:8883,title:"Romantic"},{id:1492,title:"Sci-Fi"},{id:4370,title:"Sports Movies"},{id:8933,title:"Thriller"},{id:83,title:"TV Shows"}]},62:function(e){e.exports=[{id:"movies",title:"Movies"},{id:"series",title:"Series"},{id:"Any",title:"Movies and Series"}]},63:function(e,t,a){e.exports=a(99)},71:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);a(64),a(65);var n=a(0),l=a.n(n),i=a(13),r=a.n(i),c=(a(71),a(20)),o=a(21),s=a(27),u=a(22),m=a(26),d=a(104),f=Object(n.createContext)(),h=a(11),E=a(34),p={},g="https://unogs-unogs-v1.p.rapidapi.com/",v=new Headers;v.append("X-RapidAPI-Host","unogs-unogs-v1.p.rapidapi.com"),v.append("X-RapidAPI-Key","cf523eed82mshed7e62394e60ba7p1091d6jsn2c974a328b59"),p.getNewTitles=function(e){var t=new Request("".concat(g,"/aaapi.cgi?q=get:new7:CA&p=1&t=ns&st=adv"),{method:"GET",headers:v,mode:"cors"});fetch(t).then(function(t){console.log("response: "+t),t.json().then(function(t){console.log(t),e(t)})}).catch(function(e){console.log("error: "+e)})},p.getNewEpisodes=function(e){var t=new Request("".concat(g,"/aaapi.cgi?t=weeklynew&cl=CA&q={query}&st=1"),{method:"GET",headers:v,mode:"cors"});fetch(t).then(function(t){console.log("response: "+t),t.json().then(function(t){console.log(t),e(t)})}).catch(function(e){console.log("error: "+e)})},p.getTitles=function(e,t,a,n,l,i,r,c){var o=new Request("".concat(g,"/aaapi.cgi?q=").concat(e,"-!").concat(t,",").concat(a,"-!0,5-!").concat(i,",").concat(r,"-!").concat(l,"-!").concat(n,"-!english-!Any-!gt0-!{downloadable}&t=ns&cl=33&st=adv&ob=Relevance&p=1&sa=and"),{method:"GET",headers:v,mode:"cors"});fetch(o).then(function(e){console.log("response: "+e),e.json().then(function(e){console.log(e),c(e)})}).catch(function(e){console.log("error: "+e)})},p.getTitleDetail=function(e,t){var a=new Request("".concat(g,"/aaapi.cgi?t=loadvideo&q=").concat(e),{method:"GET",headers:v,mode:"cors"});fetch(a).then(function(e){console.log("response: "+e),e.json().then(function(e){console.log(e),t(e.RESULT)})}).catch(function(e){console.log("error: "+e)})};var b=p,T=0,w=10,y=8,C=10,D=1900,S="Any",k="Any",x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){e.setCurrentYear(),e.fetchNewEpisodes()},e.handleChange=function(t){e.setState(Object(E.a)({},t.target.name,t.target.value))},e.setCurrentYear=function(){var t=new Date,a=Object(h.a)({},e.state);a.currentYear=t.getFullYear(),a.endYear=t.getFullYear(),e.setState(a)},e.fetchTitles=function(t,a,n,l,i,r,c){b.getTitles(t,a,n,l,i,r,c,function(t){var a=Object(h.a)({},e.state);a.allTitles=t.ITEMS,a.count=t.COUNT,a.titleDetail=null,e.setState(a)})},e.pickRandomTitle=function(){b.getTitles("",D,e.state.currentYear,S,k,y,C,function(t){var a=Object(h.a)({},e.state);a.luckyPickItems=t.ITEMS,a.luckyPickItemCount=t.COUNT,e.setState(a,function(){e.displayRandomTitle()})})},e.displayRandomTitle=function(){var t;(t=Math.floor(Math.random()*e.state.luckyPickItems.length))>=0&&e.fetchTitleDetail(e.state.luckyPickItems[t].netflixid)},e.changeView=function(t){var a=Object(h.a)({},e.state);a.view=t,e.setState(a)},e.fetchTitleDetail=function(t){b.getTitleDetail(t,function(t){var a=Object(h.a)({},e.state);a.titleDetail=t,a.titleDetailPlot=t.imdbinfo.plot,a.titleDetailActors=t.people[0].actor,e.setState(a)})},e.fetchNewTitles=function(){b.getNewTitles(function(t){var a=Object(h.a)({},e.state);a.allTitles=t.ITEMS,a.count=t.COUNT,a.titleDetail=null,e.setState(a)})},e.fetchNewEpisodes=function(){b.getNewEpisodes(function(t){var a=Object(h.a)({},e.state);a.episodes=t.results,e.setState(a)})},e.clearTitles=function(){var t=Object(h.a)({},e.state);t.allTitles=[],e.setState(t)},e.clearTitle=function(){var t=Object(h.a)({},e.state);t.titleDetail="",e.setState(t)},e.clearAllTitles=function(){var t=Object(h.a)({},e.state);t.allTitles=[],t.titleDetail="",e.setState(t)},e.performQuickSearch=function(){null===e.state.searchString||e.state.searchString.length<3?alert("Minimum search entry is 3 characters."):e.fetchTitles(e.state.searchString,D,e.state.currentYear,k,S,T,w)},e.performAdvancedSearch=function(){e.state.startYear<1900||e.state.endYear>2019?alert("Year cannot be less than 1900 or more than 2019"):e.state.imdbMin<0||e.state.imdbMax>10?alert("IMDB score cannot be less than 0 or more than 10"):e.fetchTitles("",e.state.startYear,e.state.endYear,e.state.type,e.state.genreID,e.state.imdbMin,e.state.imdbMax)},e.sanitizeString=function(e){var t=e;if(t.includes("<")){var a=t.indexOf("<");t=t.substr(0,a)}return t=(t=(t=t.replace("&#39;","'")).replace("&rsquo;","")).replace("&amp;#39;","'")},e.state={allTitles:[],count:0,episodes:[],titleDetail:null,titleDetailPlot:null,titleDetailActors:[],startYear:D,endYear:null,currentYear:null,view:"icon",searchString:null,type:"movie",genreID:null,imdbMin:T,imdbMax:w,luckyPickItems:[]},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(f.Provider,{value:{state:this.state,handleChange:this.handleChange,fetchTitles:this.fetchTitles,changeView:this.changeView,fetchTitleDetail:this.fetchTitleDetail,fetchNewTitles:this.fetchNewTitles,clearTitles:this.clearTitles,clearAllTitles:this.clearAllTitles,clearTitle:this.clearTitle,pickRandomTitle:this.pickRandomTitle,performQuickSearch:this.performQuickSearch,performAdvancedSearch:this.performAdvancedSearch,sanitizeString:this.sanitizeString}},this.props.children)}}]),t}(n.Component),j=a(106),O=a(108),M=a(107),I=a(105),N=a(60),A=a(59),Y=a(35),R=function(){return l.a.createElement(f.Consumer,null,function(e){var t=e.state,a=e.fetchTitles,n=e.fetchNewTitles,i=(e.clearTitles,e.clearAllTitles),r=e.handleChange,c=e.pickRandomTitle,o=e.performQuickSearch;return l.a.createElement(j.a,{bg:"dark",variant:"dark",expand:"lg"},l.a.createElement(j.a.Brand,{href:"#",onClick:function(){i()},style:{color:"red"}},"Netflix Navigator"),l.a.createElement(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(j.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(O.a,{className:"mr-auto"},l.a.createElement(O.a.Link,{href:"#",onClick:function(){n()}},"What's New"),l.a.createElement(O.a.Link,{href:"#",onClick:function(){c()}},"Lucky Pick"),l.a.createElement(M.a,{title:"Filters",id:"basic-nav-dropdown"},Y.map(function(e){return l.a.createElement(M.a.Item,{href:"#",onClick:function(){a("",D,t.currentYear,S,e.id,T,w)}},e.title)}),l.a.createElement(M.a.Divider,null),l.a.createElement(M.a.Item,{href:"#"},"Top Rated"))),l.a.createElement(I.a,{inline:!0,onSubmit:function(e){e.preventDefault()}},l.a.createElement(N.a,{className:"mr-sm-2",type:"text",placeholder:"Quick Search",name:"searchString",value:t.searchString,onChange:r,onKeyDown:function(e){13===e.keyCode&&o()}}),l.a.createElement(A.a,{variant:"outline-danger",onClick:function(){o()}},"Search"))))})},P=a(100),L=a(61),B=function(){return l.a.createElement(f.Consumer,null,function(e){var t=e.state,a=e.clearTitle,n=e.sanitizeString;return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement(A.a,{onClick:function(){a()},variant:"danger"},"X")),l.a.createElement("h1",null,n(t.titleDetail.nfinfo.title)),l.a.createElement(P.a,null,l.a.createElement(L.a,null,l.a.createElement("img",{src:t.titleDetail.nfinfo.image1,alt:t.titleDetail.nfinfo.title})),l.a.createElement(L.a,null,t.titleDetailPlot&&l.a.createElement("div",null,l.a.createElement("h5",null,"Plot"),l.a.createElement("p",null,n(t.titleDetailPlot))),l.a.createElement(A.a,{variant:"danger",href:"https://www.netflix.com/title/"+t.titleDetail.nfinfo.netflixid,target:"_blank"},"Watch Now")),l.a.createElement(L.a,null,t.titleDetailActors&&l.a.createElement("div",null,l.a.createElement("b",null,"Cast"),l.a.createElement("ol",null,t.titleDetail.people[0].actor.map(function(e){return l.a.createElement("li",{key:e.id},e)})))),l.a.createElement(L.a,null,l.a.createElement("b",null,"Produced"),l.a.createElement("ol",null,t.titleDetail.people[1].creator.map(function(e){return l.a.createElement("li",{key:e.id},e)})),l.a.createElement("b",null,"Directed"),l.a.createElement("ol",null,t.titleDetail.people[2].director.map(function(e){return l.a.createElement("li",{key:e.id},e)})),l.a.createElement("p",null,l.a.createElement("b",null,"Genre "),t.titleDetail.imdbinfo.genre),l.a.createElement("p",null,l.a.createElement("b",null,"Language "),t.titleDetail.imdbinfo.language),l.a.createElement("a",{href:"https://www.imdb.com/title/"+t.titleDetail.imdbinfo.imdbid,target:"_blank"},l.a.createElement("p",null,l.a.createElement("b",null,"IMDB Rating "),t.titleDetail.imdbinfo.rating)),l.a.createElement("p",null,l.a.createElement("b",null,"Runtime "),t.titleDetail.imdbinfo.runtime))),l.a.createElement("hr",null))})},q=a(103),V=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(f.Consumer,null,function(t){var a=t.sanitizeString;return l.a.createElement("div",{class:"media",style:{margin:"10px"}},l.a.createElement("img",{class:"align-self-start mr-3",src:e.props.title.image,alt:a(e.props.title.title),style:{margin:"5px",width:"120px"}}),l.a.createElement("div",{class:"media-body"},l.a.createElement("h4",{class:"mt-0"},a(e.props.title.title)),l.a.createElement("p",null,l.a.createElement("b",null,"Synopsis: "),a(e.props.title.synopsis))))})}}]),t}(n.Component),z=a(101),G=a(102),W=a(62),Q=function(){return l.a.createElement(f.Consumer,null,function(e){var t=e.state,a=e.handleChange,n=(e.fetchTitles,e.performAdvancedSearch);return l.a.createElement("div",null,l.a.createElement(I.a,null,l.a.createElement(I.a.Row,null,l.a.createElement(L.a,null,l.a.createElement(I.a.Label,null,"Start Year: "),l.a.createElement(I.a.Control,{type:"text",placeholder:"Start Year",defaultValue:t.startYear,name:"startYear",onChange:a})),l.a.createElement(L.a,null,l.a.createElement(I.a.Label,null,"End Year: "),l.a.createElement(I.a.Control,{type:"text",placeholder:"End Year",defaultValue:t.endYear,name:"endYear",onChange:a}))),l.a.createElement(I.a.Row,null,l.a.createElement(L.a,null,l.a.createElement(I.a.Label,null,"Type: "),l.a.createElement(I.a.Control,{as:"select",name:"type",onChange:a},W.map(function(e){return l.a.createElement("option",{value:e.id},e.title)}))),l.a.createElement(L.a,null,l.a.createElement(I.a.Label,null,"Genre: "),l.a.createElement(I.a.Control,{as:"select",name:"genreID",onChange:a},Y.map(function(e){return l.a.createElement("option",{value:e.id},e.title)})))),l.a.createElement(I.a.Row,null,l.a.createElement(L.a,null,l.a.createElement(I.a.Label,null,"Lowest IMDB Score: "),l.a.createElement(I.a.Control,{type:"text",placeholder:"Minimum IMDB score",defaultValue:t.imdbMin,name:"imdbMin",onChange:a})),l.a.createElement(L.a,null,l.a.createElement(I.a.Label,null,"Highest IMDB Score: "),l.a.createElement(I.a.Control,{type:"text",placeholder:"Maximum IMDB score",defaultValue:t.imdbMax,name:"imdbMax",onChange:a}))),l.a.createElement(A.a,{variant:"danger",value:"Search",style:{marginTop:"10px"},onClick:function(){n()}},"Search")))})},F=function(){return l.a.createElement(z.a,null,l.a.createElement(f.Consumer,null,function(e){var t=e.state;return l.a.createElement(P.a,null,l.a.createElement(L.a,null,l.a.createElement("h1",{className:"d-flex justify-content-start"},"Welcome!"),l.a.createElement("hr",{class:"my-4"}),l.a.createElement("h5",null,l.a.createElement(G.a,{variant:"danger"},"NEW EPISODES")),l.a.createElement("div",null,t.episodes.map(function(e){return l.a.createElement("li",null,e.title)}))),l.a.createElement(L.a,null,l.a.createElement("h5",null,l.a.createElement(G.a,{variant:"danger"},"DETAILED SEARCH")),l.a.createElement(Q,null)))}))},H=function(){return l.a.createElement(f.Consumer,null,function(e){var t=e.state,a=e.changeView,n=e.fetchTitleDetail,i=e.sanitizeString;return l.a.createElement("div",null,t.allTitles.length>0&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge-light"},"Query returned ",t.count," results"),l.a.createElement("div",{className:"d-flex justify-content-center",style:{marginBottom:"10px"}},l.a.createElement(q.a,{size:"sm",className:"mt-4"},l.a.createElement(A.a,{variant:"danger",onClick:function(){a("icon")}},"Icon"),l.a.createElement(A.a,{variant:"danger",onClick:function(){a("detail")}},"Detail"),l.a.createElement(A.a,{variant:"danger",onClick:function(){a("list")}},"List")))),0===t.allTitles.length&&l.a.createElement(F,null),"icon"===t.view&&l.a.createElement("div",{className:"d-flex justify-content-center",style:{flexWrap:"wrap"}},t.allTitles.map(function(e){return l.a.createElement("a",{href:"#",onClick:function(){n(e.netflixid)}},l.a.createElement("img",{src:e.image,alt:e.title,style:{margin:"5px",width:"120px"}}))})),"detail"===t.view&&l.a.createElement("div",null,t.allTitles.map(function(e){return l.a.createElement("a",{onClick:function(){n(e.netflixid)}},l.a.createElement(V,{title:e,onclick:function(){n(e.netflixid)}}))})),"list"===t.view&&l.a.createElement("div",null,l.a.createElement("ol",{className:"list-group"},t.allTitles.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:"#",onClick:function(){n(e.netflixid)}},l.a.createElement("b",null,i(e.title))),l.a.createElement("p",null,i(e.synopsis)),l.a.createElement("span",{class:"badge badge-warning badge-pill"},"IMDB Score: ",e.rating))}))))})},U=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(x,null,l.a.createElement(d.a,null,l.a.createElement(R,null),l.a.createElement(f.Consumer,null,function(e){return e.state.titleDetail&&l.a.createElement(B,null)}),l.a.createElement(H,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[63,1,2]]]);
//# sourceMappingURL=main.0183500a.chunk.js.map