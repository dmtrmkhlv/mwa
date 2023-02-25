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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectListEvent } from "../../store";
import { useAppDispatch } from "../../hooks";
import { getAllEvents } from "../../store/ThunkCreator";
import { NavLink, useNavigate } from "react-router-dom";
import { CreateEvent } from "../CreateEvent/CreateEvent";

export function NavigationEvent() {
  const { value: events } = useSelector(selectListEvent);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllEvents("запрос"));
  }, []);
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List sx={{ width: 500 }}>
        {events.map((event, index) => (
          <ListItem
            disablePadding
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemButton onClick={() => navigate(`/gifts/${event.id}`)}>
              <ListItemText primary={event.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
