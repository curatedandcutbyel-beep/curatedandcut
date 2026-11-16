
/* ==========================================
   CURATED & CUT BY EL
   COMPLETE WEBSITE SCRIPT
   46 INVITATIONS
========================================== */

const shop = "https://www.etsy.com/shop/curatedandcutbyel";

/* ==========================================
   ETSY LISTING LINKS
========================================== */

const etsyListingIds = {
  "Bouquet Bar": "4602045139",
  "The Charm Club": "4612924489",
  "Cowgirl Jessie": "4577651944",
  "Talk Thirty to Me": "4612922390",
  "Jellycat Cake": "4594450600",
  "Masquerade": "4601364495",
  "Matcha Club": "4604215120",
  "Mermaid Birthday": "4592401978",
  "Pasta Club": "4605330954",
  "Peppa Pig Birthday": "4590185990",
  "Peppa Pig Rainbow": "4583984895",
  "Pink Carnival": "4544349707",
  "Scorpio Season — Pink": "4605351443",
  "Pink Mandala Birthday": "4596347796",
  "The Pottery Club": "4612922925",
  "Retro Palm Tree": "4595943791",
  "Sagittarius Season": "4605362167",
  "Six Seven": "4596382362",
  "Sourdough Celebrations": "4604598712",
  "Toy Story Birthday": "4585499376",
  "Trading Card Birthday": "4606080182",
  "Two Let the Dogs Out": "4592947935",
  "Under the Sea": "4543695427",

  "Ballerina Birthday": "4544262582",
  "Scorpio Season — Black & Gold": "4605356439",
  "Blue Teddy Bear Picnic": "4543023406",
  "Burgundy & Blush 18th": "4551009860",
  "Cocktail Party": "4551035091",
  "Dinosaur Dig": "4586893968",
  "Enchanted Fairy Garden": "4586916121",
  "Groovy Seventh Birthday": "4573111003",
  "K-Pop Birthday Party": "4586133139",
  "Martini Birthday": "4540630626",
  "Pink Cowgirl Rodeo": "4573760144",
  "Pink Princess Birthday": "4565265756",
  "Pink Teddy Bear Picnic": "4544205193",
  "Pool Party": "4582170402",
  "Race Car Birthday": "4587019737",
  "Sonic Birthday": "4569508761",
  "Spa Party": "4582133900",
  "Strawberry First Birthday": "4592393628",
  "Swan Princess": "4547814969",
  "Two the Moon": "4547817571",
  "Vintage Circus": "4549387792",
  "Wine Tasting Birthday": "4584255804",
  "Winnie the Pooh First Birthday": "4590192097"
};

/* ==========================================
   PRODUCT COLLECTION
========================================== */

