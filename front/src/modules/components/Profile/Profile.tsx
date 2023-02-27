import {
  Box,
  CssBaseline,
  Avatar,
  Button,
  Modal,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectListEvent } from "../../store";
import { useAppDispatch } from "../../hooks";
import { getAllEvents } from "../../store/ThunkCreator";

import GeneralSettings from "./GeneralSettings";

export function ProfileEvent() {
  const { value: events } = useSelector(selectListEvent);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllEvents("запрос"));
  }, []);
  const ref = useRef<HTMLDivElement>(null);

  function stringToColor(string: string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  const profile = {
    firstName: "Della",
    lastName: "Kent",
    email: "a.c@infor.com",
    phone: "2543545345",
    username: "DellaKent",
    emailIsActive: true,
    photo: "profile.photo",
    password: "password",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const avatarString =
    profile.firstName || profile.lastName
      ? profile.firstName + " " + profile.lastName
      : profile.username;

  return (
    <Box sx={{ pb: 3 }} ref={ref}>
      <CssBaseline />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Ваши данные:
          </Typography>
          <Avatar
            {...stringAvatar(avatarString)}
            alt={avatarString}
            sx={{ width: 56, height: 56, marginBottom: "20px" }}
          />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Username: {profile.username}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Имя: {profile.firstName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Фамилия: {profile.lastName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Телефон: {profile.phone}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Email: {profile.email}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {profile.emailIsActive ? (
              <>
                Email подтвержден <DoneIcon sx={{ color: "green" }} />
              </>
            ) : (
              <>
                Email не подтвержден <DoDisturbIcon sx={{ color: "red" }} />
              </>
            )}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen}>Редактировать</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <GeneralSettings profile={profile} />
            </Box>
          </Modal>
        </CardActions>
      </Card>
    </Box>
  );
}
