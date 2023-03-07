import {
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
  ClickAwayListener,
  Tooltip,
  ButtonGroup,
  Link,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Image } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectListEvent, selectListOtherEvent, selectUser } from "../../store";
import { useAppDispatch } from "../../hooks";
import {
  deactivate,
  getAllEvents,
  getAllOtherEvents,
  isActivate,
} from "../../store/ThunkCreator";
import { useNavigate } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { ListEvent } from "../../../interfaces";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import { baseURL } from "../../api/baseURL";

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
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <ClickAwayListener onClickAway={handleTooltipClose}>
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
                  sx={{
                    margin: "5px",
                  }}
                >
                  <ContentCopyIcon />
                </IconButton>
              </Tooltip>
            </ClickAwayListener>
            <Link
              href={`https://vk.com/share.php?url=${encodeURIComponent(
                "https://xn--80aacmsbc4canw2ai.xn--p1ai/event/" + event.id
              )}&title=${encodeURIComponent(
                event.title
              )}&description=${encodeURIComponent(
                event.description
              )}&image=${encodeURIComponent(
                "https://xn--80aacmsbc4canw2ai.xn--p1ai/static/media/brown_lady.46b41722967335586fa0.jpg"
              )}&noparse=true`}
              underline="none"
              target="_blank"
              sx={{
                margin: "5px",
              }}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/5968/5968835.png"
                alt="VK"
                boxSize="32px"
                objectFit="cover"
              />
            </Link>
            <Link
              href={`https://connect.ok.ru/offer?url=${encodeURIComponent(
                "https://xn--80aacmsbc4canw2ai.xn--p1ai/event/" + event.id
              )}&title=${encodeURIComponent(
                event.title
              )}&imageUrl=${encodeURIComponent(
                "https://xn--80aacmsbc4canw2ai.xn--p1ai/static/media/brown_lady.46b41722967335586fa0.jpg"
              )}`}
              underline="none"
              target="_blank"
              sx={{
                margin: "5px",
              }}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3669/3669991.png"
                alt="Odnoklassniki"
                boxSize="32px"
                objectFit="cover"
              />
            </Link>
            <Link
              href={`https://t.me/share/url?url=${encodeURIComponent(
                "https://xn--80aacmsbc4canw2ai.xn--p1ai/event/" + event.id
              )}&text=${encodeURIComponent(event.title)}`}
              underline="none"
              target="_blank"
              sx={{
                margin: "5px",
              }}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3536/3536661.png"
                alt="Telegram"
                boxSize="32px"
                objectFit="cover"
              />
            </Link>
            <Link
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                "https://xn--80aacmsbc4canw2ai.xn--p1ai/event/" + event.id
              )}`}
              underline="none"
              target="_blank"
              sx={{
                margin: "5px",
              }}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
                alt="WhatsApp"
                boxSize="32px"
                objectFit="cover"
              />
            </Link>
          </ButtonGroup>
        </ListItem>
      )}
    </Box>
  );
};

const useEvents = () => {
  const { value: events } = useSelector(selectListEvent);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllEvents("запрос"));
  }, []);
  const ref = useRef<HTMLDivElement>(null);
  const response: [ListEvent[], React.RefObject<HTMLDivElement>] = [
    events,
    ref,
  ];
  return response;
};

const useBooking = () => {
  const { value: events } = useSelector(selectListOtherEvent);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllOtherEvents("запрос"));
  }, []);
  const ref = useRef<HTMLDivElement>(null);
  const response: [ListEvent[], React.RefObject<HTMLDivElement>] = [
    events,
    ref,
  ];
  return response;
};

export function NavigationEvent() {
  const [events, ref] = useEvents();

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
  const [events, ref] = useEvents();

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

export function BookingEvent() {
  const [events, ref] = useBooking();
  const { value: user } = useSelector(selectUser);

  return (
    <Box sx={{ pb: 3 }} ref={ref}>
      <CssBaseline />
      <List sx={{ width: 500 }}>
        {events
          .filter((event) => event.isActive === true)
          .filter((event) => {
            if (!!event.gifts.find((el) => el.userBookId === user.userId)) {
              return true;
            }
            return false;
          })
          .map((event) => (
            <ListEvents key={event.id} event={event} archive={false} />
          ))}
      </List>
    </Box>
  );
}
