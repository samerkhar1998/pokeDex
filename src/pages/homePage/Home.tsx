import { useState,useEffect } from "react";
import Card from "../../shared/card/Card";
import {fetchResults} from "../../services/FetchData";
import { IPokemons } from "../../shared/Interfaces";
import "../../shared/Body.css";
import "../../shared/LoadMore.css";
import { logoImg } from "../../shared/logo";
import Search from "../../shared/search/Search";

const Home = () =>{
    const [pokemonResults, setPokemonResults] = useState<IPokemons | any>();
    const [nextUrl, setNextUrl] = useState("");
    const [currPokemons, setCurrPokemons] = useState<IPokemons | any>();

useEffect(()=> {
    const url = "https://pokeapi.co/api/v2/pokemon";
    fetchResults(url, pokemonResults, setNextUrl, setPokemonResults, setCurrPokemons);
    
}, []);

const loadMore = async () =>{
    await fetchResults(nextUrl, pokemonResults, setNextUrl, setPokemonResults, setCurrPokemons);
};


return (
    <>
        <body>
            <div style={{position:"absolute",
            margin: "50%",
            marginTop: "2%",
            marginBottom: "10%",
            }}>
                <img src={logoImg} alt="logo"/>
            </div>

            <Search pokemonResults={pokemonResults} currPokemons={currPokemons} setCurrPokemons={setCurrPokemons}  />
        
            <div className="poke-grid">
                {currPokemons &&
                currPokemons.map((pokemon: {url:string}) => <Card pokemon={pokemon}/>)}         
            </div>

            <div className="load-more">
                <div className="text" onClick={loadMore}>Load more...</div>
            </div>
        </body>
        
            
        </>
        
)

};

export default Home;
