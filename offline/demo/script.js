//check first service worker exist or not supported by browser
//you can type "navigator.serviceWorker" in browser console and check service worker there or not
if (navigator.serviceWorker) {
  //registered service worker using register method my service worker is "sw.js" so i passed
  //here we need to check whether registered successfully or not for that register method return promise
  navigator.serviceWorker
    .register("./sw.js")
    .then((res) => {
      console.log("Service worker registered successfully");
    })
    .catch((err) => {
      console.error("Error while registering service worker", err);
    });
}
// Register the service worker here
