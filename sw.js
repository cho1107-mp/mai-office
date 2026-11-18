// 홈 화면 앱 설치용 서비스 워커
// 저장(캐시)하지 않고 항상 네트워크에서 최신 페이지를 가져온다. 설치 조건을 맞추려고 fetch를 실제로 처리한다.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(fetch(e.request).catch(function () {
    return new Response('<meta charset="utf-8"><p style="font:18px sans-serif;padding:24px">인터넷 연결을 확인해 주세요.</p>', { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }));
});