const products = [

  // ORIGINAL INVITATIONS

  {
    name: "Bouquet Bar",
    sub: "Editable flower arranging birthday invite for a stylish bouquet-making celebration.",
    category: "adult",
    image: "bouquet-bar-birthday-invitation.png"
  },
  {
    name: "The Charm Club",
    sub: "Charm bracelet making birthday invite for a creative jewellery party.",
    category: "kids",
    image: "charm-bracelet-birthday-invitation.png"
  },
  {
    name: "Cowgirl Jessie",
    sub: "Playful cowgirl birthday invite for a western-inspired kids party.",
    category: "kids",
    image: "cowgirl-jessie-birthday-invitation.png"
  },
  {
    name: "Talk Thirty to Me",
    sub: "Martini-inspired 30th birthday invite for a chic milestone celebration.",
    category: "adult",
    image: "dirty-thirty-martini-birthday-invitation.png"
  },
  {
    name: "Jellycat Cake",
    sub: "Cute cake-themed birthday invite for a playful kids celebration.",
    category: "kids",
    image: "jellycat-cake-birthday-invitation.png"
  },
  {
    name: "Masquerade",
    sub: "Elegant masquerade birthday invite for a glamorous masked party.",
    category: "adult",
    image: "masquerade-birthday-party-invitation.png"
  },
  {
    name: "Matcha Club",
    sub: "Modern matcha-themed birthday invite for a cute café-style celebration.",
    category: "adult",
    image: "matcha-club-birthday-invitation.png"
  },
  {
    name: "Mermaid Birthday",
    sub: "Whimsical mermaid birthday invite for an under-the-sea kids party.",
    category: "kids",
    image: "mermaid-birthday-invitation.png"
  },
  {
    name: "Pasta Club",
    sub: "Italian pasta-themed birthday invite for a fun dinner celebration.",
    category: "adult",
    image: "pasta-club-birthday-invitation.png"
  },
  {
    name: "Peppa Pig Birthday",
    sub: "Colourful Peppa Pig birthday invite for a cheerful kids party.",
    category: "kids",
    image: "peppa-pig-birthday-invitation.png"
  },
  {
    name: "Peppa Pig Rainbow",
    sub: "Rainbow Peppa Pig birthday invite for a bright, playful celebration.",
    category: "kids",
    image: "peppa-pig-rainbow-birthday-invitation.png"
  },
  {
    name: "Pink Carnival",
    sub: "Pink carnival ticket birthday invite for a fun fairground-themed party.",
    category: "kids",
    image: "pink-carnival-ticket-birthday-invitation.png"
  },
  {
    name: "Scorpio Season — Pink",
    sub: "Pink Scorpio zodiac birthday invite for a star-sign celebration.",
    category: "adult",
    image: "pink-scorpio-birthday-invitation.png"
  },
  {
    name: "Pink Mandala Birthday",
    sub: "Pink mandala birthday invitation with an elegant tile-inspired design for any age.",
    category: "kids",
    image: "pink-tile-12th-birthday-invitation.png"
  },
  {
    name: "The Pottery Club",
    sub: "Pottery painting birthday invite for a creative paint-and-sip celebration.",
    category: "adult",
    image: "pottery-painting-birthday-invitation.png"
  },
  {
    name: "Retro Palm Tree",
    sub: "Retro palm tree birthday invite for a laid-back summer celebration.",
    category: "adult",
    image: "retro-palm-tree-birthday-invitation.png"
  },
  {
    name: "Sagittarius Season",
    sub: "Sagittarius zodiac birthday invite for a celestial birthday celebration.",
    category: "adult",
    image: "sagittarius-season-birthday-invitation.png"
  },
  {
    name: "Six Seven",
    sub: "Playful six-seven birthday invite for a trend-inspired kids party.",
    category: "kids",
    image: "six-seven-birthday-invitation.png"
  },
  {
    name: "Sourdough Celebrations",
    sub: "Sourdough-themed birthday invite for a cosy baking-inspired celebration.",
    category: "adult",
    image: "sourdough-birthday-invitation.png"
  },
  {
    name: "Toy Story Birthday",
    sub: "Toy Story birthday invite for a playful, adventure-filled kids party.",
    category: "kids",
    image: "toy-story-birthday-invitation.png"
  },
  {
    name: "Trading Card Birthday",
    sub: "Trading card-inspired birthday invite for a fun collector-themed party.",
    category: "kids",
    image: "trading-card-birthday-invitation.png"
  },
  {
    name: "Two Let the Dogs Out",
    sub: "Dog-themed 2nd birthday invite for a playful puppy party.",
    category: "kids",
    image: "two-let-the-dogs-out-birthday-invitation.png"
  },
  {
    name: "Under the Sea",
    sub: "Under-the-sea first birthday invite for a sweet ocean-themed celebration.",
    category: "kids",
    image: "under-the-sea-first-birthday-invitation.png"
  },

  // NEW INVITATIONS

  {
    name: "Ballerina Birthday",
    sub: "Ballerina birthday invite for a sweet, ballet-inspired kids party.",
    category: "kids",
    image: "ballerina-birthday-invitation.png"
  },
  {
    name: "Scorpio Season — Black & Gold",
    sub: "Black and gold Scorpio birthday invite for a bold zodiac celebration.",
    category: "adult",
    image: "black-gold-scorpio-birthday-invitation.png"
  },
  {
    name: "Blue Teddy Bear Picnic",
    sub: "Blue teddy bear picnic birthday invite for a sweet little-one celebration.",
    category: "kids",
    image: "blue-teddy-bear-picnic-birthday-invitation.png"
  },
  {
    name: "Burgundy & Blush 18th",
    sub: "Burgundy and blush 18th birthday invite for an elegant milestone party.",
    category: "adult",
    image: "burgundy-blush-18th-birthday-invitation.png"
  },
  {
    name: "Cocktail Party",
    sub: "Stylish cocktail birthday invite for a drinks-and-celebration evening.",
    category: "adult",
    image: "cocktail-party-birthday-invitation.png"
  },
  {
    name: "Dinosaur Dig",
    sub: "Dinosaur dig birthday bundle with matching invitation and thank-you tag.",
    category: "kids",
    image: "dinosaur-dig-birthday-invitation-party-favors.png"
  },
  {
    name: "Enchanted Fairy Garden",
    sub: "Fairy garden birthday bundle with matching invitation and thank-you tag.",
    category: "kids",
    image: "fairy-garden-birthday-invitation-party-favors.png"
  },
  {
    name: "Groovy Seventh Birthday",
    sub: "Retro groovy 7th birthday invite for a colourful kids celebration.",
    category: "kids",
    image: "groovy-seventh-birthday-invitation.png"
  },
  {
    name: "K-Pop Birthday Party",
    sub: "K-pop birthday invite for a music-loving kids party.",
    category: "kids",
    image: "kpop-birthday-party-invitation.png"
  },
  {
    name: "Martini Birthday",
    sub: "Chic martini birthday invite for a stylish cocktail-themed celebration.",
    category: "adult",
    image: "martini-birthday-invitation.png"
  },
  {
    name: "Pink Cowgirl Rodeo",
    sub: "Pink cowgirl rodeo birthday invite for a western-inspired kids party.",
    category: "kids",
    image: "pink-cowgirl-rodeo-birthday-invitation.png"
  },
  {
    name: "Pink Princess Birthday",
    sub: "Pink princess birthday invite for a magical royal-themed celebration.",
    category: "kids",
    image: "pink-princess-birthday-invitation.png"
  },
  {
    name: "Pink Teddy Bear Picnic",
    sub: "Pink teddy bear picnic birthday invite for a sweet kids celebration.",
    category: "kids",
    image: "pink-teddy-bear-picnic-birthday-invitation.png"
  },
  {
    name: "Pool Party",
    sub: "Summer pool party birthday invite for a splash-filled celebration.",
    category: "kids",
    image: "pool-party-birthday-invitation.png"
  },
  {
    name: "Race Car Birthday",
    sub: "Vintage race car birthday bundle with matching invitation and thank-you tag.",
    category: "kids",
    image: "race-car-birthday-invitation-party-favors.png"
  },
  {
    name: "Sonic Birthday",
    sub: "Sonic-inspired birthday invite for a speedy, action-packed kids party.",
    category: "kids",
    image: "sonic-birthday-invitation.png"
  },
  {
    name: "Spa Party",
    sub: "Pink spa birthday invite for a pamper-party celebration.",
    category: "kids",
    image: "spa-party-birthday-invitation.png"
  },
  {
    name: "Strawberry First Birthday",
    sub: "Sweet strawberry first birthday invite for a berry-themed celebration.",
    category: "kids",
    image: "strawberry-first-birthday-invitation.png"
  },
  {
    name: "Swan Princess",
    sub: "Elegant swan princess birthday invite for a graceful, fairytale-inspired party.",
    category: "kids",
    image: "swan-princess-birthday-invitation.png"
  },
  {
    name: "Two the Moon",
    sub: "Space-themed 2nd birthday invite for a little astronaut celebration.",
    category: "kids",
    image: "two-the-moon-birthday-invitation.png"
  },
  {
    name: "Vintage Circus",
    sub: "Vintage circus birthday invite for a nostalgic carnival-inspired party.",
    category: "kids",
    image: "vintage-circus-birthday-invitation.png"
  },
  {
    name: "Wine Tasting Birthday",
    sub: "Wine tasting birthday bundle with matching invitation and wine tasting scorecard.",
    category: "adult",
    image: "wine-tasting-birthday-invitation.png"
  },
  {
    name: "Winnie the Pooh First Birthday",
    sub: "Winnie the Pooh first birthday invite for a sweet storybook celebration.",
    category: "kids",
    image: "winnie-the-pooh-first-birthday-invitation.png"
  }

];

