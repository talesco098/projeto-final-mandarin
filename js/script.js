const fundoPokemon = document.querySelector(".fundo");
const imagemPokemon = document.querySelector(".pokemon");
const nomePokemon = document.querySelector(".nome");
const categoriaPokemon = document.querySelector(".categoria");
const formulario = document.querySelector(".formulario");
const input = document.querySelector(".input");
const botao = document.querySelector(".botao");
let random = Math.floor(Math.random() * 15) + 1;

const getNomePokemon = async (pokemon) => {
  const retornoNome = await fetch(
    `https://dev-api-teste.mandarin.com.br/pokemons?name=${pokemon}`
  );
  if (retornoNome.status === 200) {
    const nomes = await retornoNome.json();
    return nomes;
  }
};

const getIdPokemon = async () => {
  const retornoId = await fetch(
    "https://dev-api-teste.mandarin.com.br/pokemons"
  );

  if (retornoId.status === 200) {
    const id = await retornoId.json();
    return id;
  }
};

const renderizacao = async (pokemon) => {
  const dadosNomes = await getNomePokemon(pokemon);

  if (dadosNomes) {
    dadosNomes.forEach((item) => {
      fundoPokemon.src = item.background_image_url;
      imagemPokemon.src = item.image_url;
      nomePokemon.innerHTML = item.name;
      categoriaPokemon.innerHTML = item.category;
      input.value = "";
    });
  }

  const dadosIds = await getIdPokemon(pokemon);
  if (dadosIds) {
    fundoPokemon.src = dadosIds[pokemon].background_image_url;
    imagemPokemon.src = dadosIds[pokemon].image_url;
    nomePokemon.innerHTML = dadosIds[pokemon].name;
    categoriaPokemon.innerHTML = dadosIds[pokemon].category;
    input.value = "";
  }
};

function primeiraLetraMaiuscula(pokemon) {
  return (
    pokemon.toLowerCase().charAt(0).toUpperCase() +
    pokemon.slice(1).toLowerCase()
  );
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  renderizacao(primeiraLetraMaiuscula(input.value));
});

botao.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 15) + 1;
  renderizacao(random);
});

renderizacao(random);
