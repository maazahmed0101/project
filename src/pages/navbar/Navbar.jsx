import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import imgLog from "./Logo.png";
import { NavLink } from "react-router-dom";
const pages = ["Home", "About", "Contact"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
function ResponsiveAppBar() {
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const Navegation = useNavigate();

  const handleOpenNavMenu = () => {
    // setAnchorElNav(event.currentTarget);
    Navegation("/login");
  };
  // const handleOpenUserMenu = (event) => {
  //   // setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <img src={imgLog} alt="logo" className="my-logo img-fluid" />
          <Typography
            className="Text-Navegation"
            variant="h6"
            noWrap
            component="a"
            href="/login"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Academy
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}
            {/* <Menu
              // id="menu-appbar"
              // anchorEl={anchorElNav}
              // anchorOrigin={{
              //   vertical: "bottom",
              //   horizontal: "left",
              // }}
              // keepMounted
              // transformOrigin={{
              //   vertical: "top",
              //   horizontal: "left",
              // }}
              // open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              // sx={{ display: { xs: "block", md: "none" } }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography> */}
            {/* </MenuItem> */}
            {/* ))} */}
            {/* </Menu> */}
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Academy
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              //   /
              <NavLink
                className="NavegateBtn"
                key={page}
                to={`${page.toLowerCase() === "home" ? "/" : page}`}
              >
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {page}
                </Button>
              </NavLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Login">
              <IconButton
                onClick={handleOpenNavMenu}
                className="BtnContact"
                sx={{ p: 0 }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0hzdyBffXAkFjuAS8nTy59Afub_dMDp5pc2uEh0zlg&s=10"
                />
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              // keepMounted
              // transformOrigin={{
              //   vertical: "top",
              //   horizontal: "right",
              // }}
              // open={Boolean(anchorElUser)}
              // onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))} */}
            {/* </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
