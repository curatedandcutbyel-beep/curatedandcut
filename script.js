
/* ==========================================
   CURATED & CUT BY EL
   COMPLETE WEBSITE SCRIPT
   51 INVITATIONS
========================================== */

const shop = "https://www.etsy.com/shop/curatedandcutbyel";

/* ==========================================
   ETSY LISTING LINKS
========================================== */

const etsyListingIds = {
  "Bouquet Making Birthday Invitation": "4602045139",
  "Charm Bracelet Making Birthday Invitation": "4612924489",
  "Toy Story Cowgirl Jessie Birthday Invitation": "4577651944",
  "Talk Thirty to Me 30th Birthday Invitation": "4612922390",
  "Jellycat Cake Birthday Invitation": "4594450600",
  "Masquerade Birthday Invitation": "4601364495",
  "Matcha Club Birthday Invitation": "4604215120",
  "Mermaid Birthday Invitation": "4592401978",
  "Pasta Club Birthday Invitation": "4605330954",
  "Peppa Pig Birthday Invitation": "4590185990",
  "Rainbow Peppa Pig Birthday Invitation": "4583984895",
  "Pink Carnival Ticket Birthday Invitation": "4544349707",
  "Pink Scorpio Season Birthday Invitation": "4605351443",
  "Pink Mandala Birthday Invitation": "4596347796",
  "Pottery Painting Birthday Invitation": "4612922925",
  "Retro Palm Tree Birthday Invitation": "4595943791",
  "Sagittarius Season Birthday Invitation": "4605362167",
  "Six Seven Birthday Invitation": "4596382362",
  "Sourdough Birthday Invitation": "4604598712",
  "Classic Toy Story Birthday Invitation": "4585499376",
  "Trading Card Birthday Invitation": "4606080182",
  "Two Let the Dogs Out 2nd Birthday Invitation": "4592947935",
  "One-der the Sea First Birthday Invitation": "4543693794",

  "Ballerina Birthday Invitation": "4544262582",
  "Black & Gold Scorpio Birthday Invitation": "4605356439",
  "Blue Teddy Bear Picnic Birthday Invitation": "4543023406",
  "Burgundy & Blush 18th Birthday Invitation": "4551009860",
  "Cocktail Party Birthday Invitation": "4551035091",
  "Dinosaur Dig Birthday Invitation Bundle": "4586893968",
  "Enchanted Fairy Garden Birthday Invitation Bundle": "4586916121",
  "Groovy 7th Birthday Invitation": "4573111003",
  "K-Pop Birthday Invitation": "4586133139",
  "Martini Birthday Invitation": "4540630626",
  "Pink Cowgirl Rodeo Birthday Invitation": "4573760144",
  "Pink Princess Birthday Invitation": "4565265756",
  "Pink Teddy Bear Picnic Birthday Invitation": "4544205193",
  "Pool Party Birthday Invitation": "4582170402",
  "Vintage Race Car Birthday Invitation Bundle": "4587019737",
  "Sonic Birthday Invitation": "4569508761",
  "Pink Spa Party Birthday Invitation": "4582133900",
  "Strawberry First Birthday Invitation": "4592393628",
  "Swan Princess Birthday Invitation": "4547814969",
  "Two the Moon 2nd Birthday Invitation": "4547817571",
  "Vintage Circus Birthday Invitation": "4549387792",
  "Wine Tasting Birthday Invitation Bundle": "4584255804",
  "Winnie the Pooh First Birthday Invitation": "4590192097",
  "Pink Toy Story Birthday Invitation": "4621750154",
  "Little Who Turning Two Birthday Invitation": "4621711130",
  "Pastel Mermaid Birthday Invitation": "4621693188",
  "Pink Toy Story Jessie & Bullseye Birthday Invitation": "4567772359",
  "Blue Toy Story Birthday Invitation": "4566539935"
};

/* ==========================================
   PRODUCT COLLECTION
========================================== */

