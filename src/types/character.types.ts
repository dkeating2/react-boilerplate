export interface Character {
  name: {
    first: string;
    middle: string;
    last: string;
  };
  images: {
    "head-shot": string;
    main: string;
  };
  gender: "Male" | "Female";
  species: string;
  homePlanet?: string;
  occupation: string;
  sayings: string[];
  id: number;
  age: string;
}
