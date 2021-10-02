import React from "react";
import { useStyles } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <h2>LOGO</h2>
        </div>

        <div className={classes.search}>
          <TextField
            label="O que você está procurando?"
            placeholder="Digite aqui o que você procura"
            id="outlined-basic"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
          />
        </div>

        <div className={classes.userAccess}>
          <span className={classes.userAccess_span}>Entre</span>
          <span className={classes.userAccess_span}>Cadastre-se</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
