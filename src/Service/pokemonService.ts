import axios from "axios";

const remote = axios.create();

const defaultUrl = "https://pokeapi.co/api/v2/pokemon";

export interface PokemonListResponseType {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
  }[];
}

export const fetchPokemonsAPI = async (nextUrl?: string) => {
  const requestUrl = nextUrl ? nextUrl : "https://pokeapi.co/api/v2/pokemon";
  const response = await remote.get<PokemonListResponseType>(requestUrl);

  return response.data;
};

interface PokemonDetailResponseType {
  id: number;
  weight: number;
  height: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

interface PokemonSpeciesResponseType {
  color: {
    name: string;
  };
  names: {
    name: string;
    language: {
      name: string;
    };
  }[];
}

export interface PokemonDetailType {
  id: number;
  weight: number;
  height: number;
  name: string;
  koreanName: string;
  color: string;
  type: string[];
  images: {
    frontDefault: string;
    dreamWorldFront: string;
    officialArtworkFront: string;
  };
  baseStats: {
    name: string;
    value: number;
  }[];
}

export const fetchPokemonDetailAPI = async (name: string): Promise<PokemonDetailType> => {
  const response = await remote.get<PokemonDetailResponseType>(`${defaultUrl}/${name}`);
  const speciesResponse = await remote.get<PokemonSpeciesResponseType>(
    `${defaultUrl}-species/${name}`
  );

  const detail = response.data;
  const species = speciesResponse.data;

  return {
    id: detail.id,
    name: detail.name,
    color: species.color.name,
    koreanName: species.names.find((item) => item.language.name === "ko")?.name ?? detail.name,
    height: detail.height / 10,
    weight: detail.weight / 10,
    type: detail.types.map((item) => item.type.name),
    images: {
      frontDefault: detail.sprites.front_default,
      dreamWorldFront: detail.sprites.other.dream_world.front_default,
      officialArtworkFront: detail.sprites.other["official-artwork"].front_default
    },
    baseStats: detail.stats.map((item) => {
      return {
        name: item.stat.name,
        value: item.base_stat
      };
    })
  };
};
