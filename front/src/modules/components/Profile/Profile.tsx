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
import { useState } from "react";

import GeneralSettings from "./GeneralSettings";
import { useGetProfile } from "./useGetProfile";

export function ProfileEvent() {
  const [profile, stringAvatar, avatarString] = useGetProfile("id");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "#ffffff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={{ pb: 3 }}>
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
              <GeneralSettings onClose={handleClose} profile={profile} />
            </Box>
          </Modal>
        </CardActions>
      </Card>
    </Box>
  );
}
