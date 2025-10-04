'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bbb4333ccaf43d201cd2291158c62a64",
"version.json": "181e22a3de464f31076072f5ad38a611",
"index.html": "f9806455c069a127ffd8c7b28105d867",
"/": "f9806455c069a127ffd8c7b28105d867",
"main.dart.js": "a4602d0b17e7a0696045164cf824a411",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cbc2e630b6ac5f863c36021f3206ed19",
"assets/AssetManifest.json": "d0b63116c1d9489627aec46be4109a7f",
"assets/NOTICES": "fe4f32189bf3a61c7cac4602b24ee95f",
"assets/FontManifest.json": "d20e8ecfc272eec1e28beeb51ad035c6",
"assets/AssetManifest.bin.json": "7676d572797cb1a87b7dfe375f8477ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cc6d95fe86ab0ba516bad67156ead4b6",
"assets/fonts/MaterialIcons-Regular.otf": "56b4fa8b698cbf3c5a2fc11c5d8e95e1",
"assets/assets/images/svg/figma.svg": "45e02bb2c5ba2bb97688fec352a4176a",
"assets/assets/images/svg/iap.svg": "cf09984869cee664e5a362529ea86e0b",
"assets/assets/images/svg/android.svg": "74ec1027e4c6fa0b7de672b7e26f7521",
"assets/assets/images/svg/js.svg": "e8da257d593ea142c120451f88cc45a1",
"assets/assets/images/svg/injectable.svg": "92e2143268dd1d562e397931a9be1c0a",
"assets/assets/images/svg/firebase.svg": "50847836168f9900a7a82502d788351e",
"assets/assets/images/svg/bitbucket.svg": "f3fc39a12f14e608aecf33c6cf3a6983",
"assets/assets/images/svg/github.svg": "36817f26ece144593885c8dc4b77ccc4",
"assets/assets/images/svg/google-play.svg": "6eb6a33835f01ce3848d4beaf0fe28fa",
"assets/assets/images/svg/rest-api.svg": "1b0f944788d42bc62cfffcbf28b97657",
"assets/assets/images/svg/json.svg": "9a9ec5d42f896929fe7a5efcf80effcd",
"assets/assets/images/svg/google-map.svg": "5c36d1741ec8ff9e5fb71d72c8ab7b9e",
"assets/assets/images/svg/git.svg": "6980c3faf323570bc12b61bc1462deca",
"assets/assets/images/svg/xcode.svg": "ce5fc8183cc23879631bd5d362e42da3",
"assets/assets/images/svg/jira.svg": "8904a7acfdec84e5a596addda286a816",
"assets/assets/images/svg/kotlin.svg": "2d08d47b6575c1ff03a2757be38de72e",
"assets/assets/images/svg/visual-studio-code.svg": "fe17460c9434362008cc8634dcfe24b8",
"assets/assets/images/svg/mongodb.svg": "b969e9386e2193534c48d1ac667330f2",
"assets/assets/images/svg/dart.svg": "273fb2092ee5e21aa8b6fa0d4d98b55d",
"assets/assets/images/svg/sqlite.svg": "8c8703cf0eb35e98a4b50dff7a3fc628",
"assets/assets/images/svg/send.svg": "6f9b72a4ab40269ee996c58758487ada",
"assets/assets/images/svg/riverpod.svg": "1f0ef67e6660839d079b2c165d0a0237",
"assets/assets/images/svg/getx.svg": "ce4c77ec55ad8bf6d74649b609646fba",
"assets/assets/images/svg/stripe.svg": "b57067562d49073da3caf31bfc20a819",
"assets/assets/images/svg/provider.svg": "12e586550f25ab97675c0713b6d97396",
"assets/assets/images/svg/google-pay.svg": "286a1e427c1bcba332496de234b60803",
"assets/assets/images/svg/app-store.svg": "96afe270883ff43850dfca1f9561db62",
"assets/assets/images/svg/work_stump.svg": "05d480f4ff281a5ccd1960d51c69b9e4",
"assets/assets/images/svg/ios.svg": "c82deb69a16ea8ae0cd6e1da725ce3f3",
"assets/assets/images/svg/postman.svg": "7ae16905e8ade73fa544ad673653bbef",
"assets/assets/images/svg/html.svg": "6638af73822a4fa152fc1e68c0cb7ff0",
"assets/assets/images/svg/slack.svg": "21edb4f3243b44a1b13446fa0c01046d",
"assets/assets/images/svg/bloc.svg": "86571c3b19e2403f4cad1886aee278d3",
"assets/assets/images/svg/linkdin.svg": "b4c45120760de2b3bc9f1d6d81d7c760",
"assets/assets/images/svg/hive.svg": "511096ddb22c3a035393036b473ea44d",
"assets/assets/images/svg/graphql.svg": "e0c4f5872f47b3e2c6576804d9449998",
"assets/assets/images/svg/android-studio.svg": "bf0005a2069137c01e4ef0962ec7b81c",
"assets/assets/images/svg/node.svg": "6464e959f7f28587d4a834fc20439c16",
"assets/assets/images/ur/8.png": "d54df498bf667ef2180778ee97c56ca1",
"assets/assets/images/ur/9.png": "377989d82d9b9e72094221b9af057f91",
"assets/assets/images/ur/14.png": "a0ee76555104906f6937b68bd765e1b5",
"assets/assets/images/ur/28.png": "f83f4c44f4fe3834f649198906360223",
"assets/assets/images/ur/29.png": "f4e514f1dc4f1dc1e8ed32421e62d9b6",
"assets/assets/images/ur/15.png": "d5a3f91b90620d5a285b0c3582c9266d",
"assets/assets/images/ur/17.png": "66687817bfa129f308d8be00194d6b6b",
"assets/assets/images/ur/16.png": "fd9907d77644856033df229db7cd4098",
"assets/assets/images/ur/12.png": "957ddc0456fd4771e186f39a5c62bec8",
"assets/assets/images/ur/13.png": "4e9eb2cd71bace49728018ad954f2c41",
"assets/assets/images/ur/39.png": "5122ff3cc3834b87e8c1316e364528e8",
"assets/assets/images/ur/11.png": "f2ede0fb7904f3d5f0e56ea5e5ab5209",
"assets/assets/images/ur/10.png": "fa5773b35d0bc6c107f7f4c93a9b626f",
"assets/assets/images/ur/38.png": "f30d74c40bb61341363d4e8b7794be95",
"assets/assets/images/ur/35.png": "01b0aa8ffde05c4ef1fb5e4f482eeb01",
"assets/assets/images/ur/21.png": "316a37afb233795825fc8d0214954806",
"assets/assets/images/ur/34.png": "97198ae4378a3855a7b8d75c4f6b6528",
"assets/assets/images/ur/20.jpg": "763a502ca95a284c508b39fc4884562f",
"assets/assets/images/ur/22.png": "2c07688cc4351b8082fef322b6495f19",
"assets/assets/images/ur/36.png": "e3d2713a43d6667c0a31ae5c175377fe",
"assets/assets/images/ur/37.png": "39fc30617da16ff0742771b5262251d7",
"assets/assets/images/ur/23.png": "9f2c4dff9086306d823a26748a9f7fc1",
"assets/assets/images/ur/27.png": "fb9fd65850474aed8fa4bf2ff6af776e",
"assets/assets/images/ur/33.png": "fd78ae29eb98cda7e86760453b32ac48",
"assets/assets/images/ur/32.png": "5b78b3c8b01ce9327297bd9206756f84",
"assets/assets/images/ur/26.png": "d7a56ed59920801643490a1a95f4add5",
"assets/assets/images/ur/18.png": "d18b4ebc6f7237e6531ff24f69da1678",
"assets/assets/images/ur/30.png": "cb663a9a5111cfa24863d4b201ae0697",
"assets/assets/images/ur/24.png": "c7e326ebb7071554bb03525648618657",
"assets/assets/images/ur/25.png": "a48b367e8cb3c5250e64ce38adf2b461",
"assets/assets/images/ur/31.png": "26667631ed231bfafdb2e7288141725c",
"assets/assets/images/ur/19.png": "2cc1ec5725158dc42da3322dabe5680c",
"assets/assets/images/ur/4.png": "0f6450fc20a10d207bcc577c1fde0a36",
"assets/assets/images/ur/5.png": "a7a99dbb26e44347c73a3adac14becd5",
"assets/assets/images/ur/41.png": "fa8e6799d81c6aa0083d63c883367efb",
"assets/assets/images/ur/7.png": "6c9300c177f290c86a7bf54cbbeab5bf",
"assets/assets/images/ur/6.png": "d954e79f45257409620a193bff6c25b2",
"assets/assets/images/ur/40.png": "854f7b35cc97280aa53ceaba18b00cad",
"assets/assets/images/ur/2.png": "fd738c1f730c110f002ceb5ab35269df",
"assets/assets/images/ur/3.png": "3c27ae56eac49208cefeadc17e4ee254",
"assets/assets/images/ur/1.png": "cf1d0deed2a514a7f553be436663c439",
"assets/assets/images/sb/5.webp": "f83d2c868416958eebd253b0ad852499",
"assets/assets/images/sb/8.png": "68af57273aa0ad3bc78501875d8aaa0e",
"assets/assets/images/sb/4.webp": "fe20b332b6d3af3ad06e38d5df0bb52a",
"assets/assets/images/sb/9.png": "6dea5f5a983f34111e8884e1dd2eeafd",
"assets/assets/images/sb/3.webp": "e0b23fd493b2f34614dd90cde1352ead",
"assets/assets/images/sb/2.webp": "8d8b07290d508b62d79bd90e26427211",
"assets/assets/images/sb/11.png": "a2ffde9a3bcdd3895c0127c99cc36004",
"assets/assets/images/sb/10.png": "e80055e9945c2e6c4576c09d46588c5a",
"assets/assets/images/sb/1.webp": "e6502373a7687d12ada85115de9ee775",
"assets/assets/images/sb/7.png": "cbe84ed37bc4ad29b43adfaedb01336c",
"assets/assets/images/sb/6.webp": "4c5d1b20e5b73c1dad34b7298f14de88",
"assets/assets/images/mb/8.png": "95bfd172a1da50c34399c65c4734fc36",
"assets/assets/images/mb/9.png": "ce6a81b329629463639cb7ccdb2c7341",
"assets/assets/images/mb/11.png": "0746a7fba2f8d4c998e81ad98241de6c",
"assets/assets/images/mb/10.png": "e01b85393390e9f87a054714fa64bc19",
"assets/assets/images/mb/4.png": "a06901c7bb855c2ff08bfafe7484a4a6",
"assets/assets/images/mb/5.png": "0619116a0bf5a43c703f01e0a8e15d61",
"assets/assets/images/mb/7.png": "6ae95b5a88ae4a3ff31f288c71631960",
"assets/assets/images/mb/6.png": "7a7e187e15dd356188ab2dbbb1c28992",
"assets/assets/images/mb/2.png": "703ee21b403975826bf22cd035708e88",
"assets/assets/images/mb/3.png": "d03433a781d8c0685d8561b4163a8474",
"assets/assets/images/mb/1.png": "82efe6a0fc741577a868b15ca057dfc2",
"assets/assets/images/profile.png": "c55ef2f7748728a287c5644d9d21ebb5",
"assets/assets/fonts/noe.ttf": "30a71dcf9a1c39558ca4e97c92a4b2fa",
"assets/assets/fonts/Rubik.ttf": "6d3102fa33194bef395536d580f91b56",
"assets/assets/fonts/SourGummy.ttf": "c40d2e33ba299c6dc4a70d7655449c9d",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
