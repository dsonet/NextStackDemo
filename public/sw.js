if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>n(e,t),o={module:{uri:t},exports:i,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-7c0b93a0"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/FZh09D9wwac9NEr6ZdpOz/_buildManifest.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/FZh09D9wwac9NEr6ZdpOz/_ssgManifest.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/171.6d96682ebf7258168b42.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/177-072196b429c2a4c02b3b.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/336-970d453d275b45cba40f.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/75fc9c18-5c1929f66343f0a636cd.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/framework-717d42ae9e172961f2a5.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/main-28a4ac58d1c7b47bed9c.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/pages/404-c61d0e61a01b84b08b2b.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/pages/_app-c153398826176ff11955.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/pages/about-us-4b0ea7c6ff7eef2762f4.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/pages/blog-bed4a2d09abec55868eb.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/pages/blog/%5B...post%5D-a889150380ab264aec76.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/pages/contact-us-fba3eab3fd8d495e4c4a.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/pages/index-cd81ab921ec772e98415.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/chunks/webpack-3fadae436e5ca90c1cf6.js",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/_next/static/css/705332b4597776029579.css",revision:"FZh09D9wwac9NEr6ZdpOz"},{url:"/contentstack-readme-logo.png",revision:"b876b33d59cbf5ce3ec7d9242745a7de"},{url:"/devtools.gif",revision:"75ccb20f41b274187dab1b11152c07fe"},{url:"/favicon.ico",revision:"9a6e4aaa6e90b763a122b06b12417091"},{url:"/icon/icon-192x192.png",revision:"ca9d675a868e5e2ef3389bf8e9e41ef6"},{url:"/icon/icon-256x256.png",revision:"4f4eed8bd6c5ce7c92ab25bc0f6d6319"},{url:"/icon/icon-384x384.png",revision:"d20f17d829aa3f2a136a2e20c3cd566f"},{url:"/icon/icon-512x512.png",revision:"9e5e8e7e2f879b75d304f2214fd46ac1"},{url:"/manifest.json",revision:"46cbd3b8d736e5caa98d8c92129b1d87"},{url:"/starter-app.png",revision:"62f77101c523dba1194a95219bc41e25"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));