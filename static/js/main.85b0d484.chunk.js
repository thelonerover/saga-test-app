(this["webpackJsonpsaga-test-app"]=this["webpackJsonpsaga-test-app"]||[]).push([[0],{11:function(t,e,n){t.exports={list:"Tickers_list__1STeo",listItem:"Tickers_listItem__QGtHY",ticker:"Tickers_ticker__1F-Bm",tickerReverse:"Tickers_tickerReverse__IOfGm"}},13:function(t,e,n){t.exports={listItem:"Link_listItem__1aU6g",appear:"Link_appear__qtvAK",link:"Link_link__3X_6G",button:"Link_button__ybcy-"}},24:function(t,e,n){t.exports={ticker:"Ticker_ticker__1nCgk"}},25:function(t,e,n){t.exports={links:"Links_links__3EEF2"}},26:function(t,e,n){t.exports={loader:"Loader_loader__2bMtS"}},35:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n(1),r=n.n(a),s=n(15),i=n.n(s),o=(n(35),n(7)),l=n(10),u=n(22),d=n(12),j=0,b=Object(d.b)({name:"ticker",initialState:{posts:[],loading:!1},reducers:{getRandomPosts:function(t){t.loading=!0},getRandomPostsSuccess:function(t,e){t.posts.find((function(t){return t.id===e.payload.id}))?t.posts=[].concat(Object(u.a)(t.posts),[Object(l.a)(Object(l.a)({},e.payload),{},{id:e.payload.id+j++,like:!1})]):t.posts=[].concat(Object(u.a)(t.posts),[Object(l.a)(Object(l.a)({},e.payload),{},{like:!1})]),t.loading=!1},getRandomPostsFailure:function(t){t.loading=!1},deletePostItem:function(t,e){t.posts=t.posts.filter((function(t){return t.id!==e.payload}))},likePost:function(t,e){t.posts=t.posts.map((function(t){return t.id===e.payload&&(t.like=!t.like),t}))}}}),p=b.actions,k=p.getRandomPosts,f=p.deletePostItem,O=p.likePost,m=b.reducer,x=n(24),_=n.n(x),h=function(t){var e=t.value,n=t.subreddit,a=Object(o.b)(),r=e.padStart(200,"".concat(e,"-"));return Object(c.jsx)("span",{className:_.a.ticker,onClick:function(t){return function(){a(k(t))}}(n.toLowerCase()),children:r})},v=n(11),g=n.n(v);var y=function(){return Object(c.jsxs)("ul",{className:g.a.list,children:[Object(c.jsx)("li",{className:g.a.listItem,children:Object(c.jsx)(h,{value:"frontend",subreddit:"frontend"})}),Object(c.jsx)("li",{className:g.a.listItem,children:Object(c.jsx)(h,{value:"react.js",subreddit:"reactjs"})}),Object(c.jsx)("li",{className:g.a.listItem,children:Object(c.jsx)(h,{value:"vue.js",subreddit:"vuejs"})}),Object(c.jsx)("li",{className:g.a.listItem,children:Object(c.jsx)(h,{value:"angular",subreddit:"angular"})})]})},I=n(13),N=n.n(I),w=function(t){var e=t.id,n=t.url,a=t.title,r=Object(o.c)((function(t){return t.ticker.posts})).find((function(t){return t.id===e})),s=Object(o.b)();return Object(c.jsxs)("li",{className:N.a.listItem,children:[Object(c.jsx)("span",{className:N.a.button,onClick:function(t){return function(){s(O(t))}}(e),children:r.like?"\u2665":"\u2661"}),Object(c.jsx)("span",{className:N.a.button,onClick:function(t){return function(){s(f(t))}}(e),children:"\u2a09"}),Object(c.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",className:N.a.link,children:a})]})},P=n(25),R=n.n(P),L=function(){var t=Object(o.c)((function(t){return t.ticker.posts}));return Object(c.jsx)("ul",{className:R.a.links,children:t&&t.map((function(t){return Object(c.jsx)(w,Object(l.a)({},t),t.id)}))})},S=n(26),C=n.n(S);var T=function(){var t=Object(o.c)((function(t){return t.ticker.loading}));return Object(c.jsx)("div",{children:t&&Object(c.jsx)("span",{className:C.a.loader,children:"Loading"})})};var F=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(y,{}),Object(c.jsx)(L,{}),Object(c.jsx)(T,{})]})},E=n(5),G=Object(E.c)({ticker:m}),q=n(29),A=n(14),B=n.n(A),J=n(17),M="https://www.reddit.com",z=B.a.mark(K),H=B.a.mark(Q);function K(t){var e,n;return B.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,fetch("".concat(M,"/r/").concat(t.payload,"/random.json?query=javascript"));case 3:return e=c.sent,c.next=6,e.json();case 6:return e=c.sent,n={url:M+e[0].data.children[0].data.permalink,id:e[0].data.children[0].data.id,title:e[0].data.children[0].data.title},c.next=10,Object(J.a)({type:"ticker/getRandomPostsSuccess",payload:n});case 10:c.next=16;break;case 12:return c.prev=12,c.t0=c.catch(0),c.next=16,Object(J.a)({type:"ticker/getRandomPostsFailure",error:c.t0});case 16:case"end":return c.stop()}}),z,null,[[0,12]])}function Q(){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(J.b)("ticker/getRandomPosts",K);case 2:case"end":return t.stop()}}),H)}var U=n(8),X=n(27),Y={key:"root",version:1,storage:n.n(X).a},D=Object(U.g)(Y,G),V=Object(q.a)(),W=Object(d.a)({reducer:D,middleware:function(t){return t({serializableCheck:{ignoredActions:[U.a,U.f,U.b,U.c,U.d,U.e]}}).concat(V)}});V.run(Q);var Z=W,$=n(28),tt=Object(U.h)(Z);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(o.a,{store:Z,children:Object(c.jsx)($.a,{loading:null,persistor:tt,children:Object(c.jsx)(F,{})})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.85b0d484.chunk.js.map