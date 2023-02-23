import * as React from "react";
import Card from "@mui/material/Card";
import { Box } from "@chakra-ui/react"
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../..";
import { useRole } from "../../requireAuth";
import './CardRound.css';



export function CardRound(props: any) {
  const { images } = props;
  const { value: user } = useSelector(selectUser);
  const role = useRole(user.userId, 2);
  const navigate = useNavigate();
  const navigateMain = () => {
    setTimeout(() => navigate("/", { replace: true }), 500);
  };
  return (
    <Box className="roundCard" boxShadow='md'>
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

          <Typography gutterBottom variant="h4" component="h4">
            Навыки:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.navyk}
          </Typography>

          <Typography gutterBottom variant="h4" component="h4">
            Вклад:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.business}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Box>
  );
}
