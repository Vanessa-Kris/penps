import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";

const drawerWidth = 240;

function Nav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const [aboutOpen, setAboutPopoverOpen] = React.useState(false);
  const [childrenOpen, setChildrenPopoverOpen] = React.useState(false);
  const [parentsOpen, setParentsPopoverOpen] = React.useState(false);
  const [newsOpen, setNewsPopoverOpen] = React.useState(false);

  const handleAboutPopoverOpen = (event) => {
    setAboutPopoverOpen(event.currentTarget);
  };
  const handleAboutPopoverClose = () => {
    setAboutPopoverOpen(null);
  };

  const handleChildrenPopoverOpen = (event) => {
    setChildrenPopoverOpen(event.currentTarget);
  };
  const handleChildrenPopoverClose = () => {
    setChildrenPopoverOpen(null);
  };

  const handleParentsPopoverOpen = (event) => {
    setParentsPopoverOpen(event.currentTarget);
  };
  const handleParentsPopoverClose = () => {
    setParentsPopoverOpen(null);
  };

  const handleNewsPopoverOpen = (event) => {
    setNewsPopoverOpen(event.currentTarget);
  };
  const handleNewsPopoverClose = () => {
    setNewsPopoverOpen(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const open = Boolean(aboutOpen, childrenOpen, parentsOpen, newsOpen);
  // const handlePopoverOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handlePopoverClose = () => {
  //   setAnchorEl(null);
  // };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        PENPS
      </Typography>
      <Divider />
      <List sx={{ display: "flex" }}>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center", flexDirection: "column" }}>
            <ListItemText component="a" href="/">
              {" "}
              Home
            </ListItemText>
            <ListItemText component="a" href="/#about">
              {" "}
              About US
            </ListItemText>
            <ListItemText component="a" href="/more">
              {" "}
              Children
            </ListItemText>
            <ListItemText component="a" href="/more">
              {" "}
              Parents
            </ListItemText>
            <ListItemText component="a" href="/contact">
              {" "}
              Contact
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", bgcolor: "#fff" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            PENPS
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button sx={{ mr: 2 }} component="a" href="/">
              Home
            </Button>

            <Button
              aria-owns={open ? "about-popover" : undefined}
              onMouseEnter={handleAboutPopoverOpen}
              sx={{ mr: 2 }}
            >
              About Us
            </Button>
            <Popover
              id="about-popover"
              open={aboutOpen}
              anchorEl={aboutOpen}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onMouseLeave={handleAboutPopoverClose}
              onClick={handleAboutPopoverClose}
            >
              <Button component="a" href="/vision" sx={{ p: 1 }}>
                Our Vision
              </Button>
              <br />
              <Button component="a" href="/policy" sx={{ p: 1 }}>
                Policies
              </Button>
              <br />
              <Button component="a" href="/governors" sx={{ p: 1 }}>
                Governors
              </Button>
              <br />
              <Button component="a" href="/staffs" sx={{ p: 1 }}>
                Staffs
              </Button>
            </Popover>
            <Button
              aria-owns={open ? "children-popover" : undefined}
              onMouseEnter={handleChildrenPopoverOpen}
              sx={{ mr: 2 }}
            >
              Children
            </Button>
            <Popover
              id="children-popover"
              open={childrenOpen}
              anchorEl={childrenOpen}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onMouseLeave={handleChildrenPopoverClose}
              onClick={handleChildrenPopoverClose}
            >
              <Button component="a" href="/curriculum" sx={{ p: 1 }}>
                Curriculum
              </Button>
              <br />
              <Button component="a" href="/special-educationt" sx={{ p: 1 }}>
                Special Education
              </Button>
              <br />
              <Button component="a" href="/home-tutoring" sx={{ p: 1 }}>
                Home tutoring
              </Button>
              <br />
              <Button component="a" href="/admission" sx={{ p: 1 }}>
                Admission
              </Button>
            </Popover>
            <Button
              aria-owns={open ? "parents-popover" : undefined}
              onMouseEnter={handleParentsPopoverOpen}
              component="a"
              href="/more"
              sx={{ mr: 2 }}
            >
              Parents
            </Button>
            <Popover
              id="parents-popover"
              open={parentsOpen}
              anchorEl={parentsOpen}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onMouseLeave={handleParentsPopoverClose}
              onClick={handleParentsPopoverClose}
            >
              <Button component="a" href="/activities" sx={{ p: 1 }}>
                Activities
              </Button>
              <br />
              <Button component="a" href="/school-kit" sx={{ p: 1 }}>
                School Kit
              </Button>
              <br />
              <Button component="a" href="/school-pdfs" sx={{ p: 1 }}>
                School pdfs
              </Button>
            </Popover>
            <Button
              aria-owns={open ? "news-popover" : undefined}
              onMouseEnter={handleNewsPopoverOpen}
              component="a"
              href="/more"
              sx={{ mr: 2 }}
            >
              News & Events
            </Button>
            <Popover
              id="news-popover"
              open={newsOpen}
              anchorEl={newsOpen}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onMouseLeave={handleNewsPopoverClose}
              onClick={handleNewsPopoverClose}
            >
              <Button component="a" href="/gallery" sx={{ p: 1 }}>
                Gallery
              </Button>
              <br />
              <Button component="a" href="/events" sx={{ p: 1 }}>
                Events
              </Button>
              <br />
              <Button component="a" href="/news" sx={{ p: 1 }}>
                Latest News
              </Button>
              <br />
            </Popover>
            <Button component="a" href="/contact" sx={{ mr: 2 }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Nav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Nav;
