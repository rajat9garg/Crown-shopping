(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{51:function(e,t,n){e.exports=n(88)},56:function(e,t,n){},58:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),i=n.n(c),l=(n(56),n(8)),o=n.n(l),s=n(2),u=n(14),m=n(15),d=n(16),p=n(18),f=n(17),E=(n(58),n(6)),h=n(5),b="SET_CURRENT_USER",g=n(4),v=Object(g.a)([function(e){return e.directory}],(function(e){return e.sections})),O=(n(63),Object(E.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.match,i=e.linkUrl,l=e.history;return console.log(i),r.a.createElement("div",{className:"".concat(a," menu-item"),onClick:function(){return l.push("".concat(c.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),y=(n(65),Object(g.b)({sections:v})),C=Object(h.b)(y)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.title,n=e.imageUrl,a=e.id,c=e.size,i=e.linkUrl;return r.a.createElement(O,{key:a,title:t,imageUrl:n,size:c,linkUrl:i})})))})),j=(n(66),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(C,null))}),N=function(e){return e.shop},w=Object(g.a)([N],(function(e){return e.shop})),k=Object(g.a)([w],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),I=Object(g.a)([N],(function(e){return e.isFetching})),S=Object(g.a)([N],(function(e){return!!e.shop})),T=(n(67),{TOGGLE_HIDDEN_STATE:"TOGGLE_HIDDEN_STATE",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",DECREASE_ITEM_COUNT:"DECREASE_ITEM_COUNT"}),_=function(){return{type:T.TOGGLE_HIDDEN_STATE}},U=function(e){return{type:T.ADD_ITEM,payload:e}},x=(n(68),n(19)),A=(n(69),function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,c=Object(x.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},c),t)}),L=Object(h.b)(null,(function(e){return{addItem:function(t){return e(U(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},c)),r.a.createElement(A,{onClick:function(){return n(t)},inverted:!0},"Add To Cart"))})),R=Object(h.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(g.a)([k],(function(e){return console.log(e,"-----"),e.find((function(e){return e?e.routeName===n:null}))})))(e)};var n}))((function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map((function(e){return r.a.createElement(L,{key:e.id,item:e})}))))})),D=(n(70),function(e){var t=e.title,n=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(L,{key:e.id,item:e})}))))}),H=Object(g.b)({shop:k}),P=Object(h.b)(H)((function(e){var t=e.shop;return console.log(t),r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(x.a)(e,["id"]);return r.a.createElement(D,Object.assign({key:t},n))})))})),F={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},M=n(25),G=n.n(M);n(71),n(74);G.a.initializeApp({apiKey:"AIzaSyD6SBh8fhY6UsRKNxuryMkdzHgp_jX7820",authDomain:"crwn-db-d6496.firebaseapp.com",databaseURL:"https://crwn-db-d6496.firebaseio.com",projectId:"crwn-db-d6496",storageBucket:"crwn-db-d6496.appspot.com",messagingSenderId:"442993214295",appId:"1:442993214295:web:0615ad2a5cd7fab3517412"});var q=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=B.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(s.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),z=G.a.auth(),B=G.a.firestore(),V=new G.a.auth.GoogleAuthProvider;V.setCustomParameters({prompt:"select_account"});var W=function(){return z.signInWithPopup(V)},K=(G.a,function(){return function(e){var t=B.collection("collections");e({type:F.FETCH_COLLECTIONS_START}),t.get().then((function(t){var n=t.docs.map((function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{});e(function(e){return{type:F.FETCH_COLLECTIONS_SUCCESS,payload:e}}(n))})).catch((function(t){var n;e((n=t.message,{type:F.FETCH_COLLECTIONS_FAILURE,payload:n}))}))}}),Y=n(34),$=n(35);function J(){var e=Object(Y.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return J=function(){return e},e}function Q(){var e=Object(Y.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Q=function(){return e},e}var X=$.a.div(Q()),Z=$.a.div(J()),ee=function(e){return function(t){var n=t.isloading,a=Object(x.a)(t,["isloading"]);return console.log(n),n?r.a.createElement(X,null,r.a.createElement(Z,null)):r.a.createElement(e,a)}},te=ee(R),ne=ee(P),ae=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchCollectionsStartAsync)()}},{key:"render",value:function(){var e=this.props,t=e.match,n=e.collectionIsFetching,a=e.collectionIsLoaded;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(E.b,{exact:!0,path:"".concat(t.path),render:function(e){return r.a.createElement(ne,Object.assign({isloading:n},e))}}),r.a.createElement(E.b,{path:"".concat(t.path,"/:collectionId"),render:function(e){return r.a.createElement(te,Object.assign({isloading:!a},e))}}))}}]),n}(r.a.Component),re=Object(g.b)({collectionIsFetching:I,collectionIsLoaded:S}),ce=Object(h.b)(re,(function(e){return{fetchCollectionsStartAsync:function(){return e(K())}}}))(ae),ie=function(e){return e.cart},le=Object(g.a)([ie],(function(e){return e.cartItems})),oe=Object(g.a)([le],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),se=Object(g.a)([le],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),ue=Object(g.a)([ie],(function(e){return e.hidden})),me=(n(76),Object(h.b)(null,(function(e){return{clearItem:function(t){return e({type:T.REMOVE_ITEM,payload:t})},addItem:function(t){return e(U(t))},decreaseItemCount:function(t){return e({type:T.DECREASE_ITEM_COUNT,payload:t})}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.decreaseItemCount,i=t.name,l=t.imageUrl,o=t.price,s=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},s),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"},o),r.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))}))),de=n(45),pe=n.n(de),fe=function(e){var t=e.price,n=100*t;return r.a.createElement(pe.a,{label:"Pay Now",name:"Crown Clothing Db",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your Total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Success")},stripeKey:"pk_test_foO8iBnVl5PKFGgbNYnvs0pd"})},Ee=(n(77),Object(g.b)({item:le,total:se})),he=Object(h.b)(Ee)((function(e){var t=e.item,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Desription")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(me,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"$",n)),r.a.createElement(fe,{price:n}))})),be=n(12);function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Oe=r.a.createElement("title",null,"Group"),ye=r.a.createElement("desc",null,"Created with Sketch."),Ce=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),je=function(e){var t=e.svgRef,n=e.title,a=ve(e,["svgRef","title"]);return r.a.createElement("svg",ge({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?Oe:n?r.a.createElement("title",null,n):null,ye,Ce)},Ne=r.a.forwardRef((function(e,t){return r.a.createElement(je,ge({svgRef:t},e))}));n.p,n(78);function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ke(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ie=r.a.createElement("g",null),Se=r.a.createElement("g",null),Te=r.a.createElement("g",null),_e=r.a.createElement("g",null),Ue=r.a.createElement("g",null),xe=r.a.createElement("g",null),Ae=r.a.createElement("g",null),Le=r.a.createElement("g",null),Re=r.a.createElement("g",null),De=r.a.createElement("g",null),He=r.a.createElement("g",null),Pe=r.a.createElement("g",null),Fe=r.a.createElement("g",null),Me=r.a.createElement("g",null),Ge=r.a.createElement("g",null),qe=function(e){var t=e.svgRef,n=e.title,a=ke(e,["svgRef","title"]);return r.a.createElement("svg",we({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ie,Se,Te,_e,Ue,xe,Ae,Le,Re,De,He,Pe,Fe,Me,Ge)},ze=r.a.forwardRef((function(e,t){return r.a.createElement(qe,we({svgRef:t},e))})),Be=(n.p,n(79),Object(h.b)((function(e){return{itemCount:oe(e)}}),(function(e){return{toggleCartHidden:function(){return e(_())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(ze,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))}))),Ve=(n(80),function(e){var t=e.item,n=t.imageUrl,a=t.name,c=t.price,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},i," x $",c)))}),We=(n(81),Object(E.g)(Object(h.b)((function(e){return{cartItems:le(e)}}))((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Ve,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your Cart is Empty")),r.a.createElement(A,{onClick:function(){n.push("/checkout"),a(_())}},"Go To CHECKOUT"))})))),Ke=Object(g.a)([function(e){return e.user}],(function(e){return e.currentUser})),Ye=Object(g.b)({currentUser:Ke,hidden:ue}),$e=Object(h.b)(Ye)((function(e){var t=e.currentUser,n=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(be.b,{className:"logo-container",to:"/"},r.a.createElement(Ne,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(be.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(be.b,{className:"option",to:"/shop"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return z.signOut()}},"SIGN OUT"):r.a.createElement(be.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(Be,null)),n?null:r.a.createElement(We,null))})),Je=n(24),Qe=(n(82),function(e){var t=e.handleChange,n=e.label,a=Object(x.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),Xe=(n(83),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,c=n.password,e.prev=2,e.next=5,z.signInWithEmailAndPassword(r,c);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(Je.a)({},r,n))},a.state={email:"",password:""},a}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Qe,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),r.a.createElement(Qe,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(A,{type:"submit"}," Sign in "),r.a.createElement(A,{onClick:W,isGoogleSignIn:!0},"Sign in with Google"))))}}]),n}(r.a.Component)),Ze=(n(84),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(u.a)(o.a.mark((function t(n){var a,r,c,i,l,s,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,c=a.email,i=a.password,l=a.confirmPassword,i===l){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,z.createUserWithEmailAndPassword(c,i);case 8:return s=t.sent,u=s.user,t.next=12,q(u,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(Je.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(Qe,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(Qe,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(Qe,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(Qe,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(A,{type:"submit"},"SIGN UP")))}}]),n}(r.a.Component)),et=(n(85),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(Xe,null),r.a.createElement(Ze,null))}),tt=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=z.onAuthStateChanged(function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,q(n);case 3:t.sent.onSnapshot((function(t){e(Object(s.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement($e,null),r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(E.a,{to:"/"}):r.a.createElement(et,null)}}),r.a.createElement(E.b,{exact:!0,path:"/",component:j}),r.a.createElement(E.b,{path:"/shop",component:ce}),r.a.createElement(E.b,{exact:!0,path:"/checkout",component:he})))}}]),n}(r.a.Component),nt=Object(g.b)({currentUser:Ke}),at=Object(h.b)(nt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:b,payload:e}}(t))}}}))(tt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var rt=n(13),ct=n(46),it=n.n(ct),lt=n(28),ot=n(47),st=n(48),ut=n.n(st),mt={currentUser:null},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(s.a)(Object(s.a)({},e),{},{currentUser:t.payload});default:return e}},pt=n(50),ft=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(pt.a)(e),[Object(s.a)(Object(s.a)({},t),{},{quantity:1})])},Et=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{quantity:e.quantity-1}):e}))},ht={hidden:!0,cartItems:[]},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.TOGGLE_HIDDEN_STATE:return Object(s.a)(Object(s.a)({},e),{},{hidden:!e.hidden});case T.ADD_ITEM:return Object(s.a)(Object(s.a)({},e),{},{cartItems:ft(e.cartItems,t.payload)});case T.REMOVE_ITEM:return Object(s.a)(Object(s.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case T.DECREASE_ITEM_COUNT:return Object(s.a)(Object(s.a)({},e),{},{cartItems:Et(e.cartItems,t.payload)});default:return{state:e,cartItems:[]}}},gt={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ot={shop:null,isFetching:!1,errorMessage:void 0},yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case F.FETCH_COLLECTIONS_START:return Object(s.a)(Object(s.a)({},e),{},{isFetching:!0});case F.FETCH_COLLECTIONS_SUCCESS:return Object(s.a)(Object(s.a)({},e),{},{isFetching:!1,shop:t.payload});case F.FETCH_COLLECTIONS_FAILURE:return Object(s.a)(Object(s.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},Ct={key:"root",storage:ut.a,whitelist:["cart"]},jt=Object(rt.c)({user:dt,cart:bt,directory:vt,shop:yt}),Nt=Object(lt.a)(Ct,jt),wt=[it.a,ot.a],kt=Object(rt.d)(Nt,rt.a.apply(void 0,wt)),It=Object(lt.b)(kt),St=n(49);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:kt},r.a.createElement(be.a,null,r.a.createElement(St.a,{persistor:It},r.a.createElement(at,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.12f2be52.chunk.js.map