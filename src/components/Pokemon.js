import React from 'react';
import useSWR from "swr";


// fetcher necessário apenas se o SWR não for global
// const fetcher = (...args) => fetch(...args).then(res => res.json());

export const Pokemon = ({ pokemon }) => {
    const { name } = pokemon;
    const url = 'https://pokeapi.co/api/v2/pokemon/' + name;

    // fetcher necessário apenas se o SWR não for global
    // const { data, error } = useSWR(url, fetcher);
    const { data, error } = useSWR(url);

    if (error) return <h1>Ocorreu um erro1</h1>;
    if (!data) return <h1>Carregando...</h1>

    return (
        <div className="Card">
            <span className="Card--id">#{data.id}</span>
            <img className="Card-img" src={data.sprites.front_default} alt={name} />
            <h1 className="Card-name">{name}</h1>
            <span className="Card-details">
                {data.types.map(poke => poke.type.name).join(',')}
            </span>
        </div>
    );
}