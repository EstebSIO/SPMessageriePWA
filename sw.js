
self.addEventListener('install', evt => {
    console.log(evt);
    caches.open('PWA2').then(
        cache => {
            cache.addAll(['index.html'])
        }
    )
})
self.addEventListener('activate', evt => {
    console.log(evt);
})
self.addEventListener('fetch', evt => {

    self.addEventListener('fetch', evt => {
        if (!(evt.request.url.indexOf('http') === 0)) return;
    evt.respondWith(
        caches.match(evt.request).then(rep=>{
                if (rep) {
                    return rep;
                }
                return fetch(evt.request).then(
                    newResponse => {
                        caches.open('LPDWCA2').then(  
                            cache => cache.put(evt.request, newResponse)
                        );  
                        return newResponse.clone();
                    })
            })
    )

    })
})
