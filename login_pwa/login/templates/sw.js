
self.addEventListener('install', function(e) {
    e.waitUntil(
      
      

      caches.open('login').then(function(cache) {
        return cache.addAll([
          '/',
          'admin/',
          'sign_up/',
          'user_login/',

        ]);
      })
    );
console.log("installion done.") ; 
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('mysite-dynamic').then(async function(cache) {
      console.log(cache);
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});   

function getdata(){

console.log("getdata is executing");
  caches.open('mysite-dynamic').then(async function(cache) {
    console.log(cache);

    fetch('http://127.0.0.1:8000/stock_fetch').then(function(response) {
      console.log("data fetched");
      cache.put('stock_fetch', response.clone());
      return response;
    });

  });

  }

  
  getdata();

  setInterval(()=> getdata(),2015);

   