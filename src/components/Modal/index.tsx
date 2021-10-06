import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import ModalCheck from "../../assets/ModalCheck";
import StyledButton from "../Button";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    paper: {
      position: "absolute",
      width: "300px",
      height: "350px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      borderRadius: "16px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      padding: theme.spacing(2, 4, 3),
      "& > svg": {
        margin: "0 auto",
      },
    },
  })
);

interface props {
  open: boolean;
  handleClose: () => void;
}
const SimpleModal = ({ open, handleClose }: props): JSX.Element => {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.root}
    >
      <div className={classes.paper}>
        <ModalCheck />
        <h2>Sua conta foi criada com sucesso :)</h2>
        <StyledButton>Começar</StyledButton>
      </div>
    </Modal>
  );
};

export default SimpleModal;