/* ==========================================
   PARTY BUNDLES
========================================== */

const bundleNames = [
  "Wine Tasting Birthday",
  "Race Car Birthday",
  "Dinosaur Dig",
  "Enchanted Fairy Garden"
];

products.forEach(product => {
  product.bundle = bundleNames.includes(product.name);
});

/* ==========================================
   APPLY INDIVIDUAL ETSY LINKS
========================================== */

products.forEach(product => {
  const listingId = etsyListingIds[product.name];

  product.url = listingId
    ? `https://www.etsy.com/au/listing/${listingId}`
    : shop;
});

/* ==========================================
   GALLERY ELEMENTS
========================================== */

const grid = document.getElementById("products");
const search = document.getElementById("product-search");
const count = document.getElementById("product-count");

let activeFilter = "all";

/* ==========================================
   RENDER PRODUCTS
========================================== */

function render() {

  if (!grid) return;

  const query = (search?.value || "")
    .trim()
    .toLowerCase();

  const visible = products.filter(product => {

   const matchesCategory =
  activeFilter === "all" ||
  (activeFilter === "bundles" && product.bundle === true) ||
  product.category === activeFilter;

    const matchesSearch =
      `${product.name} ${product.sub}`
        .toLowerCase()
        .includes(query);

    return matchesCategory && matchesSearch;
  });

  if (count) {
    count.textContent =
      `${visible.length} design${visible.length === 1 ? "" : "s"}`;
  }

  grid.replaceChildren();

  if (!visible.length) {

    const message = document.createElement("p");
    message.className = "empty-results";
    message.textContent =
      "No invitations found. Try another search or category.";

    grid.append(message);
    return;
  }

  visible.forEach(product => {

    const article = document.createElement("article");
    article.className = "product";

    const link = document.createElement("a");

    link.href = product.url || shop;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    // Track individual invitation clicks in Google Analytics
    link.addEventListener("click", () => {
      if (typeof window.gtag !== "function") return;

      window.gtag("event", "select_invitation", {
        invitation_name: product.name,
        invitation_category: product.category,
        etsy_listing_id: etsyListingIds[product.name] || "",
        link_url: product.url || shop,
        source_section: "invitation_gallery"
      });
    });

    const hasDirectLink =
      Boolean(product.url && product.url !== shop);

    link.setAttribute(
      "aria-label",
      `${hasDirectLink ? "View" : "Browse Etsy for"} ${product.name}`
    );

    // PRODUCT IMAGE

    const imageBox = document.createElement("div");
    imageBox.className = "product-image";

    const img = document.createElement("img");

    img.src = `assets/${product.image}`;
    img.alt = product.sub;
    img.loading = "lazy";

    const missing = document.createElement("span");
    missing.className = "product-placeholder";
    missing.textContent = "Image unavailable";

    img.onerror = () => {
      img.hidden = true;
      imageBox.classList.add("no-image");
    };

    imageBox.append(img, missing);

    // PRODUCT DETAILS

    const details = document.createElement("div");
    details.className = "product-details";

    const info = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = product.name;

    const subtitle = document.createElement("p");
    subtitle.textContent = product.sub;

    info.append(title, subtitle);

    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.className = "product-etsy-cta";
    arrow.textContent = "View on Etsy ↗";

    details.append(info, arrow);

    link.append(imageBox, details);
    article.append(link);
    grid.append(article);

  });
}

