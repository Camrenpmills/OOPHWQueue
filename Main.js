// QueueHW
console.log('Welcome to the PokemonQueue!');
displayMenu();
processInput();

const pokemonQueue = [];

// Inerative Menu 
function displayMenu() {
  console.log('\n=== Pokemon Queue ===');
  console.log('1. Catch a Pokemon');
  console.log('2. Release a Pokemon');
  console.log('3. View your Pokemon');
  console.log('4. Exit');
}

// Attempt to Catach a Pokemon
function catchPokemon() {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  console.log('Enter the name of the Pokémon you want to catch: ');
  process.stdin.once('data', (name) => {
    name = name.trim();
    pokemonQueue.push(name);
    console.log(`You caught a ${name}!`);
    displayMenu();
    processInput();
  });
}

// Release of a Pokemon 
function releasePokemon() {
  if (pokemonQueue.length === 0) {
    console.log('Your Pokemon collection is empty.');
  } else {
    const releasedPokemon = pokemonQueue.shift();
    console.log(`You released ${releasedPokemon}.`);
  }
  displayMenu();
  processInput();
}

// Pkoemon Collection View
function viewPokemon() {
  if (pokemonQueue.length === 0) {
    console.log('Your Pokemon collection is empty.');
  } else {
    console.log('Your Pokemon collection:');
    console.log(pokemonQueue.join(', '));
  }
  displayMenu();
  processInput();
}

function processInput() {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  console.log('Select an option: ');
  process.stdin.once('data', (option) => {
    option = option.trim();
    switch (option) {
      case '1':
        catchPokemon();
        break;
      case '2':
        releasePokemon();
        break;
      case '3':
        viewPokemon();
        break;
      case '4':
        console.log('Exiting the PokéQueue.');
        process.stdin.pause();
        break;
      default:
        console.log('Invalid option. Please try again.');
        displayMenu();
        processInput();
        break;
    }
  });
}
