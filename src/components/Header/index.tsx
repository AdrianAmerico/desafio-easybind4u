import React from "react";
import { useStyles } from "./styles";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import TextInput from "../TextInput";

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <div className={classes.menu}>
            <MenuOutlinedIcon className={classes.svg} />
          </div>
          <h2>LOGO</h2>
        </div>

        <div className={classes.search}>
          <TextInput
            placeholder="O que você está procurando?"
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon className={classes.svg} />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className={classes.userIcon}>
          <SearchIcon className={classes.svg} />
          <PermIdentityOutlinedIcon className={classes.svg} />
        </div>
        <div className={classes.userAccess}>
          <span className={classes.userAccess_span}>Entre</span>
          <span className={classes.userAccess_span}>Cadastre-se</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
