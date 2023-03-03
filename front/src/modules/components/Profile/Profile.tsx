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
import { useEffect, useState } from "react";
import GeneralSettings from "./GeneralSettings";
import { useGetProfile } from "./useGetProfile";
import { useGetAvatarName } from "./useGetAvatarName";
import { usePhoneMask } from "./usePhoneMask";

export interface IUserProfile {
  id: string;
  username: string;
  password: string;
  profile: {
    id: string;
    photo: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    emailIsActive: boolean;
  };
}

export function ProfileEvent() {
  const getUserProfile = useGetProfile();
  const [userProfile, setUserProfile] = useState(getUserProfile);
  const { setPhoneValue } = usePhoneMask();

  const [avatarname] = useGetAvatarName(userProfile);
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    if (userProfile.id !== getUserProfile.id) {
      setUserProfile(getUserProfile);
    }
  }, [getUserProfile, userProfile.id]);

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
          {userProfile.profile.photo !== "" ? (
            <Avatar
              alt={userProfile?.username}
              src={userProfile.profile.photo}
              sx={{ width: 56, height: 56, marginBottom: "20px" }}
            />
          ) : (
            <Avatar
              {...avatarname}
              alt={userProfile?.username}
              sx={{ width: 56, height: 56, marginBottom: "20px" }}
            />
          )}
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Username: {userProfile.username}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Имя: {userProfile.profile.firstname}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Фамилия: {userProfile.profile.lastname}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Телефон:{" "}
            {userProfile.profile.phone.length === 1
              ? ""
              : setPhoneValue(userProfile.profile.phone)}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Email: {userProfile.profile.email}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {userProfile.profile.emailIsActive ? (
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
              <GeneralSettings
                onClose={handleClose}
                userProfile={userProfile}
                setUserProfile={setUserProfile}
              />
            </Box>
          </Modal>
        </CardActions>
      </Card>
    </Box>
  );
}
