if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const o=s=>l(s,i),t={module:{uri:i},exports:u,require:o};e[i]=Promise.all(r.map((s=>t[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-6cd28afd"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/ar-TN.f333a3b9.js",revision:null},{url:"assets/ca-ES.93410033.js",revision:null},{url:"assets/collect.6b4b7dfe.js",revision:null},{url:"assets/colorworker.893f8723.js",revision:null},{url:"assets/da-DK.26d72918.js",revision:null},{url:"assets/de-DE.77d46b54.js",revision:null},{url:"assets/directory-open-01563666.e6734452.js",revision:null},{url:"assets/directory-open-4ed118d0.aa92a661.js",revision:null},{url:"assets/el-GR.468ff0cb.js",revision:null},{url:"assets/en-GB.34611a76.js",revision:null},{url:"assets/en-US.5329e836.js",revision:null},{url:"assets/es-ES.ed0aa6e2.js",revision:null},{url:"assets/file-open-002ab408.765c6085.js",revision:null},{url:"assets/file-open-7c801643.29b1b007.js",revision:null},{url:"assets/file-save-c8e3403f.949a929a.js",revision:null},{url:"assets/file-save-f7b10bb1.3163b741.js",revision:null},{url:"assets/filehandling.bbbcd086.js",revision:null},{url:"assets/fr-FR.2364238a.js",revision:null},{url:"assets/he-IL.35452059.js",revision:null},{url:"assets/id-ID.97ef26d2.js",revision:null},{url:"assets/index.fb49d953.js",revision:null},{url:"assets/install.e3662f1e.js",revision:null},{url:"assets/it-IT.1fe0e462.js",revision:null},{url:"assets/ja-JP.d0648db3.js",revision:null},{url:"assets/ko-KR.8bd6c74c.js",revision:null},{url:"assets/languages.7cf2e360.js",revision:null},{url:"assets/module-workers-polyfill.min.dc7647fd.js",revision:null},{url:"assets/monochromeworker.ee1cfa6e.js",revision:null},{url:"assets/nl-NL.cd713ba6.js",revision:null},{url:"assets/no-NO.76e6345e.js",revision:null},{url:"assets/pl-PL.236d5cd9.js",revision:null},{url:"assets/preprocessworker.353fdc25.js",revision:null},{url:"assets/preprocessworker.6bb03fc8.js",revision:null},{url:"assets/pt-BR.e9f9a24c.js",revision:null},{url:"assets/ru-RU.c8300f26.js",revision:null},{url:"assets/share.82d96762.js",revision:null},{url:"assets/style.3ed75d94.css",revision:null},{url:"assets/svgoworker.656cd216.js",revision:null},{url:"assets/uk-UA.471e6054.js",revision:null},{url:"assets/windowcontrols.e08a5edf.js",revision:null},{url:"assets/zh-CN.c82a568c.js",revision:null},{url:"index.html",revision:"00ddbac2becda37b8b6765bef8b4eb00"},{url:"sharetargetsw.js",revision:"00ceaa4770ef6539d012e879809b1d1c"},{url:"manifest.webmanifest",revision:"3785f6f95d30b852d4292993cda40bbc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
