import { Box } from "@chakra-ui/react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./CardRound.css";

export function CardRound(props: any) {
  const { images } = props;

  return (
    <Box className="roundCard" boxShadow="md">
      <CardActionArea>
        <CardMedia
          className="cardMedia"
          component="img"
          height="140"
          image={images}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {props.name}
          </Typography>

          {props.navyk ? (
            <>
              <Typography gutterBottom variant="h4" component="h4">
                Навыки:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.navyk}
              </Typography>
            </>
          ) : (
            ""
          )}

          {props.business ? (
            <>
              <Typography gutterBottom variant="h4" component="h4">
                Вклад:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.business}
              </Typography>
            </>
          ) : (
            ""
          )}
        </CardContent>
      </CardActionArea>
    </Box>
  );
}
