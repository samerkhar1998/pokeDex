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
            <div >
                <img src={logoImg} alt="logo" style={{
                    margin: "25%",
                    marginTop: "3%",
                    marginBottom:"-11%"
                }}/>
            </div>

            {<Search pokemonResults={pokemonResults} currPokemons={currPokemons} setCurrPokemons={setCurrPokemons} />}
                
            <div style={{
                margin:"2%",
                marginTop:"25%"
            }}>
                <div className="poke-grid">
                    {currPokemons &&
                    currPokemons.map((pokemon: {url:string}) => <Card pokemon={pokemon}/>)}         
                </div>
            </div>

            <div className="load-more">
                <div className="text" onClick={loadMore}>Load more...</div>
            </div>
        </>
)

};

export default Home;
