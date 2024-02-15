'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9e82c7018b199a88dcca0ad984af0408",
"index.html": "7f0b31af0912d4569c144e42ac07b5c5",
"/": "7f0b31af0912d4569c144e42ac07b5c5",
"main.dart.js": "4997f49277843f4a61a7ed5b29d2cc4d",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cbca015bf6ca95f504603720d19de460",
".git/ORIG_HEAD": "84088a143b87e392d34063ecbd7a7217",
".git/config": "defaf1f1d097bedaf8f712efd7b936f5",
".git/objects/0d/79ac71eb3dd5eec04aeb2df2527aaff7636319": "b4b4a83f78c5b3e79bf408dbd8c413a7",
".git/objects/9e/d772fe1e40501d889a6280deaaa2d1e634490f": "d60d5fab2ee03961b5a4900b7d8f6fab",
".git/objects/35/2e2c76871b6dbba8b194f54b681df2b7ff15ed": "85fc6274026fa227fae09f006364c030",
".git/objects/51/ed1d7362666b65634b65e102a10b6296c31d50": "b5f1a7fd670f31693086d3cb9a262bd2",
".git/objects/93/5fb6e75f59256f503908e4ca44da7f34c41f13": "d685cfe8dada4ba4f2b81b6bc65a0635",
".git/objects/0e/f64c0d4849d06a28549c206c375487b8c7516a": "39b4ff26b076fa961ff2bbc1adb36776",
".git/objects/5a/06ae2a4538a328ba677532aefc5e30937cfb1c": "8cd78a35f5d1b9091a62004a984dbfb7",
".git/objects/9d/dee6b118ef0ea65cf29e7857d8c85c67d7e8dd": "2eea7a02a3b219fff5100f7edee4004c",
".git/objects/a4/d9efb2e2920b4ad41437dfd265a88ca34b2637": "561f89e455b68253ccb130350e905558",
".git/objects/ad/a79fb8732b6b403651bbb34ab1c1f510d67b23": "fda9fba4c68d5a637bebe3f7f40d9503",
".git/objects/ad/dad2bd7de6307174f012f29dc2d73874a60477": "060d3bba7d0480df2a5887ec0c959722",
".git/objects/be/af9c9aeba62b8fe7ad8f7120b1be8eafa5c7d2": "8e7781b38648eefb55fc7b94d96ac8f7",
".git/objects/da/21b8a26913543bc1167136b3055775acf8f250": "938ceb347c23aeaf41ec399626d894cd",
".git/objects/a5/5b912d5ba743924ae40999e2f03150571ecace": "b932f81be76e028d5735c2c7086a2afc",
".git/objects/a5/da1ed66a0ceee723ce7f2905ad2c2a4daf885c": "c2e74193d6eee147a9c8206943b3c40e",
".git/objects/bd/c383ca1bf83ce6e899a2cd241b1fcf6038e89d": "174b6d450425201971a224929742a18b",
".git/objects/ae/b99148beab649e4b39cb11c5e795e654a0bc82": "ff62959fdfeeeb9e3a18719d7cc9c2e4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/de9a0af4c71073f6edbd3ff9cc562b6dccfe4d": "74a303093c3c79a326d152ab3688bbcd",
".git/objects/ee/5027bcb5178d362509fe29d05e9e32a3fe647f": "30af00d037be8417655f435791e5c6b8",
".git/objects/f5/6d288e70d89437a785df08f1f350d3b15007ae": "2208b5a09dfcd3650562edf8d6abc4fc",
".git/objects/e3/2f8ce8c7bd6378bc27de76a6f2d6878d15e304": "ad2ea8502f0c36d924e6231c912f45c8",
".git/objects/fe/82d8d545a7e580a0e82a7bc39dc40cb1df079f": "d37fa0465978ce34e481d76f4dac0dd0",
".git/objects/c1/c25dcce257660493c956c4eff9216cc3f8afba": "b3f9ceb46461997e0696655a495b36e0",
".git/objects/18/5237d2f63a7b8f60ddaaeac612c9387eac2a9b": "d275864e0ce2fb1ac62459b911fcae32",
".git/objects/pack/pack-98fe47606d42b158ebd87ba848304ce8d7f9debc.idx": "635fa9283c70a1e3452ee6c93adfb596",
".git/objects/pack/pack-98fe47606d42b158ebd87ba848304ce8d7f9debc.pack": "d9d530cef674ac5c8e477121bb9c5a64",
".git/objects/16/40c6c85a134e1873aa9955813a6a0b959711b0": "263181d218fe4fcb07b2595bb39cdff1",
".git/objects/8a/72738e03acafaca1b2acf148f739d6214482e0": "cf4fbc62aa7a681719ad0d85c07ffa8a",
".git/objects/4c/af432ba58f2d4e5aa300835298c36e6fe58785": "51bc444b0535b438b92c54d5f2448c1f",
".git/objects/4c/d9c3859abce40881cb18713309029b2c530e6b": "12fedbbd13095f726d9ec70a2262d17f",
".git/objects/86/03b8d683f3a88796ecaf4aeeb3fe7c46769fc1": "e3fd1a533d2f3136c642b44205fc298c",
".git/objects/6b/22d90aeea70d63ac7b5a2904bf85721afb627d": "875cfb9211764e3eb3878b8793146548",
".git/objects/6e/afb7c0fd73d475dab7c1ce675204ed1caaae30": "7cfd9c34adce7cf61ab6473a48c38f68",
".git/objects/6e/5f16f43eef728a1163d069eee20c300087b7b1": "7f1f3eb5060fc19facff615d6701c42b",
".git/objects/9a/34c340f9e173e58f3e3915fa4d437f76382aca": "091176583e0ee08b596517cc5f06ad9e",
".git/objects/09/2f1b1fa4bdec2658b54812b3fbb83fe12e28ea": "b2bae2b2641419712f92ac25a80eae5b",
".git/objects/62/3bccb5773d2048954f4c15fccbd3b2c88d4832": "08598c52c22668b8d0efe562b676fcef",
".git/objects/3f/921345221edfccb2f6048981d1f134b0146f9c": "4cad951d1244c6f77fb2b950e329f8ba",
".git/objects/30/2a6ab84bbc7d3d3643a97ff778990103a3a97d": "b6b1045f3d09862f005d0b0732935162",
".git/objects/5b/6aa93c6863fef46372fd2f2616f2a273e06db7": "2dada6bf4638ab1c8abbfed90618ef5c",
".git/objects/52/9a96c0ea56692e3058e3bc1bb360271854f06b": "b8ce29ff87f2659eda9822f0b6bfed57",
".git/objects/d4/1cc76791cc4035e362b262f6ebb9ec0c0dc1cc": "1f053db1539cf89f723a1d3473e51079",
".git/objects/d4/dd5451b459eb201d0a78b3dc6e7fd0107a95e6": "e15d72b2dc4d98a535a3b8d9b375de7d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/9a5a585874849d897cd722cc49b10ed6f65d80": "99f40ec5b5c92f7f6861cdf28f64cefd",
".git/objects/ef/bc42b7671ba975d46829dbe3555d00b3770a29": "7957d3db2589411227a9b0b632e5f562",
".git/objects/fa/bd1b78f0f61d0fc0b0b913ba2f14809cad365a": "b11447901101e1853871a79b9f6f1ee3",
".git/objects/ff/6bda3c6c5e8720f0fcae55cd71db2793275656": "f5baa69be51d9c90b1acbced35d0314a",
".git/objects/ff/997d07238c34dde0c5f0ead2f36dc1d2b02c98": "1f2c064020b4ebbfc5b65a1cd85e7c03",
".git/objects/e9/4c26fed8fe9d9b62d5df61f7deb6f3e38c466a": "f960860eea54dc8f45cabc204195fca1",
".git/objects/cb/96e297b7e1fa14ef8d94edd4b30b8470f7c6ce": "b17a85bf85928e01203791f5ee51a0ef",
".git/objects/ce/0a179f2500e1da04bbd109d49ab7bbac53e92e": "e90eebdaa1cda7d77550ab1d20a9ee2f",
".git/objects/e0/6a1dab6c288d81486d318d114a5e490cf390fe": "e3e5a9f02ba883b7cb731d836617d624",
".git/objects/79/dbe913b08cc0a4fe1992f644df507ca13130ac": "dd39995d2598da19b1118dccc13e0173",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/46cca9579c6c21a05694ca727953eebf752a62": "a0d2c04325983dcf3b5607875e1ef1dd",
".git/objects/83/b4c89aaa0c793c1c1607108202bdfc24642461": "a2962f0fe3771d7f7efd0b74c5b40fb4",
".git/objects/84/76c75b7f61e995288e08ef11daa4c43ec8191b": "0ed5e7c148bc996ce393ab18f1ca7404",
".git/objects/24/75b2d6686c9c8db01b9d018246b70f27fc7f9f": "04f408fac83db50b5a3161897311e928",
".git/objects/24/a372eaf22bef2c57806f8fb495878dd9eec23f": "6f666abc840a4e75a9eca606b97577a4",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/8b9486e1fb0b8a7adc53eaaf6fdb5c5bc26086": "b1aeb78d826d6f2f29ebc59285503693",
".git/objects/76/5880d8147ec06303085d1f8ebe6c73d6c96313": "b9b24ee39ca51ad1d7685671ecd5deb6",
".git/objects/47/4703e160f97f4c2ae2a8901c8831ae6e6c0b38": "e65054df768d60fa766e0885ec5aaea2",
".git/objects/8b/da92f6df90e4e352ad5d87194e703e5fa49ce6": "97e8340a4bd30de61e9d0a6420a001b4",
".git/objects/7a/ae25c803131fd800c878812c9e7647f2099fe4": "a98e203e8db708e7f5b8eda481bc11c0",
".git/objects/25/b406fd98f90ee2b50ecf8bc9342af2f7d18172": "136d725717d374191ade87fd99ef7d07",
".git/objects/25/2183f6da984575373a201fc7f61ee72d6bf92b": "ed58b416729eb7d0b0283799f308cb2e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "66df039d25243a41e286888601e03f4d",
".git/logs/refs/heads/main": "66df039d25243a41e286888601e03f4d",
".git/logs/refs/remotes/origin/HEAD": "99c173bc47ea60ccd4bf592531824012",
".git/logs/refs/remotes/origin/main": "fd7dfa77fd2266b8018051d2d46a3c84",
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
".git/refs/heads/main": "84088a143b87e392d34063ecbd7a7217",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "84088a143b87e392d34063ecbd7a7217",
".git/index": "3b54a347a9fefe463977c0363f5ca1e9",
".git/packed-refs": "c196da3efbf236962717fbf9f19fb377",
".git/COMMIT_EDITMSG": "3bd960fcfa5579c8d0c51208ca9eded6",
".git/FETCH_HEAD": "a1512b53afb290db1f9d2e52f8413e93",
"assets/AssetManifest.json": "68f8cebfdf0be0c9ec8d4ce187e53486",
"assets/NOTICES": "1a603dfb9092e0c4949eaa5bb78afd4f",
"assets/image/non.png": "a070cfed524af653392c33602a1075d8",
"assets/image/dark_theme.json": "5fa77fdd471ba5d182438006844804a7",
"assets/image/family.png": "17f8d0220cc7deb06d7830e957504d9b",
"assets/image/girl.png": "8db4deffb1ae716a449da1a6282d40b0",
"assets/image/enjoy.json": "f9927e693a9257066db168649cf94550",
"assets/image/friends.png": "246827c2f8c9f59fe141a21a57b59b07",
"assets/image/light_theme.json": "c862011f4e4b81ffe8d1b4dbdb41d690",
"assets/image/boy.png": "7231109a8fd4e31d17cb57d4715fd295",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e125ea1efe00cdf1e3580aa9d933d4fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "00bf8fb326e9ffdbd3cb571e037e6e07",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
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
