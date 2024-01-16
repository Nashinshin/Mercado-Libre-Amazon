function showResults(results, paging) {
  const container = document.querySelector(".results");
  const template = document.querySelector("#result-item-template");
  const contenido = document.querySelector(".content");

  for (const r of results) {
    const priceEl = template.content.querySelector(".result-item-price");
    priceEl.textContent = "$" + r.price;

    const titleEl = template.content.querySelector(".result-item-title");
    titleEl.textContent = r.title;

    const conditionEl = template.content.querySelector(
      ".result-item-condition"
    );
    conditionEl.textContent = "Condition: " + r.condition;

    const sellEl = template.content.querySelector(".result-item-sell-count");
    sellEl.textContent = "Cantidad disponible: " + r.available_quantity;

    const imgEl = template.content.querySelector(".result-item-img");
    imgEl.src = r.thumbnail;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
  }
}

function main() {
  const formEl = document.querySelector(".search-container");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const palabraABuscar = e.target.search.value;
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + palabraABuscar)
      .then((res) => res.json())
      .then((data) => showResults(data.results));
  });
}

main();
