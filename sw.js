const Static = 'Estatico';
const Inmutable = 'Inmutable';
const Dinamic = 'Dinamico';

function limpiar_cache(CacheName, NumeroElementos) {
	caches.open(CacheName).then(cache=>{
		return cache.keys().then(keys=>{
			if (keys.legth>NumeroElementos){
				cache.delete(keys[0]).then(limpiar_cache(CacheName,NumeroElementos))
			}
		})
	})
}

//Crear evento de instalacion agregar archivos necesarios al cache

self.addEventListener('install',event=>{
	const varcacheStatic = caches.open(Static).then(cache=>{
		return cache.addAll([
		'/',
		'index.html',
        '/pages/1.html',
		'/pages/2.html',
		'/pages/3.html',
        '/pages/4.html',
        '/pages/5.html',
		'/pages/6.html',
		'/pages/7.html',
		'/pages/8.html',
		'/pages/9.html',
		'/pages/10.html',
		'/pages/11.html',
		'/pages/12.html',
		'/pages/14.html',
		'/pages/16.html',
		'/pages/17.html',
		'/pages/18.html',
		'/pages/19.html',
		'/pages/20.html',
		'/pages/off3.html',
		'/imagen/1.jpg',
        '/imagen/2.jpg',
		'/imagen/3.jpg',
		'/imagen/4.jpg',
        '/imagen/56.jpg',
        '/imagen/7.jpg',
		'/imagen/8.jpg',
		'/imagen/9.jpg',
		'/imagen/10.jpg',
		'/imagen/11.jpg',
        '/imagen/12.jpg',
		'/imagen/13.jpg',
		'/imagen/1415.jpg',
		'/imagen/16.jpg',
		'/imagen/17.jpg',
		'/imagen/18.jpg',
		'/imagen/19.jpg',
		'/imagen/20.jpg',
        '/imagen/web.png',
		'manifest.json',
		'/js/esposa.js',
		'js/jquery.min.js',
		'sw.js',
		'/imagen/icons/icon-72x72.png',
		'/imagen/icons/icon-96x96.png',
		'/imagen/icons/icon-144x144.png'
	]);
});

	const varcacheInmut = caches.open(Inmutable).then(cache=>{
		return cache.addAll([
            '/pages/off3.html',
            '/imagen/web.png'
		]);
	});

	event.waitUntil(Promise.all([varcacheStatic,varcacheInmut]));
});
self.addEventListener('activate',event=>{
	caches.keys().then((keys)=>{
		keys.forEach((cache)=>{
			if (cache.includes("Estatico") && !cache.includes(Static)){
				caches.delete(cache);
			}
		});
	});
});

self.addEventListener('fetch', event=>{
	const respuesta = fetch(event.request)
	.then((res)=>{
		if(res){
			caches.match(event.request).then((cache)=>{
				if(!cache){
					caches.open(Dinamic).then((cache)=>{
						cache.add(event.request.url);
					});	
				}
			});
			return res;
		}else{
			return caches.match(event.request.url).then((newRes)=>{
				if(newRes){
					return newRes;
				}else{
			if (/\.(png|jpg)$/.test(event.request.url)){
				return caches.match("imagen/web.png"); 
		}
		return caches.match("imagen/web.png"); 
	       }  
       });
    }
})
.catch ((error)=>{
	return caches.match(event.request.url).then((newRes)=>{
		if (newRes){
			return newRes;
		}else{
			if (/\.(png|jpg)$/.test(event.request.url)){
				return caches.match("/imagen/web.png"); 
		}
		return caches.match("/imagen/web.png"); 
		}
	});
});
event.respondWith(respuesta);

});
