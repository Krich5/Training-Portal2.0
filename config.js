<script>
/* CXAS Training Portal 2.0 — client-only config */
window.APP_CONFIG = {
  BRAND:    "CXAS Training Portal",   // header brand
  PASSWORD: "letmein",                // single portal password
  VERSION:  "v1"                      // bump to bust caches
};

console.info("APP_CONFIG loaded", {
  BRAND: window.APP_CONFIG.BRAND,
  VERSION: window.APP_CONFIG.VERSION
});
</script>
