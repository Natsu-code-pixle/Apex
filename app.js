const Catalog = (() => {
  let cache = null;
  function load() {
    if (cache) return Promise.resolve(cache);
    return fetch('products.json').then(r => r.json()).then(d => { cache = d; return d; });
  }
  function esc(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function cardHTML(it){
    const priceHTML = it.p
      ? `<span class="price"><span class="rs">Rs</span>${esc(it.p)}</span>`
      : `<span class="price ask">Ask for price</span>`;
    return `<article class="pcard" data-name="${esc(it.n.toLowerCase())}" data-cat="${esc(it.catId)}">
      <a class="thumb" href="catalog.html#${it.catId}" aria-label="${esc(it.n)}">
        <img src="images/${it.i}.webp" alt="${esc(it.n)}" loading="lazy" width="360" height="360">
      </a>
      <div class="body">
        <span class="cat">${esc(it.catName || '')}</span>
        <h4>${esc(it.n)}</h4>
        <span class="spec">${esc(it.s || '')}</span>
        <div class="foot">${priceHTML}</div>
      </div>
    </article>`;
  }
  return { load, cardHTML, esc };
})();
