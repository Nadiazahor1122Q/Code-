(this["webpackJsonpaperture-landing-page"]=this["webpackJsonpaperture-landing-page"]||[]).push([[1,10],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n(15),i=n(0),a=n.n(i),c=n(30),o=n(35),s=n(642),u=n(641),l=n(315),d=n(1);function b(){var e=Object(c.b)(),t=e.language,n=e.width,i=o.a[t].about,b=a.a.useState(!1),f=Object(r.a)(b,2),h=f[0],j=f[1],v=Object(s.a)({threshold:n>900?.5:0}),m=Object(r.a)(v,2),O=m[0],g=m[1];return a.a.useEffect((function(){n<900?setTimeout((function(){j(!!g)}),500):j(!!g)}),[g,n]),Object(d.jsx)("div",{id:"about",children:Object(d.jsxs)("div",{ref:O,className:"padding textContainer",children:[Object(d.jsx)("p",{className:"textHeader",children:i.title}),Object(d.jsx)(u.a,{transitionDuration:1e3,delay:100,visible:h,className:"teamContainer",children:i.list.map((function(e,t){return Object(d.jsx)(l.default,{l:e},t)}))})]})})}},315:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));n(0);var r=n(17),i=n(1);function a(e){var t=e.l,n=t.name,a=t.text,c=t.image,o=t.link;return Object(i.jsxs)("div",{className:"teamClass",children:[Object(i.jsx)("img",{src:c,alt:n}),Object(i.jsxs)("a",{href:o,rel:"noreferrer",target:"_blank",children:[Object(i.jsx)("p",{children:n}),Object(i.jsx)("img",{src:r.w,alt:"linkedin"})]}),Object(i.jsx)("p",{style:{margin:0},children:a})]})}},641:function(e,t,n){"use strict";var r=n(0),i=n.n(r);t.a=function(e){var t,n=Object(r.useState)(0),a=n[0],c=n[1],o=e.delay||50,s=null==(t=e.animated)||t,u=e.transitionDuration||400,l="undefined"===typeof e.visible||e.visible,d=e.wrapperTag||"div",b=e.childTag||"div";return Object(r.useEffect)((function(){var t=i.a.Children.count(e.children);if(l||(t=0),t==a){var n=setTimeout((function(){e.onComplete&&e.onComplete()}),u);return function(){return clearTimeout(n)}}var r=t>a?1:-1,s=setTimeout((function(){c(a+r)}),o);return function(){return clearTimeout(s)}}),[i.a.Children.count(e.children),o,a,l,u]),i.a.createElement(d,{className:e.className},s?i.a.Children.map(e.children,(function(t,n){return i.a.createElement(b,{className:e.childClassName,style:{transition:"opacity "+u+"ms, transform "+u+"ms",transform:a>n?"none":"translateY(20px)",opacity:a>n?1:0}},t)})):e.children)}},642:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(20),i=n(15),a=n(0),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.root,i=t.rootMargin,c=t.threshold,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=Object(a.useRef)(null),u=Object(a.useRef)(null),l=Object(a.useCallback)((function(t){s.current&&u.current&&(u.current.unobserve(s.current),u.current.disconnect(),u.current=null),t&&(u.current=new IntersectionObserver(e,{root:n,rootMargin:i,threshold:c}),u.current.observe(t),s.current=t)}),[s,n,i,c].concat(Object(r.a)(o)));return l},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.root,n=e.rootMargin,o=e.threshold,s=e.unobserveOnEnter,u=e.target,l=e.onEnter,d=e.onLeave,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],f=Object(a.useState)({inView:!1,entry:null,observer:null}),h=Object(i.a)(f,2),j=h[0],v=h[1],m=Object(a.useCallback)((function(e,t){var n=Object(i.a)(e,1)[0],r=t.thresholds.some((function(e){return n.intersectionRatio>=e}))&&n.isIntersecting;v({inView:r,entry:n,observer:t}),r&&s&&(t.unobserve(n.target),t.disconnect()),r?null===l||void 0===l||l(n,t):null===d||void 0===d||d(n,t)}),[l,d,s]),O=c(m,{root:t,rootMargin:n,threshold:o},[s].concat(Object(r.a)(b)));return Object(a.useEffect)((function(){(null===u||void 0===u?void 0:u.current)&&O(u.current)}),[u,O]),[O,j.inView,j.entry,j.observer]}}}]);