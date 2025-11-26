import React, { useMemo, useState } from "react";

/**
 * Blog.jsx
 * React + Tailwind blog page (single-file, drop-in)
 *
 * Notes:
 * - Replace image URLs with your own assets or imports if you prefer.
 * - Uses simple local state for search/filter/modal/pagination.
 */

const SAMPLE_POSTS = [
  {
    id: 1,
    title: "iPhone 15 Series: What to Expect",
    excerpt:
      "Apple’s new iPhone 15 lineup brings refinements in camera, battery, and performance — here’s a quick guide.",
    content:
      "Full article content about iPhone 15 series. Deep dive into cameras, chips, charging speeds, and pre-order tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    date: "2025-09-02",
    author: "Admin",
    tags: ["smartphone", "review"],
    image: "https://i5.walmartimages.com/seo/Restored-Apple-iPhone-14-Pro-Max-Carrier-Unlocked-512GB-Gold-MQ903LL-A-Refurbished_ebaa4145-2d5f-48c9-897f-8284cb7dfc78.917a10bac69f122d8a008486a632b946.jpeg",
  },
  {
    id: 2,
    title: "MacBook M3 Pro — Real World Performance",
    excerpt:
      "Benchmarks, battery life and whether the M3 Pro is worth the upgrade from M2.",
    content:
      "Full review content for MacBook M3 Pro including benchmarks, thermal behavior and battery life. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    date: "2025-08-10",
    author: "Jane Doe",
    tags: ["laptop", "review"],
    image: "https://maxcom.uz/storage/product/dvHT1aTF7rCJjKvzaVzRkbYPxVevht4dqS3pnogy.png",
  },
  {
    id: 3,
    title: "8 Things You Probably Didn’t Know About Headphones",
    excerpt:
      "From impedance to active noise cancellation — 8 headphone facts every audiophile should know.",
    content:
      "Deeper explanations about drivers, ANC technology, sound signatures and buying tips. Cras mattis consectetur purus sit amet fermentum.",
    date: "2024-11-28",
    author: "Editor",
    tags: ["audio", "guide"],
    image: "https://maxcom.uz/storage/product/dvHT1aTF7rCJjKvzaVzRkbYPxVevht4dqS3pnogy.png",
  },
  {
    id: 4,
    title: "PS5 vs Xbox: Which Is Best in 2025?",
    excerpt:
      "Console differences, exclusive titles, and the best choice depending on your preferences.",
    content:
      "Comparative article covering GPUs, frame rates, exclusive games, and subscription services. Aenean lacinia bibendum nulla sed consectetur.",
    date: "2025-02-14",
    author: "Gamer Team",
    tags: ["gaming", "compare"],
    image: "https://neostar.uz/upload/iblock/3d1/jhnc3r18kitwjvd2970x25h84sgogkng.jpg",
  },
  {
    id: 5,
    title: "Cyber Security 101: How to Protect Your Devices",
    excerpt:
      "Simple everyday steps to harden your privacy and prevent common cyber attacks.",
    content:
      "Guidelines including password managers, two-factor authentication, software updates, and recognizing phishing. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    date: "2025-01-09",
    author: "Security Lab",
    tags: ["security", "guide"],
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/16-9640/media-gallery/silver/touch/notebook-laptop-xps-16-9640-t-silver-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=487&qlt=100,1&resMode=sharp2&size=487,320&chrss=full",
  },
  {
    id: 6,
    title: "Top Budget Gaming Laptops Under $700",
    excerpt:
      "Our picks for the best price-to-performance portable gaming machines this year.",
    content:
      "A buyer's guide for budget gaming laptops, discussing CPUs, GPUs, RAM, and thermals. Vestibulum id ligula porta felis euismod semper.",
    date: "2024-12-05",
    author: "Gadget Picks",
    tags: ["laptop", "gaming"],
    image: "https://nout.uz/wp-content/uploads/2025/01/samsung.png",
    "imgpage1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5Y0dfW2xSVDxoD2fgkr2I2HW5-hKsFnUDNS5sRcRQZ2PPlstUwcVB6V8dRhydc4zd0E&usqp=CAU",
  },
];

const uniqueTags = (posts) =>
  Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

