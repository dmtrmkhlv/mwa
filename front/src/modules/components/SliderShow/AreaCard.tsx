import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useCustomeNavigate } from "../..";

export function AreaCard(props: any) {
  const { images, name } = props;
  const [navigateMain] = useCustomeNavigate("/", true);

  return (
    <>
      <Card sx={{ width: 270, ml: "auto", mr: "auto", mb: "1em" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={images}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            sx={{
              textTransform: "unset",
              color: "#333",
              paddingLeft: "10px",
            }}
            size="small"
            color="primary"
            {...navigateMain}
          >
            Узнать больше ›
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
