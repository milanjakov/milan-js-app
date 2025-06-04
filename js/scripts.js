// Declaration of pokemon array with each object
let pokemonRepository = (function () {
  let pokemonList = [];
    return {
      add: function() {
         pokemonList.push(pokemon);
      },
      getAll:function() {
        return pokemonList;
      }
    };
})();
  

// For loop to print out the details of each pokemon
for ( let i = 0; i < pokemonList.length; i++) {
  document.write("<p>" + `${pokemonList[i].height}` + "</p>")
}

// ForEach method to print out details of each pokemon
const samplePokemon =
[{ name: 'Bulbasaur',
Height: 7,
type:['Grass', 'Monster'] },
{ name: 'Pikachu',
Height: 4,
type: ['Electric'] },
{ name: 'Squirtle',
Height: 5,
type: ['Water'] }]
samplePokemon.forEach(pokemon => {
pokemonRepository.add(pokemon)})
pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemonList[i].Height>6) {
  document.write("" + ${pokemonList[i].name} Wow, that's big + "")
  }else{
  document.write("" + ${pokemon.name}: ${pokemon.Height});
  })}

// For loop to print out which pokemon is the biggest
for ( let i = 0; i < pokemonList.length;  i++) {
  if (pokemonList[i].height>6) {
    document.write("<p>" + `${pokemonList[i].name} Wow, that's big` + "</p>")
  }
}