import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Link from "next/link";

function App({ children }, props) {
  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    notice:{
      color:"#000",
      textDecoration:"none",
      "&link":{
        textDecoration:"none",
        color:"000"
      }
    }
  }));

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const router = useRouter();
  const userId = router.query.userId;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link href={`/admin/${userId}/`}>
          <ListItem button>
            {/* <ListItemIcon>
              <HomeIcon />
            </ListItemIcon> */}
            <ListItemText primary="トップページ" />
          </ListItem>
        </Link>
        <Link href={`/admin/${userId}/myclassMemberList`}>
          <ListItem button>
            {/* <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon> */}
            <ListItemText primary="クラス名簿" />
          </ListItem>
        </Link>
        <Link href={`/admin/${userId}/mySubjects`}>
          <ListItem button>
            {/* <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon> */}
            <ListItemText primary="担当科目" />
          </ListItem>
        </Link>
        {/* <Link href={`/admin/${userId}/test`}> */}
        <a href="https://app.contentful.com/" className={classes.notice}>
          <ListItem button>
            {/* <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon> */}
            <ListItemText primary="お知らせ作成" />
          </ListItem>
        </a>
        {/* </Link> */}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            HAL Tokyo Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default App;