const products = [

  // ORIGINAL INVITATIONS

  {
    name: "Bouquet Making Birthday Invitation",
    sub: "Editable flower arranging birthday invite for a stylish bouquet-making celebration.",
    category: "adult",
    image: "bouquet-bar-birthday-invitation.png"
  },
  {
    name: "Charm Bracelet Making Birthday Invitation",
    sub: "Charm bracelet making birthday invite for a creative jewellery party.",
    category: "kids",
    image: "charm-bracelet-birthday-invitation.png"
  },
  {
    name: "Toy Story Cowgirl Jessie Birthday Invitation",
    sub: "Toy Story Jessie-inspired cowgirl birthday invitation for a playful western-themed party.",
    category: "kids",
    image: "cowgirl-jessie-birthday-invitation.png"
  },
  {
    name: "Talk Thirty to Me 30th Birthday Invitation",
    sub: "Martini-inspired 30th birthday invite for a chic milestone celebration.",
    category: "adult",
    image: "dirty-thirty-martini-birthday-invitation.png"
  },
  {
    name: "Jellycat Cake Birthday Invitation",
    sub: "Cute cake-themed birthday invite for a playful kids celebration.",
    category: "kids",
    image: "jellycat-cake-birthday-invitation.png"
  },
  {
    name: "Masquerade Birthday Invitation",
    sub: "Elegant masquerade birthday invite for a glamorous masked party.",
    category: "adult",
    image: "masquerade-birthday-party-invitation.png"
  },
  {
    name: "Matcha Club Birthday Invitation",
    sub: "Modern matcha-themed birthday invite for a cute café-style celebration.",
    category: "adult",
    image: "matcha-club-birthday-invitation.png"
  },
  {
    name: "Mermaid Birthday Invitation",
    sub: "Whimsical mermaid birthday invite for an under-the-sea kids party.",
    category: "kids",
    image: "mermaid-birthday-invitation.png"
  },
  {
    name: "Pasta Club Birthday Invitation",
    sub: "Italian pasta-themed birthday invite for a fun dinner celebration.",
    category: "adult",
    image: "pasta-club-birthday-invitation.png"
  },
  {
    name: "Peppa Pig Birthday Invitation",
    sub: "Colourful Peppa Pig birthday invite for a cheerful kids party.",
    category: "kids",
    image: "peppa-pig-birthday-invitation.png"
  },
  {
    name: "Rainbow Peppa Pig Birthday Invitation",
    sub: "Rainbow Peppa Pig birthday invite for a bright, playful celebration.",
    category: "kids",
    image: "peppa-pig-rainbow-birthday-invitation.png"
  },
  {
    name: "Pink Carnival Ticket Birthday Invitation",
    sub: "Pink carnival ticket birthday invite for a fun fairground-themed party.",
    category: "kids",
    image: "pink-carnival-ticket-birthday-invitation.png"
  },
  {
    name: "Pink Scorpio Season Birthday Invitation",
    sub: "Pink Scorpio zodiac birthday invite for a star-sign celebration.",
    category: "adult",
    image: "pink-scorpio-birthday-invitation.png"
  },
  {
    name: "Pink Mandala Birthday Invitation",
    sub: "Pink mandala birthday invitation with an elegant tile-inspired design for any age.",
    category: "kids",
    image: "pink-tile-12th-birthday-invitation.png"
  },
  {
    name: "Pottery Painting Birthday Invitation",
    sub: "Pottery painting birthday invite for a creative paint-and-sip celebration.",
    category: "adult",
    image: "pottery-painting-birthday-invitation.png"
  },
  {
    name: "Retro Palm Tree Birthday Invitation",
    sub: "Retro palm tree birthday invite for a laid-back summer celebration.",
    category: "adult",
    image: "retro-palm-tree-birthday-invitation.png"
  },
  {
    name: "Sagittarius Season Birthday Invitation",
    sub: "Sagittarius zodiac birthday invite for a celestial birthday celebration.",
    category: "adult",
    image: "sagittarius-season-birthday-invitation.png"
  },
  {
    name: "Six Seven Birthday Invitation",
    sub: "Playful six-seven birthday invite for a trend-inspired kids party.",
    category: "kids",
    image: "six-seven-birthday-invitation.png"
  },
  {
    name: "Sourdough Birthday Invitation",
    sub: "Sourdough-themed birthday invite for a cosy baking-inspired celebration.",
    category: "adult",
    image: "sourdough-birthday-invitation.png"
  },
  {
    name: "Classic Toy Story Birthday Invitation",
    sub: "Toy Story birthday invite for a playful, adventure-filled kids party.",
    category: "kids",
    image: "toy-story-birthday-invitation.png"
  },
  {
    name: "Trading Card Birthday Invitation",
    sub: "Trading card-inspired birthday invite for a fun collector-themed party.",
    category: "kids",
    image: "trading-card-birthday-invitation.png"
  },
  {
    name: "Two Let the Dogs Out 2nd Birthday Invitation",
    sub: "Dog-themed 2nd birthday invite for a playful puppy party.",
    category: "kids",
    image: "two-let-the-dogs-out-birthday-invitation.png"
  },
  {
    name: "One-der the Sea First Birthday Invitation",
    sub: "Under-the-sea first birthday invite for a sweet ocean-themed celebration.",
    category: "kids",
    image: "under-the-sea-first-birthday-invitation.png"
  },

  // NEW INVITATIONS

  {
    name: "Ballerina Birthday Invitation",
    sub: "Ballerina birthday invite for a sweet, ballet-inspired kids party.",
    category: "kids",
    image: "ballerina-birthday-invitation.png"
  },
  {
    name: "Black & Gold Scorpio Birthday Invitation",
    sub: "Black and gold Scorpio birthday invite for a bold zodiac celebration.",
    category: "adult",
    image: "black-gold-scorpio-birthday-invitation.png"
  },
  {
    name: "Blue Teddy Bear Picnic Birthday Invitation",
    sub: "Blue teddy bear picnic birthday invite for a sweet little-one celebration.",
    category: "kids",
    image: "blue-teddy-bear-picnic-birthday-invitation.png"
  },
  {
    name: "Burgundy & Blush 18th Birthday Invitation",
    sub: "Burgundy and blush 18th birthday invite for an elegant milestone party.",
    category: "adult",
    image: "burgundy-blush-18th-birthday-invitation.png"
  },
  {
    name: "Cocktail Party Birthday Invitation",
    sub: "Stylish cocktail birthday invite for a drinks-and-celebration evening.",
    category: "adult",
    image: "cocktail-party-birthday-invitation.png"
  },
  {
    name: "Dinosaur Dig Birthday Invitation Bundle",
    sub: "Dinosaur dig birthday bundle with matching invitation and thank-you tag.",
    category: "kids",
    image: "dinosaur-dig-birthday-invitation-party-favors.png"
  },
  {
    name: "Enchanted Fairy Garden Birthday Invitation Bundle",
    sub: "Fairy garden birthday bundle with matching invitation and thank-you tag.",
    category: "kids",
    image: "fairy-garden-birthday-invitation-party-favors.png"
  },
  {
    name: "Groovy 7th Birthday Invitation",
    sub: "Retro groovy 7th birthday invite for a colourful kids celebration.",
    category: "kids",
    image: "groovy-seventh-birthday-invitation.png"
  },
  {
    name: "K-Pop Birthday Invitation",
    sub: "K-pop birthday invite for a music-loving kids party.",
    category: "kids",
    image: "kpop-birthday-party-invitation.png"
  },
  {
    name: "Martini Birthday Invitation",
    sub: "Chic martini birthday invite for a stylish cocktail-themed celebration.",
    category: "adult",
    image: "martini-birthday-invitation.png"
  },
  {
    name: "Pink Cowgirl Rodeo Birthday Invitation",
    sub: "Pink cowgirl rodeo birthday invite for a western-inspired kids party.",
    category: "kids",
    image: "pink-cowgirl-rodeo-birthday-invitation.png"
  },
  {
    name: "Pink Princess Birthday Invitation",
    sub: "Pink princess birthday invite for a magical royal-themed celebration.",
    category: "kids",
    image: "pink-princess-birthday-invitation.png"
  },
  {
    name: "Pink Teddy Bear Picnic Birthday Invitation",
    sub: "Pink teddy bear picnic birthday invite for a sweet kids celebration.",
    category: "kids",
    image: "pink-teddy-bear-picnic-birthday-invitation.png"
  },
  {
    name: "Pool Party Birthday Invitation",
    sub: "Summer pool party birthday invite for a splash-filled celebration.",
    category: "kids",
    image: "pool-party-birthday-invitation.png"
  },
  {
    name: "Vintage Race Car Birthday Invitation Bundle",
    sub: "Vintage race car birthday bundle with matching invitation and thank-you tag.",
    category: "kids",
    image: "race-car-birthday-invitation-party-favors.png"
  },
  {
    name: "Sonic Birthday Invitation",
    sub: "Sonic-inspired birthday invite for a speedy, action-packed kids party.",
    category: "kids",
    image: "sonic-birthday-invitation.png"
  },
  {
    name: "Pink Spa Party Birthday Invitation",
    sub: "Pink spa birthday invite for a pamper-party celebration.",
    category: "kids",
    image: "spa-party-birthday-invitation.png"
  },
  {
    name: "Strawberry First Birthday Invitation",
    sub: "Sweet strawberry first birthday invite for a berry-themed celebration.",
    category: "kids",
    image: "strawberry-first-birthday-invitation.png"
  },
  {
    name: "Swan Princess Birthday Invitation",
    sub: "Elegant swan princess birthday invite for a graceful, fairytale-inspired party.",
    category: "kids",
    image: "swan-princess-birthday-invitation.png"
  },
  {
    name: "Two the Moon 2nd Birthday Invitation",
    sub: "Space-themed 2nd birthday invite for a little astronaut celebration.",
    category: "kids",
    image: "two-the-moon-birthday-invitation.png"
  },
  {
    name: "Vintage Circus Birthday Invitation",
    sub: "Vintage circus birthday invite for a nostalgic carnival-inspired party.",
    category: "kids",
    image: "vintage-circus-birthday-invitation.png"
  },
  {
    name: "Wine Tasting Birthday Invitation Bundle",
    sub: "Wine tasting birthday bundle with matching invitation and wine tasting scorecard.",
    category: "adult",
    image: "wine-tasting-birthday-invitation.png"
  },
  {
    name: "Winnie the Pooh First Birthday Invitation",
    sub: "Winnie the Pooh first birthday invite for a sweet storybook celebration.",
    category: "kids",
    image: "winnie-the-pooh-first-birthday-invitation.png"
  },
  {
    name: "Pink Toy Story Birthday Invitation",
    sub: "Pink western Toy Story-inspired birthday invitation featuring cowgirl and cowboy characters for any age.",
    category: "kids",
    image: "pink-toy-story-5th-birthday-invitation.png"
  },
  {
    name: "Little Who Turning Two Birthday Invitation",
    sub: "Pink Grinchmas-inspired second birthday invitation for a festive Little Who celebration.",
    category: "kids",
    image: "pink-grinchmas-2nd-birthday-invitation.png"
  },
  {
    name: "Pastel Mermaid Birthday Invitation",
    sub: "Pastel watercolour mermaid birthday invitation with pink, lilac and under-the-sea details.",
    category: "kids",
    image: "pastel-mermaid-birthday-invitation.png"
  },
  {
    name: "Pink Toy Story Jessie & Bullseye Birthday Invitation",
    sub: "Pink Toy Story birthday invitation featuring Jessie and Bullseye, with a cowgirl party theme and editable Canva template.",
    category: "kids",
    image: "pink-jessie-bullseye-birthday-invitation.png"
  },
  {
    name: "Blue Toy Story Birthday Invitation",
    sub: "Blue Toy Story birthday invitation for a boys' party, supplied as an editable Canva digital template.",
    category: "kids",
    image: "blue-boys-toystory-birthday-invitation.png"
  }

];

