import { TextField } from "@material-ui/core";
import { useStyles } from "./styles";
interface InputProps {
  placeholder?: string;
  label?: string;
  inputProps?: any;
  onChange?: any;
  name?: string;
  value?: any;
  required?: string;
  max?: string;
  type?: string;
}

const TextInput = ({
  placeholder,
  label,
  inputProps,
  onChange,
  name,
  value,
  required,
  max,
  type,
}: InputProps): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        label={label}
        value={value}
        placeholder={placeholder}
        id="outlined-basic"
        variant="outlined"
        color="primary"
        name={name}
        onChange={onChange}
        max={max}
        InputProps={inputProps}
        {...(required ? required : null)}
        type={type}
        fullWidth
      />
    </div>
  );
};

export default TextInput;
