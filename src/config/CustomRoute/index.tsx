import { Route } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useStyles } from "./styles";

const CustomRoute = (props: any) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      {/* <main className={classes.root}> */}
      <Route {...props} />
      {/* </main> */}
      <Footer />
    </>
  );
};
export default CustomRoute;
