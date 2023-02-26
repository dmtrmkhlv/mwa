import {
  Box,
  CssBaseline,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
  ListItemButton,
  IconButton,
  ClickAwayListener,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectListEvent } from "../../store";
import { useAppDispatch } from "../../hooks";
import { deactivate, getAllEvents, isActivate } from "../../store/ThunkCreator";
import { NavLink, useNavigate } from "react-router-dom";
import { CreateEvent } from "../CreateEvent/CreateEvent";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { ListEvent } from "../../../interfaces";
import ShortcutIcon from "@mui/icons-material/Shortcut";

interface ListEventsProps {
  event: ListEvent;
  archive: boolean;
}

const ListEvents = (props: ListEventsProps) => {
  const { event, archive } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    navigator.clipboard.writeText(
      `https://xn--80aacmsbc4canw2ai.xn--p1ai/gifts/${event.id}`
    );
    console.log(event);
    setOpen(true);
  };

  const hadlerDesactive = () => {
    dispatch(deactivate(event.id));
  };
  const hadlerIsActive = () => {
    dispatch(isActivate(event.id));
  };
  return (
    <Box sx={{ display: "flex", width: 800 }}>
      <ListItem
        disablePadding
        secondaryAction={
          archive ? (
            <IconButton edge="end" aria-label="delete" onClick={hadlerIsActive}>
              <ShortcutIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={hadlerDesactive}
            >
              <DeleteIcon />
            </IconButton>
          )
        }
      >
        <ListItemButton onClick={() => navigate(`/gifts/${event.id}`)}>
          <ListItemText primary={event.title} />
        </ListItemButton>
      </ListItem>
      {archive ? (
        <ListItem>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div></div>
          </ClickAwayListener>
        </ListItem>
      ) : (
        <ListItem>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Скопирован в буфер"
              >
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={handleTooltipOpen}
                >
                  <ContentCopyIcon />
                </IconButton>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </ListItem>
      )}
    </Box>
  );
};

export function NavigationEvent() {
  const { value: events } = useSelector(selectListEvent);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllEvents("запрос"));
  }, []);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 3 }} ref={ref}>
      <CssBaseline />
      <List sx={{ width: 500 }}>
        {events
          .filter((event) => event.isActive === true)
          .map((event) => (
            <ListEvents key={event.id} event={event} archive={false} />
          ))}
      </List>
    </Box>
  );
}

export function ArchiveEvent() {
  const { value: events } = useSelector(selectListEvent);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllEvents("запрос"));
  }, []);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 3 }} ref={ref}>
      <CssBaseline />
      <List sx={{ width: 500 }}>
        {events
          .filter((event) => event.isActive !== true)
          .map((event) => (
            <ListEvents key={event.id} event={event} archive={true} />
          ))}
      </List>
    </Box>
  );
}
