// 홈 화면 앱 설치용 최소 서비스 워커 (캐시하지 않음, 항상 최신 웹앱을 띄움)
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
