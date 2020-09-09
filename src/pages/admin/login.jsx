import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { auth } from "../../plugins/firebase";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "350px",
    margin: "0 auto",
  },
  title: {
    width: "100%",
    marginBottom: "15px",
  },
  margin: {
    marginBottom: "15px",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  wrapper: {
    position: "relative",
  },
});

export default function AdminLogin() {
  const classes = useStyles();
  const router = useRouter();

  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginCheck = () => {
    setLoading(true);
    console.log(values.email);
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((e) => {
        router.push(`/admin/${e.user.uid}`);
        // console.log(e.user.uid);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setOpen(true);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography component="h1">
            <img
              src="https://prtimes.jp/i/11137/92/resize/d11137-92-214905-0.jpg"
              alt="ロゴ"
              className={classes.title}
            />
          </Typography>

          <div className={classes.margin}>
            <TextField
              id="standard-basic"
              label="メールアドレス"
              onChange={handleChange("email")}
              fullWidth
            />
          </div>

          <div>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-password">
                パスワード
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </CardContent>

        <CardActions>
          <div className={classes.wrapper}>
            <Button variant="outlined" onClick={loginCheck} disabled={loading}>
              ログイン
            </Button>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </CardActions>
      </Card>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="ログインに失敗しました。"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              Close
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
