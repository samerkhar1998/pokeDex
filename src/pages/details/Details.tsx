import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemon } from "../../services/FetchData";
import { IPokemon } from "../../shared/Interfaces";
import { logoImg } from "../../shared/logo";
import Stats from "./Stats";
import Types from "./Types";

const Details = () =>{
    
    const [pokemon, setPokemon] = useState<IPokemon | any>();
    const { pokemonName } = useParams(); 
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    useEffect(() => {
        fetchPokemon(pokemonUrl, setPokemon);
        
    }, []);

    return ( 
        <body>
            <div style={{position:"absolute",
                margin: "50%",
                marginTop: "2%",
                marginBottom: "10%",
                }}>
                <img src={logoImg} alt="logo" />
            </div>

            <div className="pokeGrid">

            {/* <div className="card" style={{
                width:"100%",
                height:"100%"
            }}> */}
                {/* <div className="container"> */}
                    {pokemon && <h1 style={{
                        fontSize:"150%"
                    }}>{pokemon.name}</h1>}
                    {pokemon && <img src={pokemon.img} alt="pokemon" style={{
                            height: "80%",
                            width: "80"
                            }}></img>}
                {/* </div>    */}
                

                {pokemon &&
                <div>
                    <Stats stats={pokemon.stats}></Stats>
                    <Types types={pokemon.types}></Types>
                    
                </div>}
            </div>
        </body>
    )

};

export default Details;