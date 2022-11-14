import {IPokemons, IPokemon} from "../Interfaces";
import {useState} from "react";
import "./Search.css";


interface IProps{
    setCurrPokemons:Function;
    currPokemons: IPokemons | any;
    pokemonResults: IPokemons | any;
}
const Search = (props: IProps) => {
    
    const [inputText, setInputText] = useState("");

    const inputHandler = async () => {
        await props.setCurrPokemons(Array<IPokemon>());
        
        if(inputText != ""){
            const newList = props.pokemonResults.filter((pokemon:IPokemon) => pokemon.name.includes(inputText));
            console.log("newList",newList);
            props.setCurrPokemons(newList);
            
        }else{
            props.setCurrPokemons(props.pokemonResults);
        }
        
    };
    console.log(props.currPokemons);
    return (
            <div style={{position: "absolute",
                margin:"50%",
                marginTop: "15%",
                marginBottom: "0%",
                }}>
                <div className="outerDiv">

                    <div className="searchBar">
                        <div className="leftDiv">
                            <div className="rectangle21"><input type="text" name="search" id="search" onChange={e => setInputText(e.target.value.toLowerCase())} />
                        </div>

                        <div className="rightDiv">
                            <div className="rectangle22">
                                <div className="search" onClick={inputHandler}>Search</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
                
            
            </div>
            
    );
};

export default Search;