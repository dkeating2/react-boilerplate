import { Character } from "../../types/character.types.ts";
import { Card, CardContent, CardHeader, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
interface CharacterCardProps {
  character: Character;
}

const CharacterCard = (props: CharacterCardProps) => {
  const { character } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/characters/${character.id}`);
  };

  return (
    <Card sx={{ height: "100%" }}>
      <CardActionArea onClick={handleClick}>
        <CardHeader title={`${character.name.first} ${character.name?.last}`} />
        <CardContent>
          <img src={character.images?.main} alt="character" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
