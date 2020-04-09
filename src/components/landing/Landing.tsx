import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import * as React from "react";
import { ChangeEvent, FC, FormEvent, memo } from "react";
import { count } from "../../utils/console";
import { Copyright } from "./Copyright";

const useStyles = makeStyles((theme: Theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  mirror: string;
}

const Landing: FC<Props> = ({ onSubmit, onChange, mirror }: Props): JSX.Element => {
  count(`Landing: render`);
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Chat Room
        </Typography>
        <form onSubmit={onSubmit} className={classes.form} noValidate>
          <TextField
            onChange={onChange}
            autoFocus
            fullWidth
            id="username"
            label="Username"
            margin="normal"
            name="username"
            required
            variant="outlined"
            value={mirror}
          />
          <Button className={classes.submit} color="primary" fullWidth type="submit" variant="contained">
            Connect
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

const memoized = memo<Props>(Landing);

export { memoized as Landing };
