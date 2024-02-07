'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9e82c7018b199a88dcca0ad984af0408",
"index.html": "87aed4878abcaa0c15a945921006a7c1",
"/": "87aed4878abcaa0c15a945921006a7c1",
"main.dart.js": "451b4198ba33faba46e2537dc4febfc9",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cbca015bf6ca95f504603720d19de460",
".git/ORIG_HEAD": "b137e0155d2e3521a865b0f5a4e75bbb",
".git/config": "defaf1f1d097bedaf8f712efd7b936f5",
".git/objects/35/2e2c76871b6dbba8b194f54b681df2b7ff15ed": "85fc6274026fa227fae09f006364c030",
".git/objects/5a/06ae2a4538a328ba677532aefc5e30937cfb1c": "8cd78a35f5d1b9091a62004a984dbfb7",
".git/objects/a4/d9efb2e2920b4ad41437dfd265a88ca34b2637": "561f89e455b68253ccb130350e905558",
".git/objects/ad/dad2bd7de6307174f012f29dc2d73874a60477": "060d3bba7d0480df2a5887ec0c959722",
".git/objects/be/af9c9aeba62b8fe7ad8f7120b1be8eafa5c7d2": "8e7781b38648eefb55fc7b94d96ac8f7",
".git/objects/a5/5b912d5ba743924ae40999e2f03150571ecace": "b932f81be76e028d5735c2c7086a2afc",
".git/objects/a5/da1ed66a0ceee723ce7f2905ad2c2a4daf885c": "c2e74193d6eee147a9c8206943b3c40e",
".git/objects/fe/82d8d545a7e580a0e82a7bc39dc40cb1df079f": "d37fa0465978ce34e481d76f4dac0dd0",
".git/objects/pack/pack-98fe47606d42b158ebd87ba848304ce8d7f9debc.idx": "635fa9283c70a1e3452ee6c93adfb596",
".git/objects/pack/pack-98fe47606d42b158ebd87ba848304ce8d7f9debc.pack": "d9d530cef674ac5c8e477121bb9c5a64",
".git/objects/09/2f1b1fa4bdec2658b54812b3fbb83fe12e28ea": "b2bae2b2641419712f92ac25a80eae5b",
".git/objects/5b/6aa93c6863fef46372fd2f2616f2a273e06db7": "2dada6bf4638ab1c8abbfed90618ef5c",
".git/objects/52/9a96c0ea56692e3058e3bc1bb360271854f06b": "b8ce29ff87f2659eda9822f0b6bfed57",
".git/objects/ff/6bda3c6c5e8720f0fcae55cd71db2793275656": "f5baa69be51d9c90b1acbced35d0314a",
".git/objects/84/76c75b7f61e995288e08ef11daa4c43ec8191b": "0ed5e7c148bc996ce393ab18f1ca7404",
".git/objects/24/75b2d6686c9c8db01b9d018246b70f27fc7f9f": "04f408fac83db50b5a3161897311e928",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ded69127f7ad16f2724307d572f329c9",
".git/logs/refs/heads/main": "ded69127f7ad16f2724307d572f329c9",
".git/logs/refs/remotes/origin/HEAD": "99c173bc47ea60ccd4bf592531824012",
".git/logs/refs/remotes/origin/main": "b7064358bca866a09e85526312045cea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b137e0155d2e3521a865b0f5a4e75bbb",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b137e0155d2e3521a865b0f5a4e75bbb",
".git/index": "8d6276d10c7e01d89e2e74f5fc2aef45",
".git/packed-refs": "c196da3efbf236962717fbf9f19fb377",
".git/COMMIT_EDITMSG": "f1a9380798db7e1aa5fc44d57daa85e5",
".git/FETCH_HEAD": "4ae93949b9d2fb5c2304fbb71b7e62da",
"assets/AssetManifest.json": "d8fb916028106c423bfdf494c0d97b8c",
"assets/NOTICES": "f737dda182f0422cd353309c2f98315a",
"assets/image/non.png": "a070cfed524af653392c33602a1075d8",
"assets/image/family.png": "17f8d0220cc7deb06d7830e957504d9b",
"assets/image/girl.png": "8db4deffb1ae716a449da1a6282d40b0",
"assets/image/enjoy.json": "f9927e693a9257066db168649cf94550",
"assets/image/friends.png": "246827c2f8c9f59fe141a21a57b59b07",
"assets/image/boy.png": "7231109a8fd4e31d17cb57d4715fd295",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "3a779ad889d454bf4cb4fc04b029159b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "cc3a9c9c560a04bc364f1fc706398210",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
