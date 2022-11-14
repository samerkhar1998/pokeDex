import { ITypes } from "../../shared/Interfaces";

interface props {
    types: ITypes;
};

const Types = (prop: props) =>{
    const types = prop.types;

    return (
            <div>
                <h2>-----------------------</h2>
                <p>{types[0]?.type.name}</p>
                <p>{types[1]?.type.name}</p>
                <p>{types[2]?.type.name}</p> 
            </div>
    );

};

export default Types;