const PUBLIC_KEY = "ebf40665df0b233b6adbe16e029cca1c";
const HASH = "44155eb204268aaf4500b9a2c1fda1b2";
const ts = "1663706269";

// Buscar todos os heróis da Marvel
function getHero() {
  fetch(
    `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=100`
  )
    .then((response) => response.json())
    .then((response) => {
      const heroi = response.data.results;
      setHero(heroi);
    });
}
getHero();

function setHero(heroi) {
  let card = document.getElementById("card");

  const heroesHTML = heroi.map((hero) => {
    let CardElement = `
    <div class="hero" >
        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" >
        <div class="card-body">
          <span class="card-title">${hero.name}</span>
          <a href="${hero.urls[0].url}" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
   
      `;

    return CardElement;
  });

  card.innerHTML = heroesHTML.join(" ");
}

