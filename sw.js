"use strict";var precacheConfig=[["/ghibli-fans/0.chunk.9b1f7.js","7c403fd0986b8ee91574baab9d720e0c"],["/ghibli-fans/1.chunk.f401e.js","e965923c34b333328d425c9dbf0133d1"],["/ghibli-fans/2.chunk.a1183.js","e4c8eb55044e60e16138a7f627873089"],["/ghibli-fans/3.chunk.e9fc0.js","56c0458527682fa4f8a507bed9e9379c"],["/ghibli-fans/4.chunk.1888b.js","514e55a56e9259c4b6a1259166f71cf9"],["/ghibli-fans/5.chunk.2531e.js","367e93cd609e8810a44205a8d11cbc9a"],["/ghibli-fans/6.chunk.684f3.js","f6d4c43ae2fe1480a1848b86d4f4336e"],["/ghibli-fans/7.chunk.26b45.js","077c86457b449d3609d0b2ca69f88fdb"],["/ghibli-fans/8.chunk.132ed.js","689b3b190e64bb71d6f9d3d1acbedd90"],["/ghibli-fans/assets/favicon.ico","d33c776b25c3a72ec0a09870de5ce190"],["/ghibli-fans/assets/icons/android-icon-144x144.png","e7d03907b8a9061d6439e02985ea5190"],["/ghibli-fans/assets/icons/android-icon-192x192.png","85333962eec0d336a7338785f83523ee"],["/ghibli-fans/assets/icons/android-icon-36x36.png","8c67c95711725917bb800d9ca8618a56"],["/ghibli-fans/assets/icons/android-icon-48x48.png","fa88028774b658ead8f0dc00f616dcdd"],["/ghibli-fans/assets/icons/android-icon-72x72.png","5479ca77ada5b948fab019d98d9661bc"],["/ghibli-fans/assets/icons/android-icon-96x96.png","576b8a4190c3ba0aaeb6cb96256089fa"],["/ghibli-fans/assets/icons/apple-icon-114x114.png","0d0b684eae7ab0735ffbca4117e1af8e"],["/ghibli-fans/assets/icons/apple-icon-120x120.png","9e466f1b85c938774888b63d7e779c1e"],["/ghibli-fans/assets/icons/apple-icon-144x144.png","e7d03907b8a9061d6439e02985ea5190"],["/ghibli-fans/assets/icons/apple-icon-152x152.png","c81b0c3b67a29176f6180a2e1286f76c"],["/ghibli-fans/assets/icons/apple-icon-180x180.png","a005659f7ec9a6db7e7b266bf6a48bc4"],["/ghibli-fans/assets/icons/apple-icon-57x57.png","2ce1aa09edb34b431db0a13a1d62f6ed"],["/ghibli-fans/assets/icons/apple-icon-60x60.png","56bf2ba48edd6eda6936c953d26d48f0"],["/ghibli-fans/assets/icons/apple-icon-72x72.png","5479ca77ada5b948fab019d98d9661bc"],["/ghibli-fans/assets/icons/apple-icon-76x76.png","8cae1f1d0681ebe795eb8da3fccb38a7"],["/ghibli-fans/assets/icons/apple-icon-precomposed.png","dce3d054155e39b1f477f5cf9894cd5e"],["/ghibli-fans/assets/icons/apple-icon.png","dce3d054155e39b1f477f5cf9894cd5e"],["/ghibli-fans/assets/icons/favicon-16x16.png","109044f123ea6bb29c17c90fd0853e53"],["/ghibli-fans/assets/icons/favicon-32x32.png","256b320ec4d4648bee7ddf74678bb1d6"],["/ghibli-fans/assets/icons/favicon-96x96.png","576b8a4190c3ba0aaeb6cb96256089fa"],["/ghibli-fans/assets/icons/favicon.ico","d33c776b25c3a72ec0a09870de5ce190"],["/ghibli-fans/assets/icons/ms-icon-144x144.png","e7d03907b8a9061d6439e02985ea5190"],["/ghibli-fans/assets/icons/ms-icon-150x150.png","d020dbe531479c3d64e9ba039b9d909f"],["/ghibli-fans/assets/icons/ms-icon-310x310.png","cc5b77d05716ef09de66215f9b0f6814"],["/ghibli-fans/assets/icons/ms-icon-70x70.png","9108aeddefa3180aba74701a15556cf8"],["/ghibli-fans/bundle.46683.js","3cd19810d40610c0090be2514cce3e89"],["/ghibli-fans/favicon.ico","d33c776b25c3a72ec0a09870de5ce190"],["/ghibli-fans/index.html","f34253e22c0493593b203d490b485a8c"],["/ghibli-fans/manifest.json","89a181a0149a0621014ca6428c0bcc88"],["/ghibli-fans/style.d6f5e.css","771a3f3e46e2b2c4041c062212218a34"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,a,s){var c=new URL(e);return s&&c.pathname.match(s)||(c.search+=(c.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],s=new URL(n,self.location),c=createCacheKey(s,hashParamName,a,!1);return[s.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var s=new Request(a,{credentials:"same-origin"});return fetch(s).then(function(n){if(!n.ok)throw new Error("Request for "+a+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(a,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!n.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),n=urlsToCacheKeys.has(a));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("index.html",self.location).toString(),n=urlsToCacheKeys.has(a)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});