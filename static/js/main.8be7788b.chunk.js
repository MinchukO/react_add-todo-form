(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),i=a(9),c=a(3),l=a(4),d=a(6),u=a(5),m=a(1),h=(a(15),[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}]),p=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],b=a(2),g=(a(16),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={values:{todoName:"",todoUserId:""},errors:{todoName:!1,todoUserId:!1}},e.handleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState((function(e){return{values:Object(m.a)(Object(m.a)({},e.values),{},Object(b.a)({},r,n)),errors:Object(m.a)(Object(m.a)({},e.errors),{},Object(b.a)({},r,!1))}}))},e.handleSubmit=function(t){t.preventDefault();var a=e.state.values,n=a.todoName,r=a.todoUserId;n&&r?(e.setState({values:{todoName:"",todoUserId:""},errors:{todoName:!1,todoUserId:!1}}),e.props.onAdd(n,r)):e.setState((function(e){return{errors:Object(m.a)(Object(m.a)({},e.errors),{},{todoName:!e.values.todoName,todoUserId:!e.values.todoUserId})}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.values,a=e.errors,n=this.props.users;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"todoName",value:t.todoName,onChange:this.handleChange,placeholder:"Write task here"}),a.todoName&&r.a.createElement("span",{className:"todo__error"},"Please enter a name"),r.a.createElement("br",null),r.a.createElement("select",{name:"todoUserId",value:t.todoUserId,onChange:this.handleChange},r.a.createElement("option",null,"Please choose a user"),n.map((function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)}))),a.todoUserId&&r.a.createElement("span",{className:"todo__error"},"Please select a user"),r.a.createElement("br",null),r.a.createElement("button",{className:"btn-add",type:"submit"},"Add"))}}]),a}(r.a.Component)),y=(a(17),function(e){var t=e.user;return r.a.createElement("div",null,r.a.createElement("span",{className:"user"},t.name))}),f=(a(18),function(e){var t=e.todos;return r.a.createElement("div",{className:"list"},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(y,{user:e.user}),"".concat(e.title," - "),r.a.createElement("span",null,e.completed?r.a.createElement("span",{className:"list__status--done"},"Done"):r.a.createElement("span",{className:"list__status--doing"},"Doing")))}))))});function v(e){return p.find((function(t){return t.id===e}))}var E=h.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{user:v(e.userId)})})),S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todos:E},e.addTodo=function(t,a){e.setState((function(e){var n={id:h.length+1,title:t,userId:a,user:v(+a)};return{todos:[].concat(Object(i.a)(e.todos),[n])}}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"Add todo"),r.a.createElement(g,{users:p,onAdd:this.addTodo}),r.a.createElement("h2",null,"Todo list"),r.a.createElement(f,{todos:this.state.todos}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(S,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.8be7788b.chunk.js.map