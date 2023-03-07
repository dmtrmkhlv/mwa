import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useCreateEvent } from "./useCreateEvent";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface CreateEventProps {
  mini: boolean;
}

export function CreateEvent(props: CreateEventProps) {
  const { mini } = props;
  const { title, description, handlerForm, submitButton } = useCreateEvent();
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
      {mini ? (
        <Button sx={{ m: 2 }} variant="outlined" onClick={handleClickOpen}>
          Создать новый список
        </Button>
      ) : (
        <IconButton onClick={handleClickOpen}>
          <AddCircleIcon />
        </IconButton>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Описание</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Для того, чтобы создать список, заполнить поля:
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
