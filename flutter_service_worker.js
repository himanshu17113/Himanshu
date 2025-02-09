'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e5175389884d553d185fc587ac481602",
"version.json": "181e22a3de464f31076072f5ad38a611",
"index.html": "f9806455c069a127ffd8c7b28105d867",
"/": "f9806455c069a127ffd8c7b28105d867",
"main.dart.js": "c1f5c3f9734dc44a02ead7ab411095f2",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cbc2e630b6ac5f863c36021f3206ed19",
"assets/AssetManifest.json": "f870bd0a227b227a313e3d6727c589ad",
"assets/NOTICES": "03f0fa46f352e6a48e2c00eb6884c6ad",
"assets/FontManifest.json": "d20e8ecfc272eec1e28beeb51ad035c6",
"assets/AssetManifest.bin.json": "27ce7a5b985cf34fc032ce862f1a2726",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7b0bf144197581b61fc7c8426b18a11a",
"assets/fonts/MaterialIcons-Regular.otf": "2ffdd20270f7f5f01914363444ce6433",
"assets/assets/images/svg/figma.svg": "45e02bb2c5ba2bb97688fec352a4176a",
"assets/assets/images/svg/iap.svg": "cf09984869cee664e5a362529ea86e0b",
"assets/assets/images/svg/android.svg": "442bc31aa6e30cdf3f7436049df507d8",
"assets/assets/images/svg/injectable.svg": "92e2143268dd1d562e397931a9be1c0a",
"assets/assets/images/svg/firebase.svg": "50847836168f9900a7a82502d788351e",
"assets/assets/images/svg/bitbucket.svg": "f3fc39a12f14e608aecf33c6cf3a6983",
"assets/assets/images/svg/github.svg": "36817f26ece144593885c8dc4b77ccc4",
"assets/assets/images/svg/google-play.svg": "6eb6a33835f01ce3848d4beaf0fe28fa",
"assets/assets/images/svg/rest-api.svg": "1b0f944788d42bc62cfffcbf28b97657",
"assets/assets/images/svg/json.svg": "9a9ec5d42f896929fe7a5efcf80effcd",
"assets/assets/images/svg/google-map.svg": "5c36d1741ec8ff9e5fb71d72c8ab7b9e",
"assets/assets/images/svg/git.svg": "6980c3faf323570bc12b61bc1462deca",
"assets/assets/images/svg/xcode.svg": "171d8aa39acb63a97baf96264ae3d0b1",
"assets/assets/images/svg/jira.svg": "8904a7acfdec84e5a596addda286a816",
"assets/assets/images/svg/kotlin.svg": "2d08d47b6575c1ff03a2757be38de72e",
"assets/assets/images/svg/visual-studio-code.svg": "fe17460c9434362008cc8634dcfe24b8",
"assets/assets/images/svg/mongodb.svg": "b969e9386e2193534c48d1ac667330f2",
"assets/assets/images/svg/dart.svg": "273fb2092ee5e21aa8b6fa0d4d98b55d",
"assets/assets/images/svg/sqlite.svg": "8c8703cf0eb35e98a4b50dff7a3fc628",
"assets/assets/images/svg/riverpod.svg": "1f0ef67e6660839d079b2c165d0a0237",
"assets/assets/images/svg/getx.svg": "ce4c77ec55ad8bf6d74649b609646fba",
"assets/assets/images/svg/stripe.svg": "b57067562d49073da3caf31bfc20a819",
"assets/assets/images/svg/provider.svg": "12e586550f25ab97675c0713b6d97396",
"assets/assets/images/svg/google-pay.svg": "286a1e427c1bcba332496de234b60803",
"assets/assets/images/svg/app-store.svg": "96afe270883ff43850dfca1f9561db62",
"assets/assets/images/svg/ios.svg": "c82deb69a16ea8ae0cd6e1da725ce3f3",
"assets/assets/images/svg/postman.svg": "7ae16905e8ade73fa544ad673653bbef",
"assets/assets/images/svg/html.svg": "6638af73822a4fa152fc1e68c0cb7ff0",
"assets/assets/images/svg/slack.svg": "21edb4f3243b44a1b13446fa0c01046d",
"assets/assets/images/svg/bloc.svg": "86571c3b19e2403f4cad1886aee278d3",
"assets/assets/images/svg/hive.svg": "511096ddb22c3a035393036b473ea44d",
"assets/assets/images/svg/graphql.svg": "e0c4f5872f47b3e2c6576804d9449998",
"assets/assets/images/svg/android-studio.svg": "bf0005a2069137c01e4ef0962ec7b81c",
"assets/assets/images/svg/node.svg": "6464e959f7f28587d4a834fc20439c16",
"assets/assets/images/profile.png": "c55ef2f7748728a287c5644d9d21ebb5",
"assets/assets/fonts/noe.ttf": "30a71dcf9a1c39558ca4e97c92a4b2fa",
"assets/assets/fonts/Rubik.ttf": "6d3102fa33194bef395536d580f91b56",
"assets/assets/fonts/SourGummy.ttf": "c40d2e33ba299c6dc4a70d7655449c9d",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
