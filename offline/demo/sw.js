// there are certain steps you should follow for service worker
//install
//activate
//fetch or whatever you want to do it
//here i can write this. or self.

const CACHE_NAME = "demo/v1";
const CACHE_FILES = [
  "./index.html",
  "./style.css",
  "./photo.png",
  "./script.js",
];

// installation step will wait till "waitUntil method" completed
// opening the cache "cache.open" and good practise is to give app name so given demo here
// good habit to manintain version also because there can be multiple version of cache that can be stored
// it gives you promise
// i have access to demo/v1 so here iam caching what and all filed are cached inside addAll method

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(CACHE_FILES);
    })
  );
});

self.addEventListener("activate", (e) => {
  // cleanup the useless cache
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key != CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// suppose if i refresh the page browser will fetch for html,css,js,png etc..
//  we will catch that fetch event inside the callback function here "e"
// inside callback function whenever browser requesting i will return from the cache all
// offline experience
//whenever file is request
/* good way */
// 1.fetch from the network update my cache
// 2. network call fails then cache as a fallback
/* bad way */
//1.check the cache its avaiable return from cache
//2.if its not avaiable fetch from the network

// self.addEventListener("fetch", (e) => {
//   e.respondWith(
//     fetch(e.request)
//       .then((res) => {
//         // updating cache
//         const cloneData = res.clone();
//         caches.open(CACHE_NAME).then((cache) => {
//           cache.put(e.request, cloneData);
//         });
//         console.log("returning from the network");
//         return res;
//       })
//       .catch((err) => {
//         // returning from the cache
//         console.log("returning from the cache");
//         return caches.match(e.request).then((file) => file);
//       })
//   );
// });
