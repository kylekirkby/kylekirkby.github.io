(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{199:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var r=a(0),n=a.n(r),i=a(202),o=a(208),s=a(205),l=a(206),d=a(200);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return n.a.createElement(s.a,{location:this.props.location,title:t},n.a.createElement(l.a,{title:"All posts"}),n.a.createElement(o.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return n.a.createElement("article",{key:t.fields.slug},n.a.createElement("header",null,n.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},n.a.createElement(i.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),n.a.createElement("small",null,t.frontmatter.date)),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))}))},r}(n.a.Component);t.default=c;var u="2785444898"},200:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(212),n=a.n(r),i=a(213),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new n.a(o.a);var l=s.rhythm,d=s.scale},201:function(e,t,a){var r;e.exports=(r=a(203))&&r.default||r},202:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(66),o=a.n(i);a.d(t,"a",function(){return o.a});a(201),a(9).default.enqueue,n.a.createContext({})},203:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),n=a.n(r),i=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},204:function(e,t,a){"use strict";a(209)("fixed",function(e){return function(){return e(this,"tt","","")}})},205:function(e,t,a){"use strict";a(18);var r=a(0),n=a.n(r),i=a(202),o=a(200);var s=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,s=t.children;return e="/"===a.pathname?n.a.createElement("h1",{style:Object.assign({},Object(o.b)(1.5),{marginBottom:Object(o.a)(1.5),marginTop:0})},n.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):n.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},n.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),n.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},n.a.createElement("header",null,e),n.a.createElement("main",null,s),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},r}(n.a.Component);t.a=s},206:function(e,t,a){"use strict";var r=a(207),n=a(0),i=a.n(n),o=a(214),s=a.n(o);function l(e){var t=e.description,a=e.lang,n=e.meta,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},207:function(e){e.exports={data:{site:{siteMetadata:{title:"Thoughts from a balcony or something like that..",description:"A place where I write about things that interest me and hopefully others too.",author:"Kyle Kirkby"}}}}},208:function(e,t,a){"use strict";a(204);var r=a(210),n=a(0),i=a.n(n),o=a(211),s=a.n(o),l=a(200);t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,n=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},i.a.createElement(s.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,a)," who lives and works in San Francisco building useful things."," ",i.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"You should follow him on Twitter")))}},209:function(e,t,a){var r=a(1),n=a(7),i=a(32),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},210:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFBUlEQVQ4y22T+0+TZxTH3z9kyZzxCuIFFaQFhLZSoDda2lpub2/0hi1FoAWLMEG8i8Z5QcULKpgNmaJu08xFFxZdpvvBRGPcpnGb05nJcAwv3D97iTKzzJM8ec7J85xPzvk+5xH++HuY0fFxxsYnmJiYYNKeD4/S/3KE/pFRhni3jUs5UzaVN2nC2GQwFU+6E2+cN0n9fU+5c/sOvVe+4e7t2ww8638naMoX/iVJa2xifIrI0NAwRw8epj4cxi+WEhCdrC0vZ1tDI4d27+fBjz/9p9JJ4OQSXo2OMTA0xqPBEX4bHOLJixFeSBdO9VwgL1tLSZ6JIoMZY44Oo9ZEsbUEn+hjkwR+8vjx/6DC/f4h7vcPc7dvmCcj8Kd09qB/EIfDR75SSZkln4qVVtx5RoxqDfnaPPwlbgJuP1ubmnnW1/ca9gYq/DwAj56P83DgJT2Xe3n64jnfXb+BSZVFdUE++8oddNYG2B/20Oi2Y9eb0Gfr8dtdRP2rONd+iNHhV28rvPnDPR799YprN2/R3LKDX35/QntbGx59Ni2BAk7VeThd5+fjqI+jkSDNXgd+i5lKUWRdcBVd2+rpe3DrdetjYwgOn4XtrZsJ1Uax2p1UfdhAY0WATR4LreWFnI556K71cmJ1KYfDfg5UBWiLlHGmuZqzmyLcONbEy6f33o5Nknwx1mI1Flc2GZnJVJhz2R60czLq4rwEuyhVd6bGS2eFk/YKH8erg5yIhenaUENXcyW9HTsZGBxg8MUrfn30EGHajBko1DIK/RqcFjUny4s5XuWSIG6OhEpoD4l0Rz10hh0cKnNzrNxHT2OES/s2cWprjMun93Dg2B72tO1iZ+tGhBKng7KgB51JhS8nnUNuMz1RJx3hQgI6BamLFqCRJVNr1rFTLGCXvYhdko4ddau51r6F2qpSrGa9tAeoj4UQMlRqkmVpzItPoNag4EpDKRdqHJwss1BvVqNaksjcD2YQyFWwuTgfUZGJMSOdlqCDK21NZCiUGHR6bBarBF6JsEwup6DIhkMsJk+2mE+jIl/Xu/k8XMQRp4k1OiUhTQanV5dQqc1i2vvTeX/aDKJ2My2SFHMSFpGr1WF3OPEHfAhNTfVEIpVotRpmzpzFVo+R6+u9fFldzLlQEZ0+K2crbfTGXGwWLSydE0fUZuDb1gby1ErmxM9HnpZOdo4Wi9WGIEtNZcGiRchT5aiXp7A3YOLaejdf1ZTQXWZjo3EF3SEz1xp8XG1ZI0FNnG8I0tUYZvbcOBLmLyQpaRkKpYpcjQ4hOSWZZLkMsUDH8WY/e116qWWRngor66WH2lWUy0GXgY/sBrYU51FvyqFLGnLRkMN702cSn7CAhYlLkMnTUK3IRjDlqwn4C1njNxA0ZdDqy+NSrJAjXh01Wjk7rNlUr0ijNDONovQUvKpU1hbqUciXEbdwPtNnz2JuwnwSlyZLc6xA2FAfYF1EEtSaRsyaSXe1mRNBHSdXGegM6mmxZeFKScK8dDE5ifOk0VqOqJShSUlEXGlErc1mdkI8cQnzWJqchBAptRK0Kalxqtjr1XKhzspOeyZHAxq+qFlJm1NLo1lFhS4TW/oSqoxKvFmZrM7PIioaubhvN5FVAVLSZMyOn4ewJG4OtQ41MVcGDZblXN1QQkdIw7aCDPZJ33FDvoLQChmlWXKqJU2bizWU6VXUeW3UeQy0xsr4/rNT9J77BItU8T/pQQnzy98yGQAAAABJRU5ErkJggg==",width:50,height:50,src:"/static/89bf5c19fbc48eb995b455293151489e/352e5/profile-pic.png",srcSet:"/static/89bf5c19fbc48eb995b455293151489e/352e5/profile-pic.png 1x,\n/static/89bf5c19fbc48eb995b455293151489e/aae31/profile-pic.png 1.5x,\n/static/89bf5c19fbc48eb995b455293151489e/47c2b/profile-pic.png 2x"}}},site:{siteMetadata:{author:"Kyle Kirkby",social:{twitter:"the_actual_kyle"}}}}}},211:function(e,t,a){"use strict";a(29),a(30),a(13),a(92),a(133),a(204);var r=a(14);t.__esModule=!0,t.default=void 0;var n,i=r(a(68)),o=r(a(71)),s=r(a(136)),l=r(a(137)),d=r(a(0)),c=r(a(52)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,b=m&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)}).join("")+"<img "+d+o+s+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(I,(0,l.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},I=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},p,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!h&&b&&!t.critical&&!a.seenBefore;var r=t.critical||"eager"==t.loading||m&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,L=e.loading,O=e.draggable,A=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:A?1:0,transition:j?"opacity "+b+"ms":"none"},s),F="boolean"==typeof m?"lightgray":m,V={transitionDelay:b+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&V,s,f),z={title:t,alt:this.state.isVisible?"":a,style:k,className:p};if(g){var U=g,T=U[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),F&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:F,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&V)}),T.base64&&d.default.createElement(x,{src:T.base64,spreadProps:z,imageVariants:U,generateSources:w}),T.tracedSVG&&d.default.createElement(x,{src:T.tracedSVG,spreadProps:z,imageVariants:U,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(U),d.default.createElement(I,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:L},T,{imageVariants:U}))}}))}if(h){var G=h,M=G[0],W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete W.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},F&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:F,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},j&&V)}),M.base64&&d.default.createElement(x,{src:M.base64,spreadProps:z,imageVariants:G,generateSources:w}),M.tracedSVG&&d.default.createElement(x,{src:M.tracedSVG,spreadProps:z,imageVariants:G,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(G),d.default.createElement(I,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:L},M,{imageVariants:G}))}}))}return null},t}(d.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),N=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});A.propTypes={resolutions:j,sizes:N,fixed:c.default.oneOfType([j,c.default.arrayOf(j)]),fluid:c.default.oneOfType([N,c.default.arrayOf(N)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var F=A;t.default=F}}]);
//# sourceMappingURL=component---src-pages-index-js-c17f53d02a3b131e1fe0.js.map