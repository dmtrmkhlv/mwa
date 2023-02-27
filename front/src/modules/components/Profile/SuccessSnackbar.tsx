import PropTypes from "prop-types";
import { Snackbar, SnackbarContent } from "@mui/material";

const SuccessSnackbar = (props: any) => {
  const { open, onClose } = props;

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
      <SnackbarContent message={<span>Изменения сохранены!</span>} />
    </Snackbar>
  );
};

SuccessSnackbar.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

SuccessSnackbar.defaultProps = {
  open: true,
  onClose: () => {},
};

export default SuccessSnackbar;
