import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useCreateGift } from "./useCreateGift";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface CreateEventProps {
  mini?: boolean;
  eventId: string;
}

// /api/1v / gift / { eventId };
// {
//   "title": "string",
//   "link": "string",
//   "description": "string"
// }

export function CreateGift(props: CreateEventProps) {
  const { eventId } = props;
  const { title, description, link, error, handlerForm, submitButton } =
    useCreateGift(eventId);
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
        Создать подарок
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Описание</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Для того, чтобы создать подарок, заполните поля:
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
          <TextField
            margin="dense"
            id="name"
            label="Ссылка на картинку"
            type="text"
            name="link"
            value={link}
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
