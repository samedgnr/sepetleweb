'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e5ab22e01b08f3925dae581e590fe2b3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/images/aa.jpg": "7a5ab1194891ebc29d41cb5f38db2ebb",
"assets/lib/images/apple.jpeg": "7b0ea3eb3ad85756a030ffcba36d2f74",
"assets/lib/images/banana.jpeg": "ab5cffbb479af17bc5ad65314f029737",
"assets/lib/images/carrot.jpg": "83e0edecfbd978e34134480ff5a4864f",
"assets/lib/images/cart.png": "9a59fd19a120667b79f38e1421149284",
"assets/lib/images/chicken.jpg": "31d4a2b20732b950052b8179013dbc08",
"assets/lib/images/chips.jpg": "738e2b84d0082ee65ca07dd0d4f46a67",
"assets/lib/images/cho.jpg": "8e5fec795d5271486938348258985706",
"assets/lib/images/choo.jpg": "a92edb83da7c125be5c28e40ace51707",
"assets/lib/images/cola.jpg": "65378287999cc049d3fc991e558eb0ce",
"assets/lib/images/cornetto.jpeg": "7a6f73496f40dd50523105063004fc57",
"assets/lib/images/cucumber.png": "f6170844154ecd6e644d88de04d5cd05",
"assets/lib/images/dardanatel.jpeg": "75b91757a3e7f94493422c3538f9c1bd",
"assets/lib/images/dido.jpeg": "0c785b87230e1626bf07ec9e9ab1ec46",
"assets/lib/images/fanta.jpg": "6ddcc9790836f3b40a473ca224cb976f",
"assets/lib/images/gazoz.jpg": "c3e95260a2c952bba16935ad737bfbac",
"assets/lib/images/haribo.jpeg": "98f906bf934abae1a873b3c06f505410",
"assets/lib/images/home.png": "f9a736b8c222f8cce34ea46dad0f4e26",
"assets/lib/images/iconShop.png": "c47340b8c844d10c63b56f07e71f10ad",
"assets/lib/images/indir.jpg": "f1a7a5d29bdbbd6c8be7cf927687f045",
"assets/lib/images/lemon.jpg": "cdf521aff0a17b19fa179985c85bc1d7",
"assets/lib/images/magnum.jpeg": "e537ecd2e22c716d1823fb55d70812f6",
"assets/lib/images/oil.jpg": "16595e12581bbdf9077b8c5c722a1a13",
"assets/lib/images/oranges.jpg": "4eecea3c161f428f4b01b80e187f0571",
"assets/lib/images/oreo.jpg": "7a82b4f7bba2f2ce0e11ccd425e9c1af",
"assets/lib/images/pineapple.jpg": "0006c454535dd39cbee38fbcbf9dd7c7",
"assets/lib/images/pringles.jpg": "6bf6c166162b84d68287103d18d558ba",
"assets/lib/images/redbull.jpg": "653e3894e49e0bd3c29efa59685bcab5",
"assets/lib/images/salca.jpeg": "b3f6160dc4b9a1a11746ee737234a214",
"assets/lib/images/shop.jpg": "1598b636a6764e3b77d2832052ee8438",
"assets/lib/images/shop.svg": "806bd0f07a0c5d924ef4f7f8ef9f945c",
"assets/lib/images/shopbig.jpg": "62c65e75f6ee780a0809b36849b5964d",
"assets/lib/images/spaghetti.jpg": "9d98dc18d27d5c09385ef59539dca7f7",
"assets/lib/images/tomato.jpg": "1af172d88f11ffce4b41a7f5f4616183",
"assets/lib/images/user.png": "82e1deb80e1d902741e34f4ed6302ac4",
"assets/lib/images/water.jpg": "fdb354e5c81a79b4bfa9ab408c0c25a1",
"assets/NOTICES": "e3a077a8f932dd443cfe9122e2cb7c02",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1675447ca41807405981c313c2828e4f",
"/": "1675447ca41807405981c313c2828e4f",
"main.dart.js": "f7273a14c3fea6c27c0301502e6a7e22",
"manifest.json": "e73f3e6f74e820a4144d31d0e8691e87",
"version.json": "c4e35e29036ee2e58d24753160e6c082"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
