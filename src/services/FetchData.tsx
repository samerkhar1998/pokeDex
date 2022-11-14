import React from "react";
import { IPokemons,IStats, ITypes } from "../shared/Interfaces";
import { createPokemon } from "../shared/Interfaces";


export async function fetchResults(pokemonsUrl: string, pokemonResults: IPokemons, setNextUrl: Function, setPokemonResults: Function,setCurrPokemons:Function){
    
        try{
            const response = await fetch(pokemonsUrl);
            const json = await response.json();
            const results: IPokemons = json.results as IPokemons
            let allPokemons;
            if (pokemonResults){
                allPokemons = [...pokemonResults,...results];
            }else{
                allPokemons = [...results];
            }
            setPokemonResults(allPokemons);
            setCurrPokemons(allPokemons);
            if (json.next !== ""){
                setNextUrl(json.next);
            }else{
                setNextUrl("");
            }
        }catch (error){
            console.log("error", error);
        }
};

export async function fetchPokemon(pokemonUrl: string, setPokemon: Function){
        try{
            const response = await fetch(pokemonUrl);
            const json = await response.json();
            const currPokemon = createPokemon(json.name, json.sprites?.other["official-artwork"].front_default ,json.stats as IStats, json.types as ITypes);
            setPokemon(currPokemon);
        }catch (error){
            console.log("error", error);
        }
};