/* ==========================================
   SEARCH
========================================== */

if (search) {
  search.addEventListener("input", render);
}

/* ==========================================
   CATEGORY FILTERS
========================================== */

document.querySelectorAll(".filter").forEach(button => {

  button.addEventListener("click", () => {

    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    activeFilter = button.dataset.filter || "all";

    render();
  });

});

/* ==========================================
   MOBILE NAVIGATION
========================================== */

const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");

if (toggle && nav) {

  toggle.addEventListener("click", () => {

    const open = nav.classList.toggle("open");

    toggle.setAttribute(
      "aria-expanded",
      String(open)
    );
  });

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );
    });

  });
}

/* ==========================================
   FOOTER YEAR
========================================== */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}



/* ==========================================
   PARTY GAMES COLLECTION
   Add future printable games here.
========================================== */

const partyGamesProducts = [
  {
    name: "Birthday Pub Golf Game Kit",
    sub: "Printable birthday pub golf game kit with scorecards, rules and penalty sheets.",
    image: "birthday-pub-golf-printable-game-bundle.png",
    url: "https://curatedandcutbyel.etsy.com/au/listing/4598986783/pub-golf-scorecard-party-game-kit",
    listingId: "4598986783"
  },
  {
    name: "Pink Birthday Pub Golf Game Kit",
    sub: "Pink pub golf birthday game kit with printable scorecards, rules and penalty sheets.",
    image: "pink-birthday-pub-golf-printable-game-bundle.png",
    url: "https://curatedandcutbyel.etsy.com/au/listing/4598445179/pub-golf-scorecard-party-kit-editable",
    listingId: "4598445179"
  }
];

