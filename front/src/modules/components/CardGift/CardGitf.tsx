import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectListGift, selectUser, useAppDispatch } from "../..";
import { useRole } from "../../requireAuth";
import { getGifts } from "../../store/ThunkCreator";
import { useEffect } from "react";
import { ListGift } from "../../../interfaces";
import { CreateEvent } from "../CreateEvent";

export function CardGift(props: any) {
  const { images } = props;
  const { value: user } = useSelector(selectUser);
  const { value: gift } = useSelector(selectListGift);
  const { slug } = useParams();
  const dispatch = useAppDispatch();
  const role = useRole(user.userId, 2);
  useEffect(() => {
    dispatch(getGifts("запрос"));
  }, []);
  const navigate = useNavigate();
  const navigateMain = () => {
    setTimeout(() => navigate("/", { replace: true }), 500);
  };
  return (
    <>
      <CreateEvent />
      {gift
        .filter((el) => el.eventId === slug)
        .map((el: ListGift) => {
          return (
            <Card sx={{ width: 270, ml: "auto", mr: "auto", mb: "1em" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={el.link}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  sx={{
                    textTransform: "unset",
                    color: "#333",
                    paddingLeft: "10px",
                  }}
                  size="small"
                  color="primary"
                  onClick={navigateMain}
                >
                  Узнать больше ›
                </Button>
              </CardActions>
            </Card>
          );
        })}
    </>
  );
}
