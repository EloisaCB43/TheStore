import { styled, alpha } from "@mui/system";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const UserIcon = () => {
  const userCategories = [
    { name: "Profile" },
    { name: "My account" },
    { name: "Logout" },
  ];
  const User = styled(PersonOutlineOutlinedIcon)(({ theme }) => ({
    color: alpha(theme.icon.icons.color, 0.9),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.6),
      borderRadius: "7px",
    },
    [theme.breakpoints.down("tablet")]: {
      display: "none",
    },
  }));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <User />
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {userCategories.map((category, i) => (
          <MenuItem
            onClick={handleClose}
            style={{ fontFamily: "Arvo" }}
            key={`MenuItem_${i}`}
          >
            {category.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default UserIcon;
