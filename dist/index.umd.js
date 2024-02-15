!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(((e="undefined"!=typeof globalThis?globalThis:e||self).google=e.google||{},e.google.maps=e.google.maps||{},e.google.maps.plugins=e.google.maps.plugins||{},e.google.maps.plugins.loader={}))}(this,(function(e){"use strict";function t(e,t,i,r){return new(i||(i=Promise))((function(o,s){function n(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,a)}l((r=r.apply(e,t||[])).next())}))}function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}"function"==typeof SuppressedError&&SuppressedError;var r=i((function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var r,o,s;if(Array.isArray(t)){if((r=t.length)!=i.length)return!1;for(o=r;0!=o--;)if(!e(t[o],i[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(i,s[o]))return!1;for(o=r;0!=o--;){var n=s[o];if(!e(t[n],i[n]))return!1}return!0}return t!=t&&i!=i}));const o="__googleMapsScriptId";var s;e.LoaderStatus=void 0,(s=e.LoaderStatus||(e.LoaderStatus={}))[s.INITIALIZED=0]="INITIALIZED",s[s.LOADING=1]="LOADING",s[s.SUCCESS=2]="SUCCESS",s[s.FAILURE=3]="FAILURE";class n{constructor(e){let{apiKey:t,authReferrerPolicy:i,channel:s,client:a,id:l=o,language:h,libraries:c=[],mapIds:d,nonce:u,region:g,retries:p=3,url:f="https://maps.googleapis.com/maps/api/js",version:y}=e;if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=t,this.authReferrerPolicy=i,this.channel=s,this.client=a,this.id=l||o,this.language=h,this.libraries=c,this.mapIds=d,this.nonce=u,this.region=g,this.retries=p,this.url=f,this.version=y,n.instance){if(!r(this.options,n.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(n.instance.options)}`);return n.instance}n.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?e.LoaderStatus.FAILURE:this.done?e.LoaderStatus.SUCCESS:this.loading?e.LoaderStatus.LOADING:e.LoaderStatus.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise(((e,t)=>{this.loadCallback((i=>{i?t(i.error):e(window.google)}))}))}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,i;if(document.getElementById(this.id))return void this.callback();const r={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(r).forEach((e=>!r[e]&&delete r[e])),(null===(i=null===(e=null===window||void 0===window?void 0:window.google)||void 0===e?void 0:e.maps)||void 0===i?void 0:i.importLibrary)||(e=>{let i,r,o,s="The Google Maps JavaScript API",n="google",a="importLibrary",l="__ib__",h=document,c=window;c=c[n]||(c[n]={});const d=c.maps||(c.maps={}),u=new Set,g=new URLSearchParams,p=()=>i||(i=new Promise(((a,c)=>t(this,void 0,void 0,(function*(){var t;for(o in yield r=h.createElement("script"),r.id=this.id,g.set("libraries",[...u]+""),e)g.set(o.replace(/[A-Z]/g,(e=>"_"+e[0].toLowerCase())),e[o]);g.set("callback",n+".maps."+l),r.src=this.url+"?"+g,d[l]=a,r.onerror=()=>i=c(Error(s+" could not load.")),r.nonce=this.nonce||(null===(t=h.querySelector("script[nonce]"))||void 0===t?void 0:t.nonce)||"",h.head.append(r)})))));d[a]?console.warn(s+" only loads once. Ignoring:",e):d[a]=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return u.add(e)&&p().then((()=>d[a](e,...i)))}})(r);const o=this.libraries.map((e=>this.importLibrary(e)));o.length||o.push(this.importLibrary("core")),Promise.all(o).then((()=>this.callback()),(e=>{const t=new ErrorEvent("error",{error:e});this.loadErrorCallback(t)}))}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),e)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((e=>{e(this.onerrorEvent)})),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setScript())}}}e.DEFAULT_ID=o,e.Loader=n}));
//# sourceMappingURL=index.umd.js.map