export default function Blog() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [modalPost, setModalPost] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const tags = useMemo(() => ["all", ...uniqueTags(SAMPLE_POSTS)], []);

  const filtered = useMemo(() => {
    return SAMPLE_POSTS.filter((p) => {
      const matchesTag = activeTag === "all" || p.tags.includes(activeTag);
      const matchesQuery =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        p.content.toLowerCase().includes(query.toLowerCase());
      return matchesTag && matchesQuery;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [query, activeTag]);

  const featured = filtered[0];
  const postsToShow = filtered.slice(0, visibleCount);

  return (
    <div className="w-full pt-20 pb-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-5">

        <div className="text-center">

          <div className="mt-3 flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-full md:w-1/2">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10.5A6.5 6.5 0 1 1 4 10.5a6.5 6.5 0 0 1 13 0z" />
                </svg>
                <input
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setVisibleCount(6); }}
                  placeholder="Search articles, e.g. 'iPhone', 'headphones', 'security'..."
                  className="bg-transparent outline-none flex-1 text-sm"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => { setActiveTag(t); setVisibleCount(6); }}
                  className={`text-sm px-3 py-1 rounded-full transition 
                    ${activeTag === t ? "bg-[#1975B9] text-white shadow-md" : "bg-gray-100 text-gray-700 hover:scale-105"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">

            {featured && (
              <article
                className="relative rounded-2xl overflow-hidden shadow-xl group"
                style={{ minHeight: 220 }}
              >
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-64 object-cover brightness-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute left-6 bottom-6 text-white">
                  <div className="text-sm uppercase bg-[#1975B9]/80 inline-block px-3 py-1 rounded-full">Featured</div>
                  <h2 className="text-2xl md:text-3xl font-bold mt-3">{featured.title}</h2>
                  <p className="mt-2 max-w-2xl">{featured.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-sm bg-white/10 px-3 py-1 rounded-full">{featured.author}</span>
                    <span className="text-sm text-white/80">{new Date(featured.date).toLocaleDateString()}</span>
                    <button
                      onClick={() => setModalPost(featured)}
                      className="ml-4 inline-block bg-white text-[#0C0C0C] px-4 py-2 rounded-md font-semibold hover:shadow-lg transition"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </article>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {postsToShow.map((p) => (
                <article
                  key={p.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="w-full h-40 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{p.tags.join(" • ")}</span>
                      <span>{new Date(p.date).toLocaleDateString()}</span>
                    </div>
                    <h3 className="mt-2 font-semibold text-lg">{p.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <button
                        onClick={() => setModalPost(p)}
                        className="text-sm font-semibold text-[#1975B9] hover:underline"
                      >
                        Read more →
                      </button>
                      <div className="text-sm text-gray-400">{p.author}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {visibleCount < filtered.length && (
              <div className="text-center mt-4">
                <button
                  onClick={() => setVisibleCount((v) => v + 6)}
                  className="inline-block bg-[#1975B9] text-white px-6 py-2 rounded-full shadow hover:bg-[#1663a1] transition"
                >
                  Load more
                </button>
              </div>
            )}

            {filtered.length === 0 && (
              <div className="text-center text-gray-500 py-12">
                No articles found. Try another search or clear filters.
              </div>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-5">
              <h4 className="font-semibold mb-3">Recent posts</h4>
              <ul className="space-y-3">
                {SAMPLE_POSTS.slice(0, 4).map((r) => (
                  <li key={r.id} className="flex items-start gap-3">
                    <img src={r.image} alt="" className="w-16 h-12 object-cover rounded-md" />
                    <div>
                      <button onClick={() => setModalPost(r)} className="text-sm font-medium hover:underline text-gray-800">{r.title}</button>
                      <div className="text-xs text-gray-500">{new Date(r.date).toLocaleDateString()}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#1975B9] to-[#1FB6CF] text-white rounded-2xl p-5 shadow-lg">
              <h4 className="font-semibold text-lg">Subscribe</h4>
              <p className="text-sm mt-2 text-white/90">Get the latest reviews and how-tos straight to your inbox.</p>
              <div className="mt-4 flex gap-2">
                <input className="flex-1 rounded-lg px-3 py-2 text-black" placeholder="Your email" />
                <button className="px-4 py-2 rounded-lg bg-white text-[#1975B9] font-semibold">Join</button>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-5">
              <h4 className="font-semibold mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {uniqueTags(SAMPLE_POSTS).map((t) => (
                  <button
                    key={t}
                    onClick={() => { setActiveTag(t); setVisibleCount(6); window.scrollTo({ top: 300, behavior: "smooth" }); }}
                    className="text-sm px-3 py-1 bg-gray-100 rounded-full hover:scale-105 transition"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {modalPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setModalPost(null)}
          />
          <div className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all">
            <div className="w-full h-48 overflow-hidden">
              <img src={modalPost.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">{modalPost.tags.join(" • ")}</div>
                <div className="text-sm text-gray-500">{new Date(modalPost.date).toLocaleDateString()}</div>
              </div>
              <h2 className="text-2xl font-bold mt-3">{modalPost.title}</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">{modalPost.content}</p>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-500">By {modalPost.author}</div>
                <div className="flex items-center gap-3">
                  <button onClick={() => navigator.share?.({ title: modalPost.title })} className="text-sm px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition">Share</button>
                  <button onClick={() => setModalPost(null)} className="text-sm px-3 py-1 rounded-md bg-[#1975B9] text-white hover:bg-[#1663a1] transition">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
