const fundoPokemon = document.querySelector(".fundo");
const imagemPokemon = document.querySelector(".pokemon");
const nomePokemon = document.querySelector(".nome");
const categoriaPokemon = document.querySelector(".categoria");
const formulario = document.querySelector(".formulario");
const input = document.querySelector(".input");
const botao = document.querySelector(".botao");

const fetchPokemon = async (pokemon) => {
  const retorno = await fetch(
    `https://dev-api-teste.mandarin.com.br/pokemons/${pokemon}`
  );
  if (retorno.status === 200) {
    const dados = await retorno.json();
    return dados[0];
  }
};

const renderizacao = async (pokemon) => {
  const dados = await fetchPokemon(pokemon);

  if (dados) {
    dados.forEach((pokemon) => {
      nomePokemon.innerHTML = dados.name;
      categoriaPokemon.innerHTML = dados.category;
      imagemPokemon.src = dados.image_url;
      fundoPokemon.src = dados.background_image_url;
    });
  }
};

renderizacao("Charizard");
