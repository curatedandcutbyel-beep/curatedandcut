
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
    sub: "Flower arranging birthday invitation",
    category: "adult",
    image: "bouquet-bar-birthday-invitation.png"
  },
  {
    name: "The Charm Club",
    sub: "Charm bracelet birthday invitation",
    category: "kids",
    image: "charm-bracelet-birthday-invitation.png"
  },
  {
    name: "Cowgirl Jessie",
    sub: "Cowgirl birthday invitation",
    category: "kids",
    image: "cowgirl-jessie-birthday-invitation.png"
  },
  {
    name: "Talk Thirty to Me",
    sub: "Martini 30th birthday invitation",
    category: "adult",
    image: "dirty-thirty-martini-birthday-invitation.png"
  },
  {
    name: "Jellycat Cake",
    sub: "Cake themed birthday invitation",
    category: "kids",
    image: "jellycat-cake-birthday-invitation.png"
  },
  {
    name: "Masquerade",
    sub: "Masquerade birthday party invitation",
    category: "adult",
    image: "masquerade-birthday-party-invitation.png"
  },
  {
    name: "Matcha Club",
    sub: "Matcha birthday invitation",
    category: "adult",
    image: "matcha-club-birthday-invitation.png"
  },
  {
    name: "Mermaid Birthday",
    sub: "Mermaid birthday invitation",
    category: "kids",
    image: "mermaid-birthday-invitation.png"
  },
  {
    name: "Pasta Club",
    sub: "Pasta themed birthday invitation",
    category: "adult",
    image: "pasta-club-birthday-invitation.png"
  },
  {
    name: "Peppa Pig Birthday",
    sub: "Peppa Pig birthday invitation",
    category: "kids",
    image: "peppa-pig-birthday-invitation.png"
  },
  {
    name: "Peppa Pig Rainbow",
    sub: "Rainbow birthday invitation",
    category: "kids",
    image: "peppa-pig-rainbow-birthday-invitation.png"
  },
  {
    name: "Pink Carnival",
    sub: "Carnival ticket birthday invitation",
    category: "kids",
    image: "pink-carnival-ticket-birthday-invitation.png"
  },
  {
    name: "Scorpio Season — Pink",
    sub: "Pink zodiac birthday invitation",
    category: "adult",
    image: "pink-scorpio-birthday-invitation.png"
  },
  {
    name: "Pink Mandala Birthday",
    sub: "Pink mandala 12th birthday invitation",
    category: "kids",
    image: "pink-tile-12th-birthday-invitation.png"
  },
  {
    name: "The Pottery Club",
    sub: "Pottery painting birthday invitation",
    category: "adult",
    image: "pottery-painting-birthday-invitation.png"
  },
  {
    name: "Retro Palm Tree",
    sub: "Retro palm tree birthday invitation",
    category: "adult",
    image: "retro-palm-tree-birthday-invitation.png"
  },
  {
    name: "Sagittarius Season",
    sub: "Sagittarius birthday invitation",
    category: "adult",
    image: "sagittarius-season-birthday-invitation.png"
  },
  {
    name: "Six Seven",
    sub: "6–7 themed birthday invitation",
    category: "kids",
    image: "six-seven-birthday-invitation.png"
  },
  {
    name: "Sourdough Celebrations",
    sub: "Sourdough birthday invitation",
    category: "adult",
    image: "sourdough-birthday-invitation.png"
  },
  {
    name: "Toy Story Birthday",
    sub: "Toy Story birthday invitation",
    category: "kids",
    image: "toy-story-birthday-invitation.png"
  },
  {
    name: "Trading Card Birthday",
    sub: "Trading card birthday invitation",
    category: "kids",
    image: "trading-card-birthday-invitation.png"
  },
  {
    name: "Two Let the Dogs Out",
    sub: "Dog themed second birthday invitation",
    category: "kids",
    image: "two-let-the-dogs-out-birthday-invitation.png"
  },
  {
    name: "Under the Sea",
    sub: "Under the sea first birthday invitation",
    category: "kids",
    image: "under-the-sea-first-birthday-invitation.png"
  },

  // NEW INVITATIONS

  {
    name: "Ballerina Birthday",
    sub: "Ballet birthday invitation",
    category: "kids",
    image: "ballerina-birthday-invitation.png"
  },
  {
    name: "Scorpio Season — Black & Gold",
    sub: "Black and gold Scorpio birthday invitation",
    category: "adult",
    image: "black-gold-scorpio-birthday-invitation.png"
  },
  {
    name: "Blue Teddy Bear Picnic",
    sub: "Blue teddy bear picnic birthday invitation",
    category: "kids",
    image: "blue-teddy-bear-picnic-birthday-invitation.png"
  },
  {
    name: "Burgundy & Blush 18th",
    sub: "Elegant eighteenth birthday invitation",
    category: "adult",
    image: "burgundy-blush-18th-birthday-invitation.png"
  },
  {
    name: "Cocktail Party",
    sub: "Cocktail birthday party invitation",
    category: "adult",
    image: "cocktail-party-birthday-invitation.png"
  },
  {
    name: "Dinosaur Dig",
    sub: "Dinosaur dig birthday invitation and party favours",
    category: "kids",
    image: "dinosaur-dig-birthday-invitation-party-favors.png"
  },
  {
    name: "Enchanted Fairy Garden",
    sub: "Fairy garden birthday invitation and party favours",
    category: "kids",
    image: "fairy-garden-birthday-invitation-party-favors.png"
  },
  {
    name: "Groovy Seventh Birthday",
    sub: "Retro groovy seventh birthday invitation",
    category: "kids",
    image: "groovy-seventh-birthday-invitation.png"
  },
  {
    name: "K-Pop Birthday Party",
    sub: "K-pop themed birthday invitation",
    category: "kids",
    image: "kpop-birthday-party-invitation.png"
  },
  {
    name: "Martini Birthday",
    sub: "Martini themed birthday invitation",
    category: "adult",
    image: "martini-birthday-invitation.png"
  },
  {
    name: "Pink Cowgirl Rodeo",
    sub: "Pink cowgirl rodeo birthday invitation",
    category: "kids",
    image: "pink-cowgirl-rodeo-birthday-invitation.png"
  },
  {
    name: "Pink Princess Birthday",
    sub: "Princess themed birthday invitation",
    category: "kids",
    image: "pink-princess-birthday-invitation.png"
  },
  {
    name: "Pink Teddy Bear Picnic",
    sub: "Pink teddy bear picnic birthday invitation",
    category: "kids",
    image: "pink-teddy-bear-picnic-birthday-invitation.png"
  },
  {
    name: "Pool Party",
    sub: "Summer pool party birthday invitation",
    category: "kids",
    image: "pool-party-birthday-invitation.png"
  },
  {
    name: "Race Car Birthday",
    sub: "Vintage racing car birthday invitation and party favours",
    category: "kids",
    image: "race-car-birthday-invitation-party-favors.png"
  },
  {
    name: "Sonic Birthday",
    sub: "Sonic themed birthday invitation",
    category: "kids",
    image: "sonic-birthday-invitation.png"
  },
  {
    name: "Spa Party",
    sub: "Pink spa birthday party invitation",
    category: "kids",
    image: "spa-party-birthday-invitation.png"
  },
  {
    name: "Strawberry First Birthday",
    sub: "Strawberry themed first birthday invitation",
    category: "kids",
    image: "strawberry-first-birthday-invitation.png"
  },
  {
    name: "Swan Princess",
    sub: "Elegant swan princess birthday invitation",
    category: "kids",
    image: "swan-princess-birthday-invitation.png"
  },
  {
    name: "Two the Moon",
    sub: "Space themed second birthday invitation",
    category: "kids",
    image: "two-the-moon-birthday-invitation.png"
  },
  {
    name: "Vintage Circus",
    sub: "Vintage circus birthday invitation",
    category: "kids",
    image: "vintage-circus-birthday-invitation.png"
  },
  {
    name: "Wine Tasting Birthday",
    sub: "Wine tasting birthday invitation",
    category: "adult",
    image: "wine-tasting-birthday-invitation.png"
  },
  {
    name: "Winnie the Pooh First Birthday",
    sub: "Winnie the Pooh first birthday invitation",
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
    arrow.textContent = "↗";

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
   INITIAL LOAD
========================================== */

render();
