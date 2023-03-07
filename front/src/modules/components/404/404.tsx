import { Button, Typography } from "@mui/material";
import { useCustomeNavigate } from "../../hooks";
import "./404.scss";

export const Component404 = () => {
  const style = {
    variant: "outlined",
    color: "#1a202c",
    fontSize: "20px",
    fontWeight: "bold",
    boxShadow: "10px 5px 5px #1a202c",
    mt: 4,
    mb: 4,
  };
  const [navigateToMain] = useCustomeNavigate("/", true);

  return (
    <div className="container">
      <Typography variant="h3" component="h3">
        Something went wrong :(
      </Typography>
      <Typography variant="h1" component="h1">
        404
      </Typography>
      <Typography variant="h2" component="h2">
        Page Not Found
      </Typography>
      <Button sx={style} {...navigateToMain}>
        Go to Home{" "}
      </Button>
    </div>
  );
};
