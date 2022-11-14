import { IPokemon } from "../../shared/Interfaces";
import {fetchPokemon} from  "../../services/FetchData";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css"


interface props{
    pokemon:{url:string}
}

const Card = (prop: props)=>{
    const [pokemon, setPokemon] = useState<IPokemon | any>();
    // console.log(prop.pokemon.url);
    
    useEffect(() => {
        fetchPokemon(prop.pokemon.url, setPokemon);
    }, []);
    let i = 0;

    return ( 
        <div className="column" key={i++}>   
            {pokemon &&
                <Link to={{pathname: `/details/${pokemon.name}` }}  style={{
                            textDecoration: "none",
                            color:"black",
                            width:"100%",
                            height:"100%"
                        }}>      
                    {/* <div className="card" key={i++}> */}
                    <div className="pokeRectangle">
                        <div className="name">{pokemon.name}</div>

                        <div className="Img">    
                            <img src={pokemon.img} alt="pokemon" style={{
                                height: "80%",
                                width: "70%",
                                padding: "10%",
                                }}>
                            </img>
                        </div>
                    </div>
                </Link>
            }
        </div>  
            
    )
}

export default Card;