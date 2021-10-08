import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import { Button, InputAdornment } from "@material-ui/core";
import TextInput from "../../components/TextInput";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import VisibilityOffRoundedIcon from "@material-ui/icons/VisibilityOffRounded";
import StyledButton from "../../components/Button";
import GoogleIcon from "../../assets/GoogleIcon";
import FacebookIcon from "../../assets/FacebookIcon";
import useForm from "../../hooks/useForm";
import useRequests from "../../hooks/useRequests";
import { useHistory } from "react-router-dom";

const LoginPage: React.FC = () => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const { body, onChange, clear } = useForm({ id: "", password: "" });
  const requests = useRequests(setLoading);
  const history = useHistory();

  const showPassword = (): void => {
    setIsVisible(true);
  };

  const hiddenPassword = (): void => {
    setIsVisible(false);
  };

  const submitForm = async () => {
    if (body.id.length > 3 && body.password.length > 3) {
      const { id, password } = body;
      const result = await requests.loginUser({ id, password });

      if (result && result.token) {
        localStorage.setItem("token", result.token);
        history.push("/profile");
      }
      clear();
    }
  };
  useEffect(() => {}, [body]);

  return (
    <>
      <main className={classes.root}>
        <div className={classes.container}>
          <section className={classes.headerInfo}>
            <div className={classes.textContainer}>
              <div>
                <h1 className={classes.mobileText}>
                  Olá! Seja bem vindo ao site
                </h1>
                <h1 className={classes.desktopText}>
                  Olá! Seja bem-vindo ao EasyBind4U
                </h1>
                <span>Entre com seu nome de usuário e senha</span>
              </div>
            </div>
            <div></div>
          </section>

          <form
            className={classes.formContainer}
            onChange={(event: React.FormEvent<HTMLFormElement>) =>
              event.preventDefault()
            }
          >
            <div className={classes.fieldContainer}>
              <TextInput
                placeholder="Usuário"
                onChange={onChange}
                name="id"
                value={body.id}
                required="required"
                inputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <PersonOutlineRoundedIcon className={classes.svg} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextInput
                placeholder="Senha"
                onChange={onChange}
                name="password"
                value={body.password}
                required="required"
                inputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <VpnKeyRoundedIcon className={classes.svg} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">
                      {isVisible ? (
                        <VisibilityOffRoundedIcon
                          className={classes.svg}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <VisibilityRoundedIcon className={classes.svg} />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
              <p>
                <span className={classes.span}>Esqueceu a senha?</span>
              </p>
            </div>

            <StyledButton onClick={submitForm}>Entrar</StyledButton>
          </form>

          <div className={classes.textInfo}>
            <p>
              Nao tem uma conta ? <span>Cadastre-se</span>
            </p>
          </div>

          <div className={classes.divider}>
            <div />
            <span>Ou</span>
            <div />
          </div>

          <div className={classes.buttonContainer}>
            <div className={classes.googleButton}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                startIcon={<GoogleIcon />}
              >
                Entrar com Google
              </Button>
            </div>
            <div className={classes.facebookButton}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                startIcon={<FacebookIcon />}
              >
                Entrar com Facebook
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
