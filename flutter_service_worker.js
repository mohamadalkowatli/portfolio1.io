'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "34244dfba24bf1683cc7d254885435fd",
"assets/AssetManifest.bin.json": "e59347c1af3304760c2d45f7d5a37ae1",
"assets/AssetManifest.json": "371f8c7ed600af5672ae6f23ac14cb17",
"assets/assets/AssetManifest.bin": "e694e9f8175adcdecdec3c9564b6ef1a",
"assets/assets/AssetManifest.json": "0ae9c614222ecd2b7777753eb43fa6cd",
"assets/assets/dashboard/addemp4.png": "c9e2893ef5f04389361ee18a25806f95",
"assets/assets/dashboard/addemployee_1.png": "78bf4f32a3e27cd23cb9942b8f7973ff",
"assets/assets/dashboard/addemployee_2.png": "7cca31ed7896147b2391caf4aff75c8f",
"assets/assets/dashboard/addemployee_3.png": "06387fb1e0800e7ae8a9f00c491bf900",
"assets/assets/dashboard/addevaluation.png": "871d747979a1d04664d7a6555ebbe1b7",
"assets/assets/dashboard/addevaluation2.png": "2448401487ab2a7725b6eb17028440b4",
"assets/assets/dashboard/department.png": "57e14f12df8b4840a81a2c33090ed3e0",
"assets/assets/dashboard/employee.png": "41d9a7bc618c947ca018044592a0b39c",
"assets/assets/dashboard/evaluation1.png": "30904b35b262b64240fd96d8c99a9827",
"assets/assets/dashboard/hr1.png": "f000363037c92e6d796f7b63eca1e02a",
"assets/assets/dashboard/jobType.png": "e790a10686b59dd36a6b8a5aee86abb7",
"assets/assets/dashboard/searchEmployee.png": "4371755a42f06cdee4f0c6b5f842a40e",
"assets/assets/dashboard/shiftType.png": "b4fabd5d7366c31f55fe98fe7653c4c3",
"assets/assets/dashboard/showemployee.png": "1cf1e90e7221aecfcf5794c2defcda68",
"assets/assets/FontManifest.json": "e00171bfa9bab92b9c2a50352e16e8c9",
"assets/assets/images/aboutme.jpg": "bb6cf34065164f9e9368e72310b64bdb",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/api.png": "fa3917f6b4c23098e954a5d81065c60e",
"assets/assets/images/backend.png": "b1fde05667b8b7d8f89bd01be0a04fd8",
"assets/assets/images/bloc.png": "b6b882a29d68c670caa05d9f0beafdc4",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/images/database.png": "9f54745fcf0298161aa678a172d03866",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/git2.png": "62df7b3ff18594ae62ffd1c58fda68f8",
"assets/assets/images/gym/1.png": "788d9bdb19b36788c6ab437f2dad70bc",
"assets/assets/images/gym/10.png": "1a178da7ffd5961e857712bb2631cb97",
"assets/assets/images/gym/11.png": "96c018e24470ed5cab831c61b9693dbb",
"assets/assets/images/gym/12.png": "96c018e24470ed5cab831c61b9693dbb",
"assets/assets/images/gym/2.png": "9fdbd387a970580a976b63b0733bd963",
"assets/assets/images/gym/3.png": "16c7c0bc8b069ccd545358144a81a118",
"assets/assets/images/gym/4.png": "b7d5319b87c09e6e71ba074236714dc4",
"assets/assets/images/gym/5.png": "15d923df61eec9c1bec555052f192d0e",
"assets/assets/images/gym/6.png": "f90c10235835f2953d4eb726ba226e09",
"assets/assets/images/gym/7.png": "9201a0a18a872cc9d3de8aefe9b08406",
"assets/assets/images/gym/8.png": "b77f144c85e90a40340cb8e9d60d07be",
"assets/assets/images/gym/9.png": "45949d9c23aee117ee136712a0b1b459",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/mobile/1.png": "2ccd41adc5dddaeda6bca27f46eeadc0",
"assets/assets/images/mobile/10.png": "3823170081e63881eb1f297bb18b5935",
"assets/assets/images/mobile/11.png": "ad23342df8f0069324109b4fffc1bf89",
"assets/assets/images/mobile/12.png": "9cf676b1692173aefd0a69d57b6bb1fa",
"assets/assets/images/mobile/13.png": "dc778b54c6ef4237bd3aa3d77b91e298",
"assets/assets/images/mobile/2.png": "129a3c52441904af303b8fd1f2e6dceb",
"assets/assets/images/mobile/3.png": "ce519c837f631c6d6880761edf7e1117",
"assets/assets/images/mobile/4.png": "3d081f7b70fd4e66258acc7914de2605",
"assets/assets/images/mobile/5.png": "f5a8ef3fa27b9dab789d3683187d4868",
"assets/assets/images/mobile/6.png": "1e7a9f0bde7fe4e029dbce23470a438e",
"assets/assets/images/mobile/7.png": "620855d94cf47eb1508b26972011e344",
"assets/assets/images/mobile/8.png": "5137be3d3adf7d4c76d5dddf6558d905",
"assets/assets/images/mobile/9.png": "91fbd3499acdd072e332349d6a529975",
"assets/assets/images/portfolio.png": "4fbdaec2f7b0c4c6f7acf74fa2af1b02",
"assets/assets/images/pro.png": "a618dc4969d82a6d2ece39a7ee5d11f1",
"assets/assets/images/pro1.png": "0cd08ec9a063ef198a6c5f4f6207ed5d",
"assets/assets/images/setting.png": "6a6d40c8fb6991d35d58dd647fc235d0",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/work1.jpg": "58bbc11e54a3643754df21fd0d1e59a8",
"assets/assets/images/work2.jpg": "8ac2eef16dd7a05a53702e965891c948",
"assets/assets/mohamadAlkowatli_cv.pdf": "e23a35066e59f592eb2db574b2262cb1",
"assets/assets/NOTICES": "a4d48224c8ab69f2ac043aa7abc6b4ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/fonts/Montserrat-Italic.ttf": "761177c558bb3a0084aa85704315b990",
"assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/fonts/RubikMoonrocks-Regular.ttf": "d600125e8597b91eff5e33fa3ba79be8",
"assets/fonts/SignikaNegative-Bold.ttf": "2f9c7284cf29739530b46ebe5bd55c55",
"assets/fonts/SignikaNegative-Light.ttf": "39e2f173bebb27d5656dfab3cfe61c00",
"assets/fonts/SignikaNegative-Medium.ttf": "60ccb87c113c745a7bf3cc1bc4f09bed",
"assets/fonts/SignikaNegative-Regular.ttf": "5189e01abe7eb315d8a324ceb971b6ab",
"assets/fonts/SignikaNegative-SemiBold.ttf": "ae8e354eb18998e7559f3a188427a497",
"assets/NOTICES": "901286b919bf57796235495999c603ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2418735898f1610ec14659032aa17afc",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "67563acf451d4e1987586ab1c4c4a1b2",
"icons/apple-touch-icon.png": "2418735898f1610ec14659032aa17afc",
"icons/Icon-192.png": "3adf473adec53930fb7f718d7347450e",
"icons/Icon-512.png": "857e99a0486d331e41dafa013eadc87e",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "854b625e9ec5ecc7af5aa5136ad041e7",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
