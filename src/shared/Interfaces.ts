
export interface IPokemon{
    name:string;
    pokemonUrl:string;
};

export interface IPokemons extends Array<IPokemon>{};

export interface ImyPokemon{
    name: string;
    img: string;
    stats: IStats;
    types: ITypes;
};

export interface IStat{
    name: string;
    base_stat: number;
    stat: {name:string};
};

export interface IStats extends Array<IStat>{};

export interface IType{
    type: {name: string};
};

export interface ITypes extends Array<IType>{}; 

export function createPokemon(name: string, img: string, stats: IStats, types:ITypes) {
    return {
      name: name,
      img: img,
      stats: stats,
      types:types
    };
};

