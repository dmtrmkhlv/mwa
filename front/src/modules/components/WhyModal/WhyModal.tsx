import React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import "./WhyModal.scss";

export const WhyModal = () => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="box">
      <Button className="btn" onClick={handleOpen}>
        Зачем мне это?
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className="modal" sx={style}>
          <Typography id="modal-modal-title" variant="h4">
            Зачем регистрироваться?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Всё просто! Это нужно, чтобы получить доступ к&nbsp;возможностям
            приложения, например&nbsp;&mdash; составить список желаний
            и&nbsp;сохранить его в личном кабинете 🤗
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};
