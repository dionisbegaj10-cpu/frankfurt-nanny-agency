import fs from "node:fs";
import path from "node:path";

const assets = [
  ["images/hero-poster-1.jpg", "https://dixhectares.com/cdn/shop/files/preview_images/b572b1296cbf426583eba49a7aa9cba5.thumbnail.0000000000_1024x.jpg?v=1773680852"],
  ["images/hero-poster-2.jpg", "https://dixhectares.com/cdn/shop/files/preview_images/093450597b814880bbb9c7b52e68bee2.thumbnail.0000000000_small.jpg?v=1777999323"],
  ["images/hero-poster-3.jpg", "https://dixhectares.com/cdn/shop/files/preview_images/2c038b8d5e4a456297146d5245033753.thumbnail.0000000000_small.jpg?v=1782209114"],
  ["videos/hero-1.mp4", "https://dixhectares.com/cdn/shop/videos/c/vp/b572b1296cbf426583eba49a7aa9cba5/b572b1296cbf426583eba49a7aa9cba5.HD-1080p-7.2Mbps-77997058.mp4?v=0"],
  ["videos/hero-2.mp4", "https://dixhectares.com/cdn/shop/videos/c/vp/093450597b814880bbb9c7b52e68bee2/093450597b814880bbb9c7b52e68bee2.HD-1080p-7.2Mbps-83428080.mp4?v=0"],
  ["videos/hero-3.mp4", "https://dixhectares.com/cdn/shop/videos/c/vp/2c038b8d5e4a456297146d5245033753/2c038b8d5e4a456297146d5245033753.HD-1080p-7.2Mbps-87206255.mp4?v=0"],
  ["images/crest.png", "https://dixhectares.com/cdn/shop/t/50/assets/exLibris.png?v=25697715235752125241783325835"],
  ["images/fertile-balm.jpg", "https://dixhectares.com/cdn/shop/files/XH02position.jpg?v=1758289459&width=2000"],
  ["images/symbiotic-cleanser.png", "https://dixhectares.com/cdn/shop/files/Plandetravail5copie.png?v=1773055670&width=2000"],
  ["images/serum-gravure.jpg", "https://dixhectares.com/cdn/shop/files/DixHectares_GravureEcom_Serum.jpg?v=1765890052&width=2000"],
  ["images/serum-nav-thumb.jpg", "https://dixhectares.com/cdn/shop/files/serum-nav-thumb.jpg?v=1757922877&width=2000"],
  ["images/newsletter.jpg", "https://dixhectares.com/cdn/shop/files/newsletter-image-newnew.jpg?v=1741174386&width=2000"],
  ["images/print-p26.jpg", "https://dixhectares.com/cdn/shop/files/10.01.2026_DIXHECTARES-PRINT-P26_5-ens-P-v2_d61c8f2f-973a-44a6-9310-0e29e9983d0e.jpg?v=1782207681&width=2000"],
];

for (const [rel, url] of assets) {
  const dest = path.join(process.cwd(), "public", rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) { console.error("FAIL", rel, res.status); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log("OK", rel, buf.length);
  } catch (e) {
    console.error("ERR", rel, e.message);
  }
}
