import useData from "../../hooks/useData/useData.tsx";
import { Character } from "../../types/character.types.ts";
import CharacterCard from "../../components/CharacterCard/CharacterCard.tsx";
import Grid from "@mui/material/Unstable_Grid2";
import { CircularProgress } from "@mui/material";

const CharacterList = () => {
  const { data: characters, isLoading } = useData<Character[]>({
    endpoint: "characters",
  });
  return (
    <div>
      {isLoading && <CircularProgress />}
      {characters && (
        <Grid container spacing={2}>
          {characters?.map((character) => (
            <Grid xs={4}>
              <CharacterCard character={character} key={character.id} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CharacterList;
