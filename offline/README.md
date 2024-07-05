### Service Workers

- service workers essentially act as proxy servers that sits between web applications,the browser, and the network
- service wokrer is nothing its kind of javascript code (some function or event) that portion of code runs in your browser on the separate theread then main thread
- it has a separate thread does not block your main thread.it runs on the separate theread and act as proxy server.service worker run behind the scene on the separate thread
- using service workers you can create the offline experiences in your webistes
- ex: whenever you made request from your website there are so many network calls made like htm15 is fetched and css is fetched and some javascript code is fetched and images all that stuff is fetched from network and when it comes to browser it just renders onto the DOM thats what we see
- suppose if your internet goes off in that case if you request resources from the server it doesnot return anything and your webpage does not load
- what if you want to create offline experience where your website works in offline mode also so to build that offline funtionlity we use service workers
- **intercept network requests take the approprite action based on whether the network is available**
- service worker sitting in between and it takes that network call and it can take decision based on that whether i want to fetch it from server or from the cache like what should i do with that network request so it act as proxy server and intercept it
- **service worker only work on https only why?**
- service workers act as proxy server and it intercepting network request that means it can perform man in the middle attack. there can be man in the middle attack that can be perfromed. that is the reason allowed by the browser on the https only
- that is reason in firefox incoginatio mode you can not access service workers because of the seuerity reasons
- service workers works only speicific browsers on specific operating systems and there are so many mobile phone might not work service workers and there are so many browsers service workers might not work
- so service workers also have little bit of compatability issues but all the modern browsers supports the service workers
- **They will also allow access to push notifications and background sync apis**
- if any new update coming soon and you want to show notification you can send push notification
- background sync apis means your website is running on main thread but on the background it can do its own stuff in a diffrenet theread

- service worker is an even-driven worker registered against origin and path it means service workers not shared with across domains,origins,paths
- example if you have service worker in namasthedev.com it will work on that site only and it will not work on some other webiste(google.com)
- it takes the form of javascript file that can control website/page
- **service workers does not have access to DOM because it runs on the diffrent thread and if your application in offline it runs behind the scenes and cannot even access webstorage apis(local storage,session storage, cookie)**

- in browser under application tab there is a section called cache storage so in that cache storage i can store my data (i can store html,css,js,image etc..) it comes with some limitation(you can't store movie) so you can cache some important things
- service worker can make you offline experience using this cache storage
- so basically you have to add files in that cache storage so we serve them whenever user is offline
- **what is cache?**
- cache is like small database for you and it maintain separate tables inside this database

- suppose for large scale production ready application you can create small portion of you app also like for specific folder you can apply service worker
