import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import RightAlignedButtons from "./RightAlignedButtons";

const withNavbar = (Component: React.FC): React.FC => () => {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            GeekText
          </Typography>
          <RightAlignedButtons />
        </Toolbar>
      </AppBar>
      <Component />
    </>
  );
};

export { withNavbar };
