(this["webpackJsonpsls-course-frontend"]=this["webpackJsonpsls-course-frontend"]||[]).push([[0],{100:function(e,t,n){e.exports=n(136)},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),o=n(11),c=n.n(o),l=n(8),u=n.n(l),s=n(14),d=n(16),p=n(2),m=n(85),b=function(){return window.history.replaceState({},document.title,window.location.pathname)},f=r.a.createContext(),h=function(){return Object(a.useContext)(f)},g=function(e){var t=e.authStore,n=e.children,i=e.onRedirectCallback,o=void 0===i?b:i,c=Object(p.a)(e,["authStore","children","onRedirectCallback"]),l=Object(a.useState)(),h=Object(d.a)(l,2),g=h[0],O=h[1],y=Object(a.useState)(),v=Object(d.a)(y,2),j=v[0],E=v[1],w=Object(a.useState)(),k=Object(d.a)(w,2),x=k[0],C=k[1],S=Object(a.useState)(!0),A=Object(d.a)(S,2),B=A[0],N=A[1],I=Object(a.useState)(!1),T=Object(d.a)(I,2),R=T[0],U=T[1];Object(a.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var n,a,r,i,l,s,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)(c);case 2:if(n=e.sent,C(n),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,n.handleRedirectCallback();case 7:a=e.sent,r=a.appState,o(r);case 10:return e.next=12,n.isAuthenticated();case 12:if(i=e.sent,O(i),!i){e.next=25;break}return e.next=17,n.getUser();case 17:return l=e.sent,e.next=20,n.getIdTokenClaims();case 20:s=e.sent,d=s.__raw,t.setClaims(l),t.setToken(d),E(l);case 25:N(!1);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var W=function(){var e=Object(s.a)(u.a.mark((function e(){var t,n,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},U(!0),e.prev=2,e.next=5,x.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,U(!1),e.finish(10);case 13:return e.next=15,x.getUser();case 15:n=e.sent,E(n),O(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,x.handleRedirectCallback();case 3:return e.next=5,x.getUser();case 5:t=e.sent,N(!1),O(!0),E(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(f.Provider,{value:{isAuthenticated:g,user:j,loading:B,popupOpen:R,loginWithPopup:W,handleRedirectCallback:z,getIdTokenClaims:function(){return x.getIdTokenClaims.apply(x,arguments)},loginWithRedirect:function(){return x.loginWithRedirect.apply(x,arguments)},getTokenSilently:function(){return x.getTokenSilently.apply(x,arguments)},getTokenWithPopup:function(){return x.getTokenWithPopup.apply(x,arguments)},logout:function(){return x.logout.apply(x,arguments)}}},n)},O=n(171),y=n(174),v=Object(O.a)({navbar:{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(4,19,62,1) 2%, rgba(6,31,80,1) 4%, rgba(7,44,98,1) 8%, rgba(9,61,121,1) 29%, rgba(7,89,145,1) 53%, rgba(5,129,181,1) 86%, rgba(0,212,255,1) 100%)",padding:14,marginBottom:24,display:"flex",width:"100%",boxSizing:"border-box"},header:{flexBasis:"50%",display:"flex"},loginLogoutContainer:{display:"flex",justifyContent:"flex-end",alignItems:"center",flexBasis:"50%"},button:{color:"white"}}),j=Object(i.b)(["authStore"])((function(e){var t=e.authStore,n=h(),a=n.loginWithRedirect,i=n.logout,o=t.token,c=v();return r.a.createElement("div",{className:c.navbar},r.a.createElement("div",{className:c.header},r.a.createElement("h1",{style:{fontSize:14,color:"white"}},"YD AUCTIONS")),r.a.createElement("div",{className:c.loginLogoutContainer},!o&&r.a.createElement(y.a,{className:c.button,onClick:function(){return a({})}},"Sign in"),o&&r.a.createElement(y.a,{className:c.button,onClick:function(){return i({})}},"Sign out")))})),E=n(190),w=n(31),k=Object(w.a)(),x=function(e){var t=e.component,n=e.path,i=Object(p.a)(e,["component","path"]),o=h(),c=o.loading,l=o.isAuthenticated,d=o.loginWithRedirect;Object(a.useEffect)((function(){c||l||function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({appState:{targetUrl:window.location.pathname}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,l,d,n]);return r.a.createElement(E.a,Object.assign({path:n,render:function(e){return!0===l?r.a.createElement(t,e):null}},i))},C=n(63),S=n(176),A=n(177),B=n(181),N=n(180),I=n(179),T=n(88),R=n(178),U=n(191),W=n(64);function z(){var e=Object(C.a)(["\n  font-size: 14px;\n"]);return z=function(){return e},e}function P(){var e=Object(C.a)(["\n  font-size: 12px;\n  font-weight: bold;\n  color: #919191;\n"]);return P=function(){return e},e}var D=Object(O.a)({root:{width:"100%"},media:{height:280},bidButton:{width:"70%",background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(4,19,62,1) 0%, rgba(6,31,80,1) 0%, rgba(7,44,98,1) 6%, rgba(9,61,121,1) 29%, rgba(7,89,145,1) 67%, rgba(5,129,181,1) 100%, rgba(9,123,146,1) 100%)",borderWidth:0,color:"white"},cardActions:{width:"100%",display:"flex",justifyContent:"center",padding:12},detailsContainer:{display:"flex",padding:0},details:{display:"flex",flexBasis:"50%",justifyContent:"center",alignItems:"center",paddingTop:18,paddingBottom:10,textAlign:"center"}}),L=W.a.p(P()),H=W.a.span(z()),_=function(e){var t=e.auction,n=e.onBid,a=e.bidState,i=D(),o=t.highestBid.amount,c=t.pictureUrl?t.pictureUrl:"placeholder.png";return r.a.createElement(S.a,{className:i.root},r.a.createElement(A.a,null,r.a.createElement(R.a,{avatar:r.a.createElement(U.a,{"aria-label":"recipe",className:i.avatar},t.seller[0].toUpperCase()),title:t.title}),r.a.createElement(I.a,{className:i.media,image:c,title:"Contemplative Reptile"}),r.a.createElement(N.a,{className:i.detailsContainer},r.a.createElement("div",{className:i.details},r.a.createElement("div",null,r.a.createElement(H,null,0===o?"No bids":"$".concat(o)),r.a.createElement(L,null,"HIGHEST BID"))),r.a.createElement("div",{className:i.details},r.a.createElement("div",null,r.a.createElement(T.a,{date:t.endingAt,renderer:function(e){var t=e.hours,n=e.minutes,a=e.seconds;return r.a.createElement(H,null,t," hours ",n," mins ",a," secs")}}),r.a.createElement(L,null,"TIME REMAINING"))))),r.a.createElement(B.a,null,r.a.createElement("div",{className:i.cardActions},("OWN_AUCTION"===a||"HIGHEST_BIDDER"===a)&&r.a.createElement(y.a,{disabled:!0,onClick:function(){return n()}},"OWN_AUCTION"===a?"This is your auction":"You are the highest bidder"),"CAN_BID"===a&&r.a.createElement(y.a,{variant:"outlined",className:i.bidButton,onClick:function(){return n()}},"Bid now!"))))},G=n(189),q=n(182),F=n(192),V=n(193),$=n(183),J=n(184),M=Object(O.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",outline:0},paper:{backgroundColor:e.palette.background.paper,padding:e.spacing(2,4,3),outline:0,borderRadius:10}}})),Y=Object(i.b)(["auctionStore"])(Object(i.c)((function(e){var t=e.auctionStore,n=(e.onCancel,M()),a=t.biddingOn;return a?r.a.createElement(G.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:n.modal,open:!!a,onClose:function(){return t.setBiddingOn(null)},closeAfterTransition:!0},r.a.createElement(q.a,{in:!!a},r.a.createElement("div",{className:n.paper},r.a.createElement("h2",null,'Bid on "',a.title,'"'),r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(F.a,{fullWidth:!0,className:n.margin},r.a.createElement(V.a,{htmlFor:"standard-adornment-amount"},"Bid Amount"),r.a.createElement($.a,{id:"standard-adornment-amount",value:t.bidAmount,onChange:function(e){return t.setBidAmount(e.target.value)},type:"number",startAdornment:r.a.createElement(J.a,{position:"start"},"$")})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(y.a,{style:{float:"right"},onClick:function(){return t.placeBid()}},"Place Bid")))))):null}))),Q=n(185),K=n(92),X=n.n(K),Z=Object(O.a)({auctionsContainer:{display:"flex",flexWrap:"wrap",maxWidth:1e3,margin:"auto","@media (max-width: 900px)":{alignItems:"center",justifyContent:"center"}},auctionCard:{flexBasis:472,flexShrink:0,padding:14},fabContainer:{position:"fixed",bottom:20,right:20},createAuctionButton:{background:"#075991"}}),ee=Object(i.b)("auctionStore","authStore","routerHistory")(Object(i.c)((function(e){var t=e.auctionStore,n=e.authStore,i=e.routerHistory,o=Z();Object(a.useEffect)((function(){Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("HOLA"),e.next=3,t.fetchAuctions();case 3:setInterval((function(){"/auctions"!==i.location.pathname&&"/"!==i.location.pathname||t.fetchAuctions()}),"5000");case 4:case"end":return e.stop()}}),e)})))()}),[t,i]);return r.a.createElement("div",{className:o.auctionsContainer},r.a.createElement(Y,null),function(){var e=t.auctions;return e.length?e.map((function(e){var a="CAN_BID";return e.seller===n.email&&(a="OWN_AUCTION"),e.highestBid.bidder===n.email&&(a="HIGHEST_BIDDER"),r.a.createElement("div",{key:e.id,className:o.auctionCard},r.a.createElement(_,{auction:e,bidState:a,onBid:function(){return t.setBiddingOn(e)}}))})):r.a.createElement("div",{style:{textAlign:"center",width:"100%"}},r.a.createElement("h4",null,"No auctions available. Create one?"))}(),r.a.createElement("div",{className:o.fabContainer},r.a.createElement(Q.a,{color:"primary","aria-label":"add",className:o.createAuctionButton,onClick:function(){return i.push("/create")}},r.a.createElement(X.a,null))))}))),te=n(186),ne=n(188),ae=n(66),re=n(93),ie=n.n(re),oe=Object(O.a)({container:{width:300,height:100,border:"2px dashed #a1a1a1",borderRadius:5,display:"flex",justifyContent:"center",alignItems:"center",cursor:"copy"},preview:{width:300,borderRadius:5}}),ce=function(e){var t,n=e.onPictureSelected,i=Object(a.useState)(null),o=Object(d.a)(i,2),c=o[0],l=o[1],p=oe(),m=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.files[0],(r=new FileReader).readAsDataURL(a),r.onload=function(){l(r.result),n(r.result)};case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(a.Fragment,null,r.a.createElement("input",{style:{display:"none"},ref:function(e){return t=e},type:"file",onChange:m}),!c&&r.a.createElement(ae.a,{onClick:function(){return t.click()}},r.a.createElement("div",{className:p.container},r.a.createElement(ie.a,{color:"disabled"}))),c&&r.a.createElement("img",{className:p.preview,src:c,alt:"Auction"}))},le=Object(O.a)((function(e){return{form:{maxWidth:400},pictureUpload:{marginTop:20,marginBottom:20}}})),ue=Object(i.b)("auctionStore","authStore","routerHistory")(Object(i.c)((function(e){var t=e.auctionStore,n=e.routerHistory,i=Object(a.useState)(""),o=Object(d.a)(i,2),c=o[0],l=o[1],p=Object(a.useState)(null),m=Object(d.a)(p,2),b=m[0],f=m[1],h=le(),g=function(){var e=Object(s.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.createAuction(a,b);case 2:n.push("/auctions");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(te.a,{width:200,fixed:!0},r.a.createElement("h1",null,"Create an Auction"),r.a.createElement("form",{className:h.form,noValidate:!0,autoComplete:"off"},r.a.createElement(F.a,{fullWidth:!0},r.a.createElement(ne.a,{label:"Auction Title",id:"standard-adornment-amount",value:c,onChange:function(e){return l(e.target.value)},placeholder:"Example: Lemonade from the '60s",type:"string",variant:"outlined"})),r.a.createElement("div",{className:h.pictureUpload},r.a.createElement(ce,{onPictureSelected:function(e){return f(e)}})),r.a.createElement("div",null,r.a.createElement(y.a,{onClick:function(){return g(c)},disabled:!c.length||!b},"Create auction"))))}))),se=n(187),de=Object(O.a)((function(e){e.props;return{spinnerContainer:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(0, 0, 0, 0.2)",position:"fixed",zIndex:999}}})),pe=function(e){var t=e.display,n=de(),a=t?"flex":"none";return console.log("dValue",a,"/ display",t),r.a.createElement("div",{className:n.spinnerContainer,style:{display:a}},r.a.createElement(se.a,{color:"secondary"}))},me=Object(i.b)("overlayStore")(Object(i.c)((function(e){var t=e.overlayStore;return console.log("Loaded"),r.a.createElement("div",{className:"App"},r.a.createElement(pe,{display:t.displaySpinner}),r.a.createElement(E.b,{history:k},r.a.createElement("header",null,r.a.createElement(j,null)),r.a.createElement(E.c,null,r.a.createElement(x,{path:"/",exact:!0,component:ee}),r.a.createElement(x,{path:"/auctions",component:ee}),r.a.createElement(x,{path:"/create",component:ue}))))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be,fe,he,ge,Oe,ye,ve,je,Ee,we,ke=n(29),xe=n(34),Ce=n(22),Se=n(12),Ae=(n(60),n(6)),Be=n(94),Ne=n.n(Be),Ie=new(be=function(){function e(){Object(xe.a)(this,e),Object(ke.a)(this,"token",fe,this),Object(ke.a)(this,"claims",he,this),Object(ke.a)(this,"email",ge,this)}return Object(Ce.a)(e,[{key:"setToken",value:function(e){this.token=e,console.log("Token set",e)}},{key:"setClaims",value:function(e){this.claims=e,this.email=e.email}}]),e}(),fe=Object(Se.a)(be.prototype,"token",[Ae.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),he=Object(Se.a)(be.prototype,"claims",[Ae.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ge=Object(Se.a)(be.prototype,"email",[Ae.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(Se.a)(be.prototype,"setToken",[Ae.f],Object.getOwnPropertyDescriptor(be.prototype,"setToken"),be.prototype),Object(Se.a)(be.prototype,"setClaims",[Ae.f],Object.getOwnPropertyDescriptor(be.prototype,"setClaims"),be.prototype),be),Te=new(Oe=function(){function e(){Object(xe.a)(this,e),Object(ke.a)(this,"displaySpinner",ye,this)}return Object(Ce.a)(e,[{key:"setLoadingSpinner",value:function(e){this.displaySpinner=e}}]),e}(),ye=Object(Se.a)(Oe.prototype,"displaySpinner",[Ae.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(Se.a)(Oe.prototype,"setLoadingSpinner",[Ae.f],Object.getOwnPropertyDescriptor(Oe.prototype,"setLoadingSpinner"),Oe.prototype),Oe),Re=Ne.a.create({baseURL:"https://jobcq1jkh8.execute-api.eu-west-1.amazonaws.com/dev"}),Ue=new(ve=function(){function e(){Object(xe.a)(this,e),Object(ke.a)(this,"auctions",je,this),Object(ke.a)(this,"biddingOn",Ee,this),Object(ke.a)(this,"bidAmount",we,this)}return Object(Ce.a)(e,[{key:"fetchAuctions",value:function(){var e=Object(s.a)(u.a.mark((function e(){var t,n=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Re.get("/auctions?status=OPEN",{headers:{Authorization:Ie.token}});case 3:t=e.sent,this.auctions=t.data,e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Could not fetch auctions! Check console for more details."),console.error(e.t0);case 11:this.biddingOn&&this.auctions.forEach((function(e){e.id===n.biddingOn.id&&(n.bidAmount=e.highestBid.amount+1)}));case 12:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"setBiddingOn",value:function(e){this.biddingOn=e,this.bidAmount=e?e.highestBid.amount+1:0}},{key:"setBidAmount",value:function(e){this.bidAmount=e}},{key:"placeBid",value:function(){var e=Object(s.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.biddingOn.id,n=this.bidAmount,Te.setLoadingSpinner(!0),e.prev=3,e.next=6,Re.patch("/auctions/".concat(t,"/bid"),{amount:n},{headers:{Authorization:Ie.token}});case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),alert("Could not place bid! Check console for more details."),console.error(e.t0);case 12:this.fetchAuctions(),this.biddingOn=null,this.bidAmount=0,Te.setLoadingSpinner(!1);case 16:case"end":return e.stop()}}),e,this,[[3,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"createAuction",value:function(){var e=Object(s.a)(u.a.mark((function e(t,n){var a,r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Te.setLoadingSpinner(!0),e.prev=1,e.next=4,Re.post("/auctions",{title:t},{headers:{Authorization:Ie.token}});case 4:return r=e.sent,console.log("Created auction:",r),i=r.data,a=i.id,e.next=10,Re.patch("/auctions/".concat(a,"/picture"),n,{headers:{Authorization:Ie.token}});case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),alert("Could not create auction! Check console for more details."),console.error(e.t0);case 16:Te.setLoadingSpinner(!1);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),je=Object(Se.a)(ve.prototype,"auctions",[Ae.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Ee=Object(Se.a)(ve.prototype,"biddingOn",[Ae.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),we=Object(Se.a)(ve.prototype,"bidAmount",[Ae.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Object(Se.a)(ve.prototype,"fetchAuctions",[Ae.f],Object.getOwnPropertyDescriptor(ve.prototype,"fetchAuctions"),ve.prototype),Object(Se.a)(ve.prototype,"setBiddingOn",[Ae.f],Object.getOwnPropertyDescriptor(ve.prototype,"setBiddingOn"),ve.prototype),Object(Se.a)(ve.prototype,"setBidAmount",[Ae.f],Object.getOwnPropertyDescriptor(ve.prototype,"setBidAmount"),ve.prototype),Object(Se.a)(ve.prototype,"placeBid",[Ae.f],Object.getOwnPropertyDescriptor(ve.prototype,"placeBid"),ve.prototype),ve);n(134),n(135);c.a.render(r.a.createElement(i.a,{auctionStore:Ue,authStore:Ie,routerHistory:k,overlayStore:Te},r.a.createElement(g,{authStore:Ie,domain:"yordiogando.us.auth0.com",client_id:"H804TUjrxsEB3qqkQ6z6U62PPxRj8D9c",redirect_uri:"https://yordi23.github.io/sls-course-frontend/",onRedirectCallback:function(e){k.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.735115d9.chunk.js.map