(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{264:function(e,a,t){e.exports=t(358)},269:function(e,a,t){},270:function(e,a,t){},358:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(15),i=t.n(r),o=(t(269),t(270),t(60)),c=t(244),u=t.n(c),s=t(196),b=t(204),m=t(203),d=t(173),v=t(113),g=t(243),p=t.n(g),f=t(206),h=t(205),k=t(197),E=t(121),w=t(195),y=Object(w.a)(function(e){return{root:{flexGrow:1},appbar:{background:"white"},menuButton:{marginRight:e.spacing(2)},toolbar:{color:"#3ddb93"},title:{flexGrow:1,color:"#3ddb93"}}});function C(){var e=y(),a=n.a.useState(!0),t=Object(o.a)(a,2),l=t[0],r=t[1],i=n.a.useState(null),c=Object(o.a)(i,2),g=c[0],w=c[1],C=Boolean(g);function D(){w(null)}return n.a.createElement("div",{className:e.root},n.a.createElement(s.a,{position:"sticky",className:e.appbar},n.a.createElement(k.a,{className:e.toolbar},n.a.createElement(d.a,{"aria-label":"Menu",className:e.menuButton,color:"inherit",edge:"start"},n.a.createElement(p.a,null)),n.a.createElement(m.a,null,n.a.createElement(b.a,{control:n.a.createElement(h.a,{"aria-label":"LoginSwitch",checked:l,onChange:function(e){r(e.target.checked)}}),label:l?"Logout":"Login"})),n.a.createElement(E.a,{className:e.title,variant:"h6"},"TaskR"),l&&n.a.createElement("div",null,n.a.createElement(d.a,{"aria-controls":"menu-appbar","aria-haspopup":"true","aria-label":"Account of current user",color:"inherit",onClick:function(e){w(e.currentTarget)}},n.a.createElement(u.a,null)),n.a.createElement(v.a,{anchorEl:g,anchorOrigin:{vertical:"top",horizontal:"right"},id:"menu-appbar",keepMounted:!0,onClose:D,open:C,transformOrigin:{vertical:"top",horizontal:"right"}},n.a.createElement(f.a,{onClick:D},"My account"),n.a.createElement(f.a,{onClick:function(){r(!1),w(null)}},"Logout"))))))}var D=t(31),O=t(96),j=t.n(O),x=t(94),N=t(222),T=t(64),S=t.n(T),P=t(373),A=t(372),z=[{value:"abtesting",label:"abtesting"},{value:"alpha",label:"alpha"},{value:"analysis",label:"analysis"},{value:"api",label:"api"},{value:"application",label:"application"},{value:"architecture",label:"architecture"},{value:"backend",label:"backend"},{value:"beta",label:"beta"},{value:"blocked",label:"blocked"},{value:"browser",label:"browser"},{value:"bug",label:"bug"},{value:"bugfix",label:"bugfix"},{value:"cache",label:"cache"},{value:"cicd",label:"cicd"},{value:"cloud",label:"cloud"},{value:"cms",label:"cms"},{value:"crm",label:"crm"},{value:"css",label:"css"},{value:"cta",label:"cta"},{value:"database",label:"database"},{value:"deploy",label:"deploy"},{value:"design",label:"design"},{value:"devops",label:"devops"},{value:"domain",label:"domain"},{value:"feature",label:"feature"},{value:"feedback",label:"feedback"},{value:"fix",label:"fix"},{value:"framework",label:"framework"},{value:"frontend",label:"frontend"},{value:"fullstack",label:"fullstack"},{value:"growth",label:"growth"},{value:"hotfix",label:"hotfix"},{value:"html",label:"html"},{value:"implementation",label:"implmentation"},{value:"integration",label:"integration"},{value:"interface",label:"interface"},{value:"javascript",label:"javascript"},{value:"loadtest",label:"loadtest"},{value:"localization",label:"localization"},{value:"material",label:"material"},{value:"metric",label:"metric"},{value:"mobile",label:"mobile"},{value:"mockup",label:"mockup"},{value:"monitoring",label:"monitoring"},{value:"navigation",label:"navigation"},{value:"optimization",label:"optimization"},{value:"organization",label:"organization"},{value:"patch",label:"patch"},{value:"performance",label:"performance"},{value:"platform",label:"platform"},{value:"plugin",label:"plugin"},{value:"portal",label:"portal"},{value:"production",label:"production"},{value:"react",label:"react"},{value:"refactor",label:"refactor"},{value:"route",label:"route"},{value:"seed",label:"seed"},{value:"seo",label:"seo"},{value:"server",label:"server"},{value:"service",label:"service"},{value:"simulation",label:"simulation"},{value:"syles",label:"syles"},{value:"system",label:"system"},{value:"task",label:"task"},{value:"testing",label:"testing"},{value:"ui",label:"ui"},{value:"unittest",label:"unittest"},{value:"update",label:"update"},{value:"user",label:"user"},{value:"ux",label:"ux"},{value:"vm",label:"vm"},{value:"wireframe",label:"wireframe"},{value:"wish",label:"wish"}],B=[{value:0,label:"None"},{value:1,label:"Planned"},{value:2,label:"In Progress"},{value:3,label:"Blocked"},{value:4,label:"Completed"}],I=[{value:0,label:"None"},{value:1,label:"Wish"},{value:2,label:"Low"},{value:3,label:"Medium"},{value:4,label:"High"}],L=t(245),U=t.n(L);var W=function(e){return n.a.createElement(U.a,{title:"Tasks",columns:e.tasks.columns,data:e.tasks.data,onRowClick:function(a,t){return e.toggleTask(t)},options:{headerStyle:{backgroundColor:"#01579b",color:"#FFF"},rowStyle:{backgroundColor:"#EEE"}},actions:[{icon:function(){return"Create"},title:"what",tooltip:"Add Task",isFreeAction:!0,onClick:function(){return alert("You want to create a task")}}]})},_=t(95),M=t(216),Y=t(218),G=t(258),R=t(374),F=t(375),V=t(256),J=t(241),K=t(225),H=t(87),$=t(226),q=t(257),Q=t.n(q);var X=t(259);var Z=function(e){var a=Object(l.useState)(e.inputContent),t=Object(o.a)(a,2),r=t[0],i=t[1];return Object(l.useEffect)(function(){i(e.inputContent),document.title="ICLength: ".concat(e.inputContent.length)},[e.inputContent]),n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{type:"button",onClick:function(){e.getContent(r)}},"Save Content"),n.a.createElement(X.a,{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_TINYMCE_API_KEY,initialValue:r,init:{plugins:"link image code preview lists insertdatetime table",toolbar:"preview | undo redo | bold italic | forecolor backcolor | alignleft aligncenter alignright | code | numlist bullist table insertdatetime",height:400},onEditorChange:function(e){i(e)},value:r}))},ee=Object(w.a)(function(e){return{root:{padding:e.spacing(3,2),backgroundColor:"#f5f5f5"},submitButton:{marginRight:e.spacing(1)},title:{flexGrow:1,fontSize:25,fontWeight:900},iconSmall:{fontSize:20},button:{display:"block",marginTop:e.spacing(2)},datePicker:{margin:e.spacing(1),maxWidth:115},dropDown:{margin:e.spacing(1),minWidth:150},github:{margin:e.spacing(1),minWidth:200},midSection:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start"}}});var ae=function(e){var a={id:"",content:"",github:"",priority:0,progress:0,starred:!1,startDate:null,startDateUnix:null,tags:[],targetDate:null,targetDateUnix:null,title:""},t=ee(),r=Object(l.useState)(e.taskData),i=Object(o.a)(r,2),c=i[0],u=i[1];Object(l.useEffect)(function(){u(e.taskData)},[e.taskData]);var b,m=function(e){return function(a){"starred"===e?u(Object(D.a)({},c,{starred:!c.starred})):"title"===e?u(Object(D.a)({},c,{title:a.target.value})):"progress"===e?u(Object(D.a)({},c,{progress:a.target.value})):"priority"===e?u(Object(D.a)({},c,{priority:a.target.value})):"github"===e&&u(Object(D.a)({},c,{github:a.target.value}))}},d=function(e){return function(a){var t,l=1e3*S()(a).unix(),n="".concat(e,"Unix");u(Object(D.a)({},c,(t={},Object(_.a)(t,e,a),Object(_.a)(t,n,l),t)))}},v=function(e){var a,t=Object(D.a)({},e);return""===e.id&&(t=function(e){var a=Object(D.a)({},e);return a.id=Q()(),a}(t)),t.tags=(a=e.tags,Array.isArray(a)?a.map(function(e){return e.value}).join(", "):a),t};return n.a.createElement(H.MuiPickersUtilsProvider,{utils:V.a},n.a.createElement(Y.a,{className:"Task"},n.a.createElement(x.a,{className:t.root},n.a.createElement(s.a,{position:"static",color:"default"},n.a.createElement(k.a,null,n.a.createElement(J.a,{checked:Boolean(c&&c.starred),onClick:m("starred"),icon:n.a.createElement(A.a,null),checkedIcon:n.a.createElement(P.a,null),name:"starred"}),n.a.createElement(E.a,{variant:"h6",color:"inherit",className:t.title},c&&c.title&&c.title.length?c.title:"Create Task"),n.a.createElement($.a,{title:"Save Task"},n.a.createElement(M.a,{variant:"contained",color:"primary",className:t.submitButton,onClick:function(){console.log("submitted..");var a=v(c);a.newTask?(console.log("new task"),j.a.post("http://localhost:3000/addtask",a).then(function(){e.loadTasks()},function(e){console.log(e)})):a.newTask||(console.log("update exisiting task"),j.a.put("http://localhost:3000/updatetask",a).then(function(){e.loadTasks()},function(e){console.log(e)}))}},n.a.createElement(R.a,{className:t.iconSmall}))),n.a.createElement($.a,{title:"Clear Task"},n.a.createElement(M.a,{variant:"contained",color:"secondary",onClick:function(){u(Object(D.a)({},a))}},n.a.createElement(F.a,{className:t.iconSmall}))))),n.a.createElement(K.a,{error:c&&!!(c.title&&c.title.length<1),fullWidth:!0,id:"title",label:"Title",onChange:m("title"),placeholder:"Title...",style:{margin:8},value:c&&c.title}),n.a.createElement("div",{className:t.midSection},n.a.createElement(K.a,{className:t.dropDown,id:"progress",label:"Progress",onChange:m("progress"),select:!0,value:c&&c.progress,variant:"outlined"},B.map(function(e){return n.a.createElement(f.a,{key:e.value,value:e.value},e.label)})),n.a.createElement(K.a,{className:t.dropDown,id:"priority",label:"Priority",onChange:m("priority"),select:!0,value:c&&c.priority,variant:"outlined"},I.map(function(e){return n.a.createElement(f.a,{key:e.value,value:e.value},e.label)})),n.a.createElement(H.DatePicker,{animateYearScrolling:!0,className:t.datePicker,label:"Start Date",minDate:Date.now(),maxDate:c&&c.targetDate?c.targetDate:S()("9999-01-01"),onChange:d("startDate"),value:c&&c.startDate}),n.a.createElement(H.DatePicker,{animateYearScrolling:!0,className:t.datePicker,label:"Target Date",minDate:c&&c.startDate?c.startDate:Date.now(),onChange:d("targetDate"),value:c&&c.targetDate}),n.a.createElement(K.a,{className:t.github,id:"github",label:"Github",onChange:m("github"),placeholder:"Github link...",value:c&&c.github})),n.a.createElement(Z,{getContent:function(e){u(Object(D.a)({},c,{content:e}))},inputContent:c&&c.content||""}),n.a.createElement(G.a,{allowCreateWhileLoading:!1,createOptionPosition:"last",formatCreateLabel:function(e){return"Add ".concat(e,"..")},getNewOptionData:function(e,a){return{label:a,value:e,__isNew__:!0}},isClearable:!0,isMulti:!0,isValidNewOption:function(e){return!e.includes(" ")},menuPlacement:"auto",onChange:function(e){u(null===e?Object(D.a)({},c,{tags:[]}):Object(D.a)({},c,{tags:e}))},options:z,placeholder:"Enter tags...",value:c&&c.tags&&(b=c.tags,Array.isArray(b)?b:b.split(", ").map(function(e){return{label:e,value:e}}))||[]}))))},te=Object(w.a)(function(e){return{root:{flexGrow:1},paper:{textAlign:"center",color:e.palette.text.secondary}}});function le(){var e=te(),a=Object(l.useState)({columns:[{title:"Star",field:"starred",type:"boolean",cellStyle:{backgroundColor:"grey",color:"blue"},render:function(e){return e&&e.starred?n.a.createElement(P.a,null):n.a.createElement(A.a,null)}},{title:"Title",field:"title"},{title:"Progress",field:"progress",type:"numeric",render:function(e){return n.a.createElement("p",null,e&&e.progress&&B.find(function(a){return a.value===e.progress}).label)}},{title:"Priority",field:"priority",type:"numeric",render:function(e){return n.a.createElement("p",null,e&&e.priority&&I.find(function(a){return a.value===e.priority}).label)}},{title:"Start Date",field:"startDateUnix",type:"datetime",render:function(e){return n.a.createElement("p",null,S()(e.startDateUnix).format("M/D/YY"))}},{title:"Target Date",field:"targetDateUnix",type:"datetime",render:function(e){return n.a.createElement("p",null,S()(e.targetDateUnix).format("M/D/YY"))}},{title:"Tags",field:"tags",type:"string"}],data:[],selectedTask:0}),t=Object(o.a)(a,2),r=t[0],i=t[1],c=function(){j.a.get("http://localhost:3000/dynamomulti").then(function(e){var a=e.data.Items.map(function(e){var a=Object(D.a)({},e.task);return a.email=e.email,a.taskID=e.taskID,a.newTask=!1,a});i(Object(D.a)({},r,{data:a}))},function(e){console.log(e)})};Object(l.useEffect)(function(){c()},[]);return n.a.createElement("div",{className:e.root},n.a.createElement(N.a,{container:!0,spacing:3},n.a.createElement(N.a,{item:!0,xs:6},n.a.createElement(x.a,{className:e.paper},n.a.createElement(W,{tasks:r,toggleTask:function(e){var a=e.tableData.id;i(Object(D.a)({},r,{selectedTask:a}))}}))),n.a.createElement(N.a,{item:!0,xs:6},n.a.createElement(x.a,{className:e.paper},n.a.createElement(ae,{taskData:r.data[r.selectedTask],loadTasks:c})))))}var ne=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(C,null),n.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[264,1,2]]]);
//# sourceMappingURL=main.c903ece4.chunk.js.map