function renderPartyGames() {
  const gamesGrid = document.getElementById("party-games-products");
  if (!gamesGrid) return;
  gamesGrid.replaceChildren();

  partyGamesProducts.forEach(product => {
    const article = document.createElement("article");
    article.className = "product";

    const link = document.createElement("a");
    link.href = product.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `View ${product.name} on Etsy`);

    link.addEventListener("click", () => {
      if (typeof window.gtag !== "function") return;
      window.gtag("event", "select_party_game", {
        product_name: product.name,
        etsy_listing_id: product.listingId,
        link_url: product.url,
        source_section: "party_games_collection"
      });
    });

    const imageBox = document.createElement("div");
    imageBox.className = "product-image";
    const img = document.createElement("img");
    img.src = `assets/${product.image}`;
    img.alt = product.sub;
    img.loading = "lazy";
    const missing = document.createElement("span");
    missing.className = "product-placeholder";
    missing.textContent = "Image unavailable";
    img.onerror = () => {
      img.hidden = true;
      imageBox.classList.add("no-image");
    };
    imageBox.append(img, missing);

    const details = document.createElement("div");
    details.className = "product-details";
    const info = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = product.name;
    const subtitle = document.createElement("p");
    subtitle.textContent = product.sub;
    info.append(title, subtitle);

    const cta = document.createElement("span");
    cta.className = "product-etsy-cta";
    cta.setAttribute("aria-hidden", "true");
    cta.textContent = "View on Etsy ↗";
    details.append(info, cta);
    link.append(imageBox, details);
    article.append(link);
    gamesGrid.append(article);
  });
}

renderPartyGames();

/* ==========================================
   CHRISTMAS COLLECTION
   Add future Christmas products here.
========================================== */

const christmasProducts = [
  {
    name: "Christmas Elf Kit — 24 Days",
    sub: "24-day Christmas elf printable kit with playful North Pole notes, signs and activities.",
    image: "elf-on-the-shelf-christmas-printable-bundle.png",
    url: "https://curatedandcutbyel.etsy.com/au/listing/4616048322/christmas-elf-kit-24-days-printable-elf",
    listingId: "4616048322"
  }
];

function renderChristmasProducts() {
  const christmasGrid = document.getElementById("christmas-products");
  if (!christmasGrid) return;

  christmasGrid.replaceChildren();

  christmasProducts.forEach(product => {
    const article = document.createElement("article");
    article.className = "product";

    const link = document.createElement("a");
    link.href = product.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `View ${product.name} on Etsy`);

    link.addEventListener("click", () => {
      if (typeof window.gtag !== "function") return;
      window.gtag("event", "select_christmas_product", {
        product_name: product.name,
        etsy_listing_id: product.listingId,
        link_url: product.url,
        source_section: "christmas_collection"
      });
    });

    const imageBox = document.createElement("div");
    imageBox.className = "product-image";

    const img = document.createElement("img");
    img.src = `assets/${product.image}`;
    img.alt = product.sub;
    img.loading = "lazy";

    const missing = document.createElement("span");
    missing.className = "product-placeholder";
    missing.textContent = "Image unavailable";
    img.onerror = () => {
      img.hidden = true;
      imageBox.classList.add("no-image");
    };

    imageBox.append(img, missing);

    const details = document.createElement("div");
    details.className = "product-details";

    const info = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = product.name;
    const subtitle = document.createElement("p");
    subtitle.textContent = product.sub;
    info.append(title, subtitle);

    const cta = document.createElement("span");
    cta.className = "product-etsy-cta";
    cta.setAttribute("aria-hidden", "true");
    cta.textContent = "View on Etsy ↗";
    details.append(info, cta);
    link.append(imageBox, details);
    article.append(link);
    christmasGrid.append(article);
  });
}

renderChristmasProducts();

/* ==========================================
   INITIAL LOAD
========================================== */

render();
