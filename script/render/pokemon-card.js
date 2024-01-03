function createPokemonCard(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>

      <div class="detail">
        <ol class="types">
          ${pokemon.types.map(createPokemonTypeLabel).join("")}
        </ol>

        <img
          src="${pokemon.photo}"
          alt="${pokemon.name}" 
        />
      </div>
    </li>
  `;
}

function createPokemonTypeLabel(type) {
  return `
    <li class="type ${type}">${type}</li>
  `;
}
