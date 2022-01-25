window.onload = generate_html;

function generate_html() {
  let elementoDiv = document.createElement("div");
  elementoDiv.id = "layerNavAll";
  elementoDiv.className = "droplayer";
  // lo inserto dentro del div contenedor.
  document.getElementById("container").appendChild(elementoDiv);

  let elementoDiv2 = document.createElement("div");
  elementoDiv2.className = "inner";
  elementoDiv.appendChild(elementoDiv2);

  let elementoDiv3 = document.createElement("div");
  elementoDiv3.className = "inner-nav";
  elementoDiv2.appendChild(elementoDiv3);

  let elementoDiv4 = document.createElement("div");
  elementoDiv4.className = "nav-section-layer limiter";
  elementoDiv3.appendChild(elementoDiv4);

  let elementoDiv5 = document.createElement("div");
  elementoDiv5.className = "inner-nav-header";
  elementoDiv4.appendChild(elementoDiv5);

  let elementoDiv6 = document.createElement("div");
  elementoDiv6.className = "inner-nav-row";
  elementoDiv5.appendChild(elementoDiv6);

  let elementoP = document.createElement("p");
  elementoP.className = "nav-title";
  elementoP.textContent = "Menú";
  elementoDiv6.appendChild(elementoP);

  let elementoDiv7 = document.createElement("div");
  elementoDiv7.className = "box";
  elementoDiv6.appendChild(elementoDiv7);

  let elementoP2 = document.createElement("p");
  elementoDiv7.appendChild(elementoP2);

  let elementoDiv8 = document.createElement("div");
  elementoDiv8.className = "md-lite-share";
  elementoDiv7.appendChild(elementoDiv8);

  let elementoP3 = document.createElement("p");
  elementoDiv8.appendChild(elementoP3);

  let elementoA = document.createElement("a");
  elementoA.className = "btn facebook small";
  elementoA.setAttribute("href", "https://www.facebook.com/diariodecadiz/");
  elementoA.setAttribute("target", "_blank");
  elementoA.setAttribute("rel", "noopener noreferrer");
  elementoP3.appendChild(elementoA);

  let elementoSpan = document.createElement("span");
  elementoSpan.className = "fa ico ico-facebook-circle";
  elementoA.appendChild(elementoSpan);

  let elementoSpan2 = document.createElement("span");
  elementoSpan2.className = "inner-text";
  elementoSpan2.textContent = "Facebook";
  elementoSpan.appendChild(elementoSpan2);

  let elementoA2 = document.createElement("a");
  elementoA2.className = "btn twitter small";
  elementoA2.setAttribute("href", "https://twitter.com/diariocadiz");
  elementoA2.setAttribute("target", "_blank");
  elementoA2.setAttribute("rel", "noopener noreferrer");
  elementoP3.appendChild(elementoA2);

  let elementoSpan3 = document.createElement("span");
  elementoSpan3.className = "fa ico ico-twitter-circle";
  elementoA2.appendChild(elementoSpan3);

  let elementoSpan4 = document.createElement("span");
  elementoSpan4.className = "inner-text";
  elementoSpan4.textContent = "Twitter";
  elementoSpan3.appendChild(elementoSpan4);

  let comentario = document.createComment(".md-lite-share");
  elementoDiv7.appendChild(comentario);

  let elementoDiv9 = document.createElement("div");
  elementoDiv9.className = "inner-nav-body";
  elementoDiv4.appendChild(elementoDiv9);

  let elementoDiv10 = document.createElement("div");
  elementoDiv10.className = "inner-nav-special";
  elementoDiv9.appendChild(elementoDiv10);

  let elementoA3 = document.createElement("a");
  elementoA3.className = "lnk";
  elementoA3.setAttribute("href", "https://diariodecadiz.clubsuscriptor.es/");
  elementoA3.setAttribute("title", "Suscripción al Diario en papel");
  elementoA3.setAttribute("target", "_blank");
  elementoA3.textContent = "Suscripción al Diario en papel";
  elementoDiv10.appendChild(elementoA3);

  let elementoSpan5 = document.createElement("span");
  elementoSpan5.className = "fa ico ico-caret-right";
  elementoA3.appendChild(elementoSpan5);

  let elementoDiv11 = document.createElement("div");
  elementoDiv11.className = "box";
  elementoDiv10.appendChild(elementoDiv11);

  let elementoUL = document.createElement("ul");
  elementoDiv11.appendChild(elementoUL);

  let elementoLI = document.createElement("li");
  elementoUL.appendChild(elementoLI);

  let elementoA4 = document.createElement("a");
  elementoA4.className = "lnk";
  elementoA4.setAttribute("href", "https://diariodecadiz.clubsuscriptor.es/");
  elementoA4.setAttribute(
    "title",
    "Suscríbete a la edición de papel de Diario de Cádiz"
  );
  elementoA4.setAttribute("target", "_blank");
  elementoA4.textContent =
    "Suscríbete a la edición de papel de Diario de Cádiz";
  elementoLI.appendChild(elementoA4);

  let comentario2 = document.createComment(".box");
  elementoDiv10.appendChild(comentario2);

  let comentario3 = document.createComment(".inner-nav-special");
  elementoDiv9.appendChild(comentario3);

  let elementoDiv12 = document.createElement("div");
  elementoDiv12.className = "inner-nav-special";
  elementoDiv9.appendChild(elementoDiv12);

  let elementoA5 = document.createElement("a");
  elementoA5.className = "lnk";
  elementoA5.setAttribute("href", "http://www.pdfinteractivo.es/cadiz");
  elementoA5.setAttribute("title", "Suscripción al Diario en PDF");
  elementoA5.setAttribute("target", "_blank");
  elementoA5.textContent = "Suscripción al Diario en PDF";
  elementoDiv12.appendChild(elementoA5);

  let elementoSpan6 = document.createElement("span");
  elementoSpan6.className = "fa ico ico-caret-right";
  elementoA5.appendChild(elementoSpan6);

  let elementoDiv13 = document.createElement("div");
  elementoDiv13.className = "box";
  elementoDiv12.appendChild(elementoDiv13);

  let elementoDiv14 = document.createElement("div");
  elementoDiv14.className = "md-pdf-link md";
  elementoDiv13.appendChild(elementoDiv14);

  let elementoDiv15 = document.createElement("div");
  elementoDiv15.className = "image";
  elementoDiv14.appendChild(elementoDiv15);

  let elementoIMG = document.createElement("img");
  elementoIMG.setAttribute(
    "src",
    "https://www.diariodecadiz.es/static/BB3HTML/images/devices.png?hash=7626712fc5a45e45982059abe2351069"
  );
  elementoIMG.setAttribute("width", "121");
  elementoIMG.setAttribute("height", "63");
  elementoIMG.setAttribute("alt", "Multiple devices");
  elementoDiv15.appendChild(elementoIMG);

  let elementoDiv16 = document.createElement("div");
  elementoDiv16.className = "claim";
  elementoDiv14.appendChild(elementoDiv16);

  let elementoP4 = document.createElement("p");
  elementoDiv16.appendChild(elementoP4);

  let elementoB = document.createElement("b");
  elementoB.textContent = "Consulta en PDF";
  elementoP4.appendChild(elementoB);

  let elementoI = document.createElement("i");
  elementoI.textContent = " toda la información";
  elementoP4.appendChild(elementoI);

  elementoI.insertAdjacentText("afterend", " en tu dispositivo favorito");

  let elementoA6 = document.createElement("a");
  elementoA6.className = "btn primary small";
  elementoA6.setAttribute("href", "http://www.pdfinteractivo.es/cadiz");
  elementoA6.setAttribute("title", "Suscríbete");
  elementoA6.setAttribute("target", "_blank");
  elementoDiv14.appendChild(elementoA6);

  let elementoSpan7 = document.createElement("span");
  elementoSpan7.className = "text";
  elementoSpan7.textContent = "Suscríbete";
  elementoA6.appendChild(elementoSpan7);

  let comentario4 = document.createComment(".md-pdf-link");
  elementoDiv13.appendChild(comentario4);

  let comentario5 = document.createComment(".box");
  elementoDiv12.appendChild(comentario5);

  let elementoDiv17 = document.createElement("div");
  elementoDiv17.className = "inner-nav-row";
  elementoDiv12.appendChild(elementoDiv17);
}

function titulo(href, title) {
  this.href = href;
  this.title = title;
}

let lista = [titulo];

function generate_inner_nav_row(titulo, lista) {
  let main = elementoDiv17;
  let ElementoA = creatElem("a");
  setAtt(ElementoA, "class", "lnk");
  setAtt(ElementoA, "href", "/cadiz/");
  setAtt(ElementoA, "title", "Cádiz");
  setAtt(ElementoA, "textContent", "Cádiz");
  let span = creatElem("span");
  setAtt(span, "class", "fa ico ico-caret-right");

  main.appendChild(ElementoA);
  ElementoA.appendChild(span);
}

function creatElem(e) {
  return document.createElement(e);
}
