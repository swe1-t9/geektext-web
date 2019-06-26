import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import RightAlignedButtons from "./RightAlignedButtons";
import Wordmark from "./Wordmark";

const withNavbar = (Component: React.FC): React.FC => () => {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Wordmark/>
          <RightAlignedButtons />
        </Toolbar>
      </AppBar>
      <Component />
    </>
  );
};

export { withNavbar };
