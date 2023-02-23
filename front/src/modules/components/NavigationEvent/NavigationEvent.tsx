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
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectListEvent } from "../../store";
import { useAppDispatch } from "../../hooks";
import { getAllEvents } from "../../store/ThunkCreator";

export function NavigationEvent() {
  const { value: events } = useSelector(selectListEvent);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllEvents("запрос"));
  }, []);
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  // const [messages, setMessages] = useState(messageExamples);

  // useEffect(() => {
  //   (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  //   setMessages(refreshMessages());
  // }, [value, setMessages]);
  const handler = () => {
    // dispatch(createEvent("запрос"));
  };
  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      {/* <List> */}
      <ul>
        {events.map((event, index) => (
          <li key={event.id}>{event.title}</li>
          // <ListItem button key={index + event.title}>
          //   <ListItemAvatar>
          //     <Avatar alt="Profile Picture" src={"person"} />
          //   </ListItemAvatar>
          //   <ListItemText primary={event.title} secondary={event.description} />
          // </ListItem>
        ))}
      </ul>
      {/* </List> */}
      <input></input>
      <input></input>
      <Button onClick={handler} variant="contained">
        Создать еще список
      </Button>
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
