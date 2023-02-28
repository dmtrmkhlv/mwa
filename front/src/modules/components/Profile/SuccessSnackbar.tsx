import { Snackbar, SnackbarContent } from "@mui/material";

const SuccessSnackbar = (props: any) => {
  const { open, onClose, snackbarText } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      autoHideDuration={6000}
      onClose={onClose}
      open={open}
    >
      <SnackbarContent message={<span>{snackbarText}</span>} />
    </Snackbar>
  );
};

export default SuccessSnackbar;
