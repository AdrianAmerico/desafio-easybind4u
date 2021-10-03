import { TextField } from "@material-ui/core";
import { useStyles } from "./styles";
interface InputProps {
  placeholder?: string;
  label?: string;
  inputProps?: any;
}

const TextInput = ({
  placeholder,
  label,
  inputProps,
}: InputProps): JSX.Element => {
    const classes = useStyles()
  return (
    <div className={classes.root}>
      <TextField
        label={label}
        placeholder={placeholder}
        id="outlined-basic"
        variant="outlined"
        color="primary"
        InputProps={inputProps}
        fullWidth
      />
    </div>
  );
};

export default TextInput;
