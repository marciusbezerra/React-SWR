import React from 'react';
import useSWR from 'swr';
import { Pokemon } from './components/Pokemon';


const url = 'https://pokeapi.co/api/v2/pokemon';
// fetcher necessário apenas se o SWR não for global
// const fetcher = (...args) => fetch(...args).then(res => res.json());

function App() {
  // fetcher necessário apenas se o SWR não for global
  // const { data: result, error } = useSWR(url, fetcher);
  const { data: result, error } = useSWR(url);

  if (error) return <h1>Ocorreu um erro!</h1>;
  if (!result) return <h1>Carregando...</h1>;

  console.log(result);

  return (
    <main className='App'>
      <h1>Pokedex</h1>
      <div>
        {result.results.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon} />)}
      </div>
    </main>
  );
}

export default App;