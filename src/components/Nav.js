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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
              aria-owns={open ? "mouse-over-popover" : undefined}
              onMouseEnter={handlePopoverOpen}
              sx={{ mr: 2 }}
            >
              About Us
            </Button>
            <Popover
              id="mouse-over-popover"
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onMouseLeave={handlePopoverClose}
              onClick={handlePopoverClose}
            >
              <Button component="a" href="/#about" sx={{ p: 1 }}>
                Our Vision
              </Button>
              <br />
              <Button component="a" href="/#about" sx={{ p: 1 }}>
                Policies
              </Button>
              <br />
              <Button component="a" href="/#about" sx={{ p: 1 }}>
                Governors
              </Button>
              <br />
              <Button component="a" href="/#about" sx={{ p: 1 }}>
                Staffs
              </Button>
            </Popover>
            <Button
              aria-owns={open ? "mouse-over-popover" : undefined}
              onMouseEnter={handlePopoverOpen}
              sx={{ mr: 2 }}
            >
              Children
            </Button>
            <Popover
              id="mouse-over-popover"
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onMouseLeave={handlePopoverClose}
              onClick={handlePopoverClose}
            >
              <Button component="a" href="/#about" sx={{ p: 1 }}>
                Curriculum
              </Button>
              <br />
              <Button component="a" href="/#about" sx={{ p: 1 }}>
                Special Education
              </Button>
              <br />
              <Button component="a" href="/#about" sx={{ p: 1 }}>
                Home tutoring
              </Button>
              <br />
              <Button component="a" href="/#about" sx={{ p: 1 }}>
                Admission
              </Button>
            </Popover>
            <Button
              aria-owns={open ? "mouse-over-popover" : undefined}
              onMouseEnter={handlePopoverOpen}
              component="a"
              href="/more"
              sx={{ mr: 2 }}
            >
              Parents
            </Button>
            <Popover
              id="mouse-over-popover"
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onMouseLeave={handlePopoverClose}
              onClick={handlePopoverClose}
            >
              <Button component="a" href="/#about" sx={{ p: 1 }}>
                Activities
              </Button>
              <br />
              <Button component="a" href="/#about" sx={{ p: 1 }}>
                School Kit
              </Button>
              <br />
              <Button component="a" href="/#about" sx={{ p: 1 }}>
                School pdfs
              </Button>
            </Popover>
            <Button
              aria-owns={open ? "mouse-over-popover" : undefined}
              onMouseEnter={handlePopoverOpen}
              component="a"
              href="/more"
              sx={{ mr: 2 }}
            >
              News & Events
            </Button>
            <Popover
              id="mouse-over-popover"
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onMouseLeave={handlePopoverClose}
              onClick={handlePopoverClose}
            >
              <Button component="a" href="/#about" sx={{ p: 1 }}>
                Gallery
              </Button>
              <br />
              <Button component="a" href="/#about" sx={{ p: 1 }}>
                Events
              </Button>
              <br />
              <Button component="a" href="/#about" sx={{ p: 1 }}>
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
