(() => {
  const parameters = new URLSearchParams(location.search);
  const variant = parameters.get("variant") === "B" ? "B" : "A";
  window.__studioVariant = variant;
  window.__pelletPlan = { x: 450, y: 115.5, width: 38.4, depth: 35.4, height: 0.779 };
  document.documentElement.dataset.variant = variant;
  if (variant === "B") {
    document.querySelectorAll(".legend-item").forEach(item => {
      if (item.textContent.includes("Haard DRU")) item.lastChild.textContent = " JAcobus 6 pelletkachel";
    });
    document.querySelectorAll("tr").forEach(row => {
      const heading = row.querySelector("th");
      if (heading?.textContent === "F01") {
        row.innerHTML = '<th scope="row">P01</th><td>Bereikbare pelletvoeding op NNO-wand links van kachel, positie voorlopig.</td><td>Hoogte en warmteveilig kabeltraject door installateur; geen gasleiding in B.</td><td>Elektrische aansluiting, rookgasafvoer, buitenlucht en onderhoudstoegang volgens JAcobus-handleiding.</td>';
      }
      if (heading?.textContent.includes("DRU-haard")) {
        row.innerHTML = '<th scope="row">1. JAcobus pellet</th><td>JAcobus6:51,2x47,2x77,9cm; retailer3,0-6,1kW en80mm rookgas. Getekende30cm NNO-setback en79cm tot bureau zijn GEEN goedgekeurde brandafstanden. Laat installateur afstanden tot houtskelet/EKET/blad/EPS, vloerbescherming, rookgastraject/dakdoorvoer, externe lucht, stroom, geluid, pelletopslag en onderhoud vastleggen. Geen gasleiding. Warmtelast/minimum3kW controleren om oververhitting te vermijden.</td><td>Pelletinstallateur / architect</td>';
      }
    });
    const review = document.getElementById("service-plan");
    if (review) {
      const note = document.createElement("p");
      note.innerHTML = 'Variant B: <a href="https://www.haardenexpert.nl/jacobus-6-pelletkachel.html">JAcobus 6 Pelletkachel</a> links van bureau aan NNO-zijde, front naar binnen. Centrale DRU/Promafour vervalt; open lounge/kantoor blijft, geen fysieke scheidingswand. Kamer-/deur-/douche-/bureaumaten behouden. Plaatsing en rookgas zijn een ruimteproef, geen installatiegoedkeuring.';
      review.querySelector("h2").after(note);
    }
    document.querySelectorAll(".review-section p, .review-section td").forEach(element => {
      if (element.textContent.startsWith("Vervallen:")) {
        element.textContent = 'Vervallen in B: centrale DRU/Promafour, gasleiding en F01. P01 is de voorlopige pelletvoeding. Eerdere verwijderde S07/S08/S10/S11/S14 blijven vervallen; geen extra toestel of kring zonder installateursadvies.';
      }
      if (!element.querySelector("a") && element.textContent.includes("gasvuur")) {
        element.textContent = element.textContent.replaceAll("gasvuur", "pelletkachel").replaceAll("Ooghe", "de pelletinstallateur");
      }
    });
  }
  const withVariant = value => {
    const url = new URL(value, location.href);
    url.searchParams.set("variant", variant);
    return url.href;
  };
  document.querySelectorAll('a[data-page]').forEach(link => {
    link.href = withVariant(link.dataset.page);
    link.addEventListener("click", () => {
      const separate = document.querySelector(".open-current");
      if (separate) separate.href = link.href;
    });
  });
  const viewer = document.querySelector('iframe[name="plan-viewer"]');
  if (viewer) viewer.src = withVariant(viewer.getAttribute("src"));
  const separate = document.querySelector(".open-current");
  if (separate) separate.href = withVariant(separate.getAttribute("href"));
  if (window.parent !== window) return;
  const control = document.createElement("div");
  control.setAttribute("role", "group");
  control.setAttribute("aria-label", "Ontwerpvariant");
  control.style.cssText = "position:fixed;right:12px;top:12px;z-index:100;display:flex;gap:2px;padding:3px;background:#faf8f4;border:1px solid #b6bec5;border-radius:4px;font:12px 'Space Mono',monospace";
  for (const [choice, label] of [["A", "A · DRU"], ["B", "B · Pellet"]]) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.setAttribute("aria-pressed", String(choice === variant));
    button.style.cssText = `border:0;padding:7px 9px;border-radius:2px;cursor:pointer;background:${choice === variant ? "#2e4057" : "transparent"};color:${choice === variant ? "#ffffff" : "#2e4057"}`;
    button.addEventListener("click", () => {
      const url = new URL(location.href);
      url.searchParams.set("variant", choice);
      location.href = url.href;
    });
    control.append(button);
  }
  const header = document.querySelector("header");
  if (viewer && header) {
    control.style.position = "static";
    control.style.marginLeft = "auto";
    control.style.flexShrink = "0";
    header.append(control);
  } else if (document.getElementById("scene")) {
    const compact = matchMedia("(max-width: 720px)");
    const position = () => { control.style.top = compact.matches ? "112px" : "12px"; };
    compact.addEventListener("change", position);
    position();
    document.body.append(control);
  } else {
    control.style.position = "relative";
    control.style.top = "0";
    control.style.right = "0";
    control.style.width = "fit-content";
    control.style.margin = "12px 12px 0 auto";
    document.body.prepend(control);
  }
})();