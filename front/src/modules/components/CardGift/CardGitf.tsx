import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectListGift, selectUser, useAppDispatch } from "../..";
import { getGifts } from "../../store/ThunkCreator";
import { useEffect, useState } from "react";
import { ListGift } from "../../../interfaces";
import { CreateGift } from "../CreateGift";
import { useDeleteGift } from "./useDelteGift";
import { useReserveGift } from "./useReservGift";

interface CustomeCardProps {
  el: ListGift;
  role: string;
}

const CustomeCard = (props: CustomeCardProps) => {
  const { el, role } = props;
  const [bookingGift] = useReserveGift(el.id);
  const [deleteGift] = useDeleteGift(el.id);
  return (
    <Card key={el.id} sx={{ width: 270, ml: "auto", mr: "auto", mb: "1em" }}>
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
        {role === "creator" ? (
          <Button
            sx={{
              textTransform: "unset",
              color: "#333",
              paddingLeft: "10px",
            }}
            size="small"
            color="primary"
            {...deleteGift}
          >
            Удалить подарок
          </Button>
        ) : (
          <>
            <Button
              sx={{
                textTransform: "unset",
                color: "#333",
                paddingLeft: "10px",
              }}
              size="small"
              color="primary"
              {...bookingGift}
            >
              Забронировать подарок
            </Button>
            <Button
              sx={{
                textTransform: "unset",
                color: "#333",
                paddingLeft: "10px",
              }}
              size="small"
              color="primary"
              {...bookingGift}
            >
              снять бронь
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
};

const SubCardGift = () => {
  const [role, setRole] = useState("creator");
  const { value: user } = useSelector(selectUser);
  const { value: gift } = useSelector(selectListGift);
  const { slug } = useParams();
  useEffect(() => {
    const resp = gift.find((el) => el.eventId === slug)?.userCreatorId || "";
    if (resp === user.userId) {
      setRole("creator");
    } else {
      console.log(resp);
      setRole("giver");
    }
  }, [slug, gift, user]);

  return (
    <>
      {role === "creator" ? <CreateGift eventId={slug || ""} /> : <></>}
      {gift.map((el: ListGift) => {
        return <CustomeCard key={el.id} el={el} role={role} />;
      })}
    </>
  );
};

export function CardGift() {
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  useEffect(() => {
    if (slug) {
      dispatch(getGifts(slug));
    }
  }, []);
  return <SubCardGift />;
}