/* ==========================================
   PARTY BUNDLES
========================================== */

const bundleNames = [
  "Wine Tasting Birthday Invitation Bundle",
  "Vintage Race Car Birthday Invitation Bundle",
  "Dinosaur Dig Birthday Invitation Bundle",
  "Enchanted Fairy Garden Birthday Invitation Bundle"
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

// Preserve the shop's direct save-and-share links for the new listings.
const newInvitationShareLinks = {
  "Pink Toy Story Birthday Invitation": "https://curatedandcutbyel.etsy.com/au/listing/4621750154/pink-toy-story-birthday-invitation",
  "Little Who Turning Two Birthday Invitation": "https://curatedandcutbyel.etsy.com/au/listing/4621711130/little-who-turning-two-birthday",
  "Pastel Mermaid Birthday Invitation": "https://curatedandcutbyel.etsy.com/au/listing/4621693188/mermaid-birthday-invitation-watercolor"
};

products.forEach(product => {
  if (newInvitationShareLinks[product.name]) product.url = newInvitationShareLinks[product.name];
});

// Use direct Etsy share URLs for these new birthday invitations.
const additionalInvitationShareLinks = {
  "Pink Toy Story Jessie & Bullseye Birthday Invitation": "https://curatedandcutbyel.etsy.com/au/listing/4567772359/toy-story-birthday-invitation-pink",
  "Blue Toy Story Birthday Invitation": "https://curatedandcutbyel.etsy.com/au/listing/4566539935/toy-story-3rd-birthday-invitation"
};
products.forEach(product => {
  if (additionalInvitationShareLinks[product.name]) {
    product.url = additionalInvitationShareLinks[product.name];
  }
});

// Correct direct share link for the One-der the Sea invitation.
products.forEach(product => {
  if (product.name === "One-der the Sea First Birthday Invitation") product.url = "https://curatedandcutbyel.etsy.com/au/listing/4543693794/one-der-the-sea-birthday-invitation";
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
    if (etsyListingIds[product.name] === "4592947935") {
      const bundleLink = document.createElement("a");
      bundleLink.href = "/#bundle-save";
      bundleLink.className = "product-bundle-note";
      bundleLink.textContent = "Matching party set · Buy all 3 & save 30% ↗";
      article.append(bundleLink);
    }
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
   SHOP BY COLLECTION LINKS
========================================== */

document.querySelectorAll(".collection-shortcuts a[data-collection]").forEach(link => {
  link.addEventListener("click", () => {
    const collection = link.dataset.collection;
    if (collection === "birthdays" || collection === "bundles") {
      const filter = collection === "bundles" ? "bundles" : "all";
      document.querySelector(`.filter[data-filter="${filter}"]`)?.click();
    }
  });
});

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
  },
  {
    name: "Toy Story Printable Birthday Party Hats",
    sub: "Printable cowboy and cowgirl birthday party hats in three gingham colours. PDF digital download.",
    image: "toy-story-printable-birthday-party-hats.png",
    url: "https://curatedandcutbyel.etsy.com/au/listing/4622909773/toy-story-printable-party-hats-cowboy",
    listingId: "4622909773"
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
  },
  {
    name: "Christmas Table Stationery Bundle",
    sub: "Printable Christmas place cards and food labels with festive greenery and red ribbon details.",
    image: "christmas-place-cards-food-labels-printable-mockup.png",
    url: "https://curatedandcutbyel.etsy.com/au/listing/4619042556/christmas-table-stationery-bundle",
    listingId: "4619042556"
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
