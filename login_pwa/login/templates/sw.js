
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
    caches.open('mysite-dynamic').then(function(cache) {
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
   