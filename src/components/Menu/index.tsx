import React from "react";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useStyles } from "./styles";
import Home from "./assets/Home";
import Document from "./assets/Document";
import Settings from "./assets/Settings";
import Bid from "./assets/Bid";
import CreditCard from "./assets/CreditCard";
import Power from "./assets/Power";
import StyledButton from "../Button";
import Whatsapp from "./assets/Whatsapp";
import MailIcon from "./assets/MailIcon";
import Box from "./assets/Box";

export default function Menu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} style={{ textAlign: "center" }}>
          <Typography variant="h6" style={{ width: "100%" }}>
            Minha conta
          </Typography>
        </div>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={"Pagina inicial"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Document />
            </ListItemIcon>
            <ListItemText primary={"Como funciona"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText
              primary={"Meu cadastro"}
              style={{ color: "#00C1A5" }}
            />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Bid />
            </ListItemIcon>
            <ListItemText primary={"Meus arremates"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <CreditCard />
            </ListItemIcon>
            <ListItemText primary={"Pagamentos"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Box />
            </ListItemIcon>
            <ListItemText primary={"Retirada"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Power />
            </ListItemIcon>
            <ListItemText primary={"Sair"} />
          </ListItem>
        </List>
        <Divider />
        <List className={classes.listButton}>
          <ListItem aria-labelledby="nested-list-subheader">
            <ListItemText primary={"Atendimento:"} />
          </ListItem>

          <ListItem>
            <StyledButton>
              <Whatsapp />
              Via Whatsapp
            </StyledButton>
          </ListItem>
          <ListItem>
            <StyledButton>
              <MailIcon />
              Vi e-mail
            </StyledButton>
          </ListItem>

          <ListItem aria-labelledby="nested-list-subheader">
            <ListItemText
              primary={"segunda a domingo: 8h às 20h (exceto feriados)"}
            />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
