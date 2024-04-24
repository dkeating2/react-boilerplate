import { useParams } from "react-router-dom";
import useData from "../../hooks/useData/useData.tsx";
import { Character } from "../../types/character.types.ts";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Unstable_Grid2 as Grid,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const CharacterPage = () => {
  const { id } = useParams();
  const { data: character, isLoading } = useData<Character>({
    endpoint: "characters",
    id,
  });
  return (
    <>
      {character && (
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant={"h4"}>
              {character?.name.first} {character?.name.last}
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant={"h4"}>Info</Typography>
          </Grid>
          <Grid xs={12}>
            <Typography variant={"h4"}>Quotes</Typography>
            <List>
              {character?.sayings?.map((saying) => (
                <ListItem>
                  <ListItemText>{saying}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default CharacterPage;
