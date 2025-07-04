self.addEventListener("install", event => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", event => {
  // 全リクエストをそのままネットワークに流す（オフライン非対応）
});
