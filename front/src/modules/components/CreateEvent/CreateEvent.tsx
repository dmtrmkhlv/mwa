import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useCreateEvent } from "./useCreateEvent";

export function CreateEvent() {
  const { title, description, error, handlerForm, submitButton } =
    useCreateEvent();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCreate = () => {
    submitButton();
    setOpen(false);
  };

  return (
    <>
      <Button sx={{ m: 2 }} variant="outlined" onClick={handleClickOpen}>
        Создать новый список
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Описание</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Для того чтобы создать список требуется заполнить поля с названием и
            описанием
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название"
            type="text"
            name="title"
            value={title}
            onChange={handlerForm}
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Описание"
            type="text"
            name="description"
            value={description}
            onChange={handlerForm}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отменить</Button>
          <Button onClick={handleCreate}>Создать</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